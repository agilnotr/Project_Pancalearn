/* =========================================================
   PancaLearn — Shared state & gamification engine
   Backed by localStorage. Include this AFTER data.js.
   ========================================================= */

const STORAGE_KEY = 'pancalearn_state_v1';

// Versi struktur data di dalam state (key localStorage tetap sama supaya data lama terbaca).
//  1 (tanpa field)  : struktur lama, hanya completedCases
//  2                : + caseProgress (status & jawaban per studi kasus)
const DATA_VERSION = 2;

// Kunci tanggal memakai zona waktu LOKAL pengguna (bukan UTC), supaya "hari ini" berganti
// tengah malam waktu setempat (di WIB, UTC memajukan pergantian hari ke pukul 07.00).
function dateKey(d) {
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${d.getFullYear()}-${mm}-${dd}`; // YYYY-MM-DD
}

function todayStr() {
  return dateKey(new Date());
}

function yesterdayStr() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return dateKey(d);
}

function defaultState() {
  return {
    userName: 'Mahasiswa',
    xp: 0,
    completedMaterials: [],       // array of materi ids
    completedCases: [],           // array of studi kasus ids yang sudah DIJAWAB (benar atau salah)
    caseProgress: {},             // { caseId: { status, selectedAnswer, isCorrect, answeredAt, xpClaimed } }
    quizScores: [],               // array of {score, date}
    challengeProgress: {},        // { challengeId: count }
    completedChallenges: [],      // challenge ids completed (reset daily/weekly externally)
    achievements: [],             // achievement ids unlocked
    streak: { count: 0, lastDate: null },
    theme: 'light',
    dailyLog: {},                 // { 'YYYY-MM-DD': { casesToday, quizzesToday } }
    weeklyLog: {},                // { 'YYYY-WW': { materiThisWeek } }
    dataVersion: DATA_VERSION,
  };
}

// Migrasi data lama -> struktur caseProgress.
// Aturan: TIDAK mengubah XP, TIDAK menghapus data lama, TIDAK mengarang data, dan aman dijalankan
// berulang kali (idempoten). Sistem lama hanya menyimpan id kasus di completedCases, tanpa jawaban,
// tanpa benar/salah, dan tanpa waktu. Karena itu kasus lama hanya diberi status 'answered_legacy'
// (sudah dikerjakan, detail tidak diketahui) dan tidak diberi selectedAnswer/isCorrect/xpClaimed palsu.
function migrateState(state) {
  let changed = false;
  if (!state.caseProgress || typeof state.caseProgress !== 'object' || Array.isArray(state.caseProgress)) {
    state.caseProgress = {};
    changed = true;
  }
  if (!Array.isArray(state.completedCases)) {
    state.completedCases = [];
    changed = true;
  }
  state.completedCases.forEach((id) => {
    if (!state.caseProgress[id]) {
      state.caseProgress[id] = { status: 'answered_legacy' };
      changed = true;
    }
  });
  if (state.dataVersion !== DATA_VERSION) {
    state.dataVersion = DATA_VERSION;
    changed = true;
  }
  return changed;
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw);
    // Merge with defaults to be safe if new fields were added later
    const state = Object.assign(defaultState(), parsed);
    if (migrateState(state)) saveState(state); // simpan hasil migrasi sekali; berikutnya tidak berubah lagi
    return state;
  } catch (e) {
    console.warn('Gagal membaca localStorage, menggunakan state default.', e);
    return defaultState();
  }
}

function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn('Gagal menyimpan ke localStorage.', e);
  }
}

const PancaState = {
  get() {
    return loadState();
  },

  // Helper umum untuk pengembang/pengujian (tidak dipakai UI). Jalur XP resmi: answerCase, completeMaterial, recordQuizResult, claimChallenge.
  set(mutatorFn) {
    const state = loadState();
    mutatorFn(state);
    saveState(state);
    this._updateStreak(state);
    return state;
  },

  // ---------- Streak ----------
  _updateStreak(state) {
    // Called after any learning action to keep streak fresh.
  },

  touchStreak() {
    const state = loadState();
    const today = todayStr();
    if (state.streak.lastDate === today) {
      // already counted today
    } else {
      const yesterday = yesterdayStr();
      if (state.streak.lastDate === yesterday) {
        state.streak.count += 1;
      } else {
        state.streak.count = 1;
      }
      state.streak.lastDate = today;
    }
    saveState(state);
    this._checkAchievements(state);
    return state;
  },

  // ---------- XP / Level ----------

  getLevelInfo(xp) {
    let current = LEVEL_DATA[0];
    let next = LEVEL_DATA[1] || null;
    for (let i = 0; i < LEVEL_DATA.length; i++) {
      if (xp >= LEVEL_DATA[i].minXp) {
        current = LEVEL_DATA[i];
        next = LEVEL_DATA[i + 1] || null;
      }
    }
    const currentMin = current.minXp;
    const nextMin = next ? next.minXp : currentMin + 1000;
    const progressPct = next ? Math.min(100, Math.round(((xp - currentMin) / (nextMin - currentMin)) * 100)) : 100;
    return { current, next, currentMin, nextMin, progressPct };
  },

  // ---------- Materi ----------
  completeMaterial(materiId) {
    const state = loadState();
    if (!state.completedMaterials.includes(materiId)) {
      state.completedMaterials.push(materiId);
      state.xp += XP_REWARDS.materi;

      const week = this._weekKey();
      if (!state.weeklyLog[week]) state.weeklyLog[week] = { materiThisWeek: 0 };
      state.weeklyLog[week].materiThisWeek += 1;

      saveState(state);
      this._checkAchievements(state);
      this.touchStreak();
      return { awarded: true, xp: XP_REWARDS.materi };
    }
    return { awarded: false, xp: 0 };
  },

  // ---------- Studi Kasus ----------
  // Status per kasus: not_started | answered_correct | answered_wrong
  // (+ answered_legacy untuk kasus yang dikerjakan sebelum caseProgress ada; benar/salahnya tidak diketahui).
  // Semua status selain not_started dihitung sebagai "sudah dikerjakan".
  getCaseProgress(caseId) {
    const entry = loadState().caseProgress[caseId];
    return entry || { status: 'not_started' };
  },


  // Jumlah kasus (dari 30) yang sudah dijawab, benar atau salah. Bukan nomor kasus yang sedang dibuka.
  getAnsweredCaseCount(state) {
    const st = state || loadState();
    return STUDI_KASUS_DATA.filter((k) => st.caseProgress[k.id] && st.caseProgress[k.id].status !== 'not_started').length;
  },

  // Menyimpan jawaban SATU KALI. Benar/salah dihitung dari data, bukan dari UI.
  // Jawaban terkunci: pemanggilan ulang tidak mengubah apa pun dan tidak memberi XP.
  // XP: benar = +XP_REWARDS.studiKasus (sekali, dijaga xpClaimed); salah = +0.
  answerCase(caseId, selectedAnswer) {
    const kasus = STUDI_KASUS_DATA.find((k) => k.id === caseId);
    const valid = kasus && Number.isInteger(selectedAnswer) && selectedAnswer >= 0 && selectedAnswer < kasus.options.length;
    if (!valid) return { recorded: false, xp: 0, entry: null };

    const state = loadState();
    const existing = state.caseProgress[caseId];
    if (existing && existing.status !== 'not_started') {
      return { recorded: false, xp: 0, entry: existing };
    }

    const isCorrect = selectedAnswer === kasus.correctIndex;
    const xp = isCorrect ? XP_REWARDS.studiKasus : 0;
    const entry = {
      status: isCorrect ? 'answered_correct' : 'answered_wrong',
      selectedAnswer,
      isCorrect,
      answeredAt: new Date().toISOString(),
      xpClaimed: isCorrect,
    };
    state.caseProgress[caseId] = entry;
    if (!state.completedCases.includes(caseId)) state.completedCases.push(caseId);
    state.xp += xp;

    const day = todayStr();
    if (!state.dailyLog[day]) state.dailyLog[day] = { casesToday: 0, quizzesToday: 0 };
    state.dailyLog[day].casesToday += 1;

    saveState(state);
    this._checkAchievements(state);
    this.touchStreak();
    return { recorded: true, xp, entry };
  },

  // ---------- Quiz ----------
  // Every attempt is recorded (score history, daily challenge progress), but the
  // XP reward is only given for the first quiz completed each day, so pressing
  // "Coba Lagi" repeatedly can't be used to farm XP. Returns the XP awarded.
  recordQuizResult(score) {
    const state = loadState();
    const day = todayStr();
    if (!state.dailyLog[day]) state.dailyLog[day] = { casesToday: 0, quizzesToday: 0 };

    const firstQuizToday = !state.dailyLog[day].quizzesToday;
    const xpAwarded = firstQuizToday ? XP_REWARDS.quiz : 0;

    state.quizScores.push({ score, date: day });
    state.xp += xpAwarded;
    state.dailyLog[day].quizzesToday += 1;

    saveState(state);
    this._checkAchievements(state);
    this.touchStreak();
    return xpAwarded;
  },

  // ---------- Challenges ----------
  _weekKey() {
    const d = new Date();
    const firstJan = new Date(d.getFullYear(), 0, 1);
    const week = Math.ceil(((d - firstJan) / 86400000 + firstJan.getDay() + 1) / 7);
    return `${d.getFullYear()}-W${week}`;
  },

  getChallengeStatus() {
    const state = loadState();
    const day = todayStr();
    const week = this._weekKey();
    const dayLog = state.dailyLog[day] || { casesToday: 0, quizzesToday: 0 };
    const weekLog = state.weeklyLog[week] || { materiThisWeek: 0 };

    return getTodayChallenges().map((c) => {
      const progressKey = c.type === 'daily' ? c.metric : c.metric;
      const value = c.type === 'daily' ? (dayLog[c.metric] || 0) : (weekLog[c.metric] || 0);
      const periodId = c.type === 'daily' ? `${c.id}_${day}` : `${c.id}_${week}`;
      const alreadyClaimed = state.completedChallenges.includes(periodId);
      const done = value >= c.target;
      return { ...c, value, done, alreadyClaimed, periodId };
    });
  },

  // Reward diambil dari definisi challenge (bukan dari argumen/DOM) dan hanya diberikan bila
  // challenge periode ini benar-benar selesai dan belum pernah diklaim. Parameter kedua dipertahankan
  // demi kompatibilitas, tetapi diabaikan.
  claimChallenge(periodId) {
    const status = this.getChallengeStatus().find((c) => c.periodId === periodId);
    if (!status || !status.done || status.alreadyClaimed) return { awarded: false, xp: 0 };

    const state = loadState();
    if (state.completedChallenges.includes(periodId)) return { awarded: false, xp: 0 };
    state.completedChallenges.push(periodId);
    state.xp += status.reward;
    saveState(state);
    this._checkAchievements(state);
    return { awarded: true, xp: status.reward };
  },

  // ---------- Achievements ----------
  _checkAchievements(state) {
    const unlocked = new Set(state.achievements);

    const answeredCases = this.getAnsweredCaseCount(state);
    if (state.completedMaterials.length + answeredCases >= 1) unlocked.add('first-step');
    if (state.streak.count >= 5) unlocked.add('streak-5');
    if (state.quizScores.some((q) => q.score >= 80)) unlocked.add('quiz-master');
    if (answeredCases >= 5) unlocked.add('case-solver');
    if (state.completedMaterials.length >= MATERI_DATA.length) unlocked.add('pancasila-master');

    const newAch = [...unlocked].filter((id) => !state.achievements.includes(id));
    state.achievements = [...unlocked];
    saveState(state);
    if (newAch.length) {
      newAch.forEach((id) => {
        const ach = ACHIEVEMENT_DATA.find((a) => a.id === id);
        if (ach) showToast(`🏆 Achievement unlocked: ${ach.title}`, 'success');
      });
    }
  },

  // ---------- Theme ----------
  setTheme(theme) {
    const state = loadState();
    state.theme = theme;
    saveState(state);
  },

  // ---------- Reset ----------
  // Hanya untuk pengembang (console). Sengaja TIDAK dihubungkan ke tombol apa pun di UI.
  resetAll() {
    localStorage.removeItem(STORAGE_KEY);
  },
};

// ---------- Toast helper (used across pages) ----------
function showToast(message, type = 'default') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  el.textContent = message;
  container.appendChild(el);
  setTimeout(() => el.remove(), 3500);
}
