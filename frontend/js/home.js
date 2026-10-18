/* =========================================================
   PancaLearn — Home page
   Renders data-driven blocks (angka & progress selalu dari data/state asli).
   Requires data.js, state.js, main.js to be loaded first.
   ========================================================= */
(function () {
  const PILLAR_COUNT = 5;      // materi utama yang disorot di Home
  const FEATURED_CASES = 3;    // studi kasus yang dipratinjau di Home

  // One block failing must never take down the rest of the page.
  function safe(name, fn) {
    try { fn(); } catch (e) { console.warn(`[Home] ${name} gagal dirender:`, e); }
  }
  const $ = (id) => document.getElementById(id);

  let state;
  try { state = PancaState.get(); } catch (e) { state = { xp: 0, completedMaterials: [], completedCases: [], quizScores: [] }; }

  const totalMateri = MATERI_DATA.length;
  const totalKasus = STUDI_KASUS_DATA.length;
  const totalSoal = QUIZ_DATA.length;

  // ---- Statistik: angka nyata dari data ----
  safe('stats', () => {
    [['stat-materi', totalMateri], ['stat-kasus', totalKasus], ['stat-quiz', totalSoal]].forEach(([id, n]) => {
      const el = $(id);
      if (!el) return;
      el.setAttribute('data-counter', n);
      el.textContent = n;
    });
    animateCounters();
  });

  // ---- Hero CTA: lanjut dari materi pertama yang belum selesai ----
  safe('hero-cta', () => {
    const cta = $('hero-cta');
    const next = MATERI_DATA.find((m) => !state.completedMaterials.includes(m.id));
    if (!cta || !next) return;
    cta.href = `pages/detail-materi.html?id=${next.id}`;
    cta.textContent = state.completedMaterials.length ? 'Lanjutkan Belajar' : 'Mulai Belajar';
  });

  // ---- 5 Sila (button = bisa diakses keyboard) ----
  safe('sila', () => {
    const grid = $('sila-grid');
    const detail = $('sila-detail');
    grid.innerHTML = SILA_DATA.map((s, i) => `
      <button type="button" class="card sila-card reveal-on-scroll" data-index="${i}" aria-expanded="false" aria-controls="sila-detail">
        <span class="sila-number">${s.number}</span>
        <img
  class="sila-icon-image"
  src="images/pancasila/${s.image}"
  alt=""
  aria-hidden="true"
/>
        <span class="sila-title">${s.title}</span>
      </button>
    `).join('');

    grid.querySelectorAll('.sila-card').forEach((card) => {
      card.addEventListener('click', () => {
        const s = SILA_DATA[card.getAttribute('data-index')];
        grid.querySelectorAll('.sila-card').forEach((c) => c.setAttribute('aria-expanded', String(c === card)));
       detail.innerHTML = `<h3>Sila ${s.number}: ${s.title}</h3><p>${s.detail}</p>`;
        detail.classList.add('open');
        detail.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
    });
  });

  // ---- Materi: 5 materi utama + progress nyata dari 20 materi ----
  safe('materi', () => {
    const done = state.completedMaterials.filter((id) => MATERI_DATA.some((m) => m.id === id)).length;
    const pct = totalMateri ? Math.round((done / totalMateri) * 100) : 0;

    $('materi-subtitle').textContent = `Lima materi pilihan sebagai titik awal. Total ada ${totalMateri} materi yang bisa kamu jelajahi.`;
    $('materi-all-btn').textContent = `Lihat Semua ${totalMateri} Materi`;

    $('learn-progress').innerHTML = `
      <div class="flex-between">
        <div>
          <div class="caption">Learning Progress</div>
          <strong>${done} / ${totalMateri} Materi Selesai</strong>
        </div>
        <span class="learn-progress-pct">${pct}%</span>
      </div>
      <div class="progress-track" role="progressbar" aria-label="Progress materi" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pct}">
        <div class="progress-fill" style="width:${pct}%"></div>
      </div>
    `;

    $('pillar-grid').innerHTML = MATERI_DATA.slice(0, PILLAR_COUNT).map((m) => {
      const isDone = state.completedMaterials.includes(m.id);
      return `
        <article class="card pillar-card reveal-on-scroll">
          <div class="pillar-top">
            <span class="feature-icon" aria-hidden="true">${m.icon}</span>
            ${isDone ? '<span class="badge badge-success">✓ Selesai</span>' : '<span class="badge">Belum dipelajari</span>'}
          </div>
          <h3>${m.title}</h3>
          <p>${m.description}</p>
          <span class="caption">⏱ ${m.readingTime} menit baca</span>
          <a href="pages/detail-materi.html?id=${m.id}" class="btn btn-secondary btn-block">Pelajari<span class="visually-hidden">: ${m.title}</span></a>
        </article>
      `;
    }).join('');
  });

  // ---- Studi kasus: pratinjau dari data asli ----
  safe('kasus', () => {
    $('kasus-subtitle').textContent = `${totalKasus} situasi nyata untuk menguji keputusanmu. Pilih tindakan yang paling tepat, lalu pahami alasannya.`;
    $('kasus-all-btn').textContent = `Lihat Semua ${totalKasus} Studi Kasus`;

    $('featured-kasus').innerHTML = STUDI_KASUS_DATA.slice(0, FEATURED_CASES).map((c) => {
      const isDone = !!state.caseProgress && !!state.caseProgress[c.id] && state.caseProgress[c.id].status !== 'not_started';
      return `
        <article class="card case-preview reveal-on-scroll">
          <div class="badge-row">
            <span class="badge badge-primary">${c.topic}</span>
            <span class="badge">Sila ke-${c.silaTerkait}</span>
            ${isDone ? '<span class="badge badge-success">✓ Sudah dijawab</span>' : ''}
          </div>
          <h3>${c.question}</h3>
          <a href="pages/studi-kasus.html?id=${c.id}" class="btn btn-secondary btn-block">Coba Sekarang<span class="visually-hidden">: studi kasus ${c.topic}</span></a>
        </article>
      `;
    }).join('');
  });

  // ---- Quiz / Challenge / Level: semuanya dari state nyata ----
  safe('quiz-challenge', () => {
    const scores = state.quizScores.map((q) => q.score);
    const best = scores.length ? Math.max(...scores) : null;
    const challenges = PancaState.getChallengeStatus();
    const lvl = PancaState.getLevelInfo(state.xp);

    const challengeRows = challenges.map((c) => {
      const value = Math.min(c.value, c.target);
      const pct = Math.round((value / c.target) * 100);
      return `
        <li class="mini-challenge">
          <div class="flex-between gap-8">
            <span>${c.title}</span>
            <span class="caption">${c.alreadyClaimed ? '✓' : `${value}/${c.target}`}</span>
          </div>
          <div class="progress-track" style="height:6px;"><div class="progress-fill" style="width:${c.alreadyClaimed ? 100 : pct}%"></div></div>
        </li>
      `;
    }).join('');

    $('qc-grid').innerHTML = `
      <article class="card qc-card reveal-on-scroll">
        <div class="feature-icon" aria-hidden="true">❓</div>
        <h3>Quiz Interaktif</h3>
        <p>${totalSoal} soal pilihan ganda dengan skor akhir dan penjelasan jawaban. XP +${XP_REWARDS.quiz} untuk quiz pertama setiap hari.</p>
        <span class="caption">${best === null ? 'Kamu belum mengerjakan quiz.' : `Skor terbaikmu: ${best}/100`}</span>
        <a href="pages/quiz.html" class="btn btn-primary btn-block">Mulai Quiz</a>
      </article>

      <article class="card qc-card reveal-on-scroll">
        <div class="feature-icon" aria-hidden="true">🎯</div>
        <h3>Challenge</h3>
        <ul class="mini-challenge-list">${challengeRows}</ul>
        <a href="pages/challenge.html" class="btn btn-secondary btn-block">Lihat Challenge</a>
      </article>

      <article class="card qc-card reveal-on-scroll">
        <div class="feature-icon" aria-hidden="true">⚡</div>
        <h3>Level ${lvl.current.level}: ${lvl.current.title}</h3>
        <p>${state.xp} XP terkumpul${lvl.next ? ` · ${Math.max(0, lvl.nextMin - state.xp)} XP lagi menuju ${lvl.next.title}` : ' · Level maksimum!'}</p>
        <div class="progress-track" role="progressbar" aria-label="Progress level" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${lvl.progressPct}">
          <div class="progress-fill" style="width:${lvl.progressPct}%"></div>
        </div>
        <a href="pages/progress.html" class="btn btn-secondary btn-block">Lihat Progress</a>
      </article>
    `;
  });

  // ---- Team ----
  safe('team', () => {
    $('team-grid').innerHTML = TEAM_DATA.map((t) => `
      <div class="card card-static team-card reveal-on-scroll">
        <div class="team-avatar" aria-hidden="true">${t.initials}</div>
        <h3>${t.name}</h3>
        <span class="team-role">${t.role}</span>
        <p>${t.desc}</p>
      </div>
    `).join('');
  });
})();
