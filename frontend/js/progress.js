(function () {
  const state = PancaState.get();
  const levelInfo = PancaState.getLevelInfo(state.xp);

  document.getElementById('greeting').textContent = `Halo, ${state.userName} 👋`;

  document.getElementById('progress-hero').innerHTML = `
    <div class="progress-hero-top">
      <div>
        <div class="caption" style="color:rgba(255,255,255,0.8);">Level ${levelInfo.current.level}</div>
        <h2 style="margin:4px 0;">${levelInfo.current.title}</h2>
      </div>
      <div style="text-align:right;">
        <div style="font-weight:800; font-size:1.3rem;">${state.xp} XP</div>
        <div class="caption" style="color:rgba(255,255,255,0.8);">${levelInfo.next ? `Menuju ${levelInfo.next.title}` : 'Level maksimum!'}</div>
      </div>
    </div>
    <div class="progress-track"><div class="progress-fill" style="width:${levelInfo.progressPct}%"></div></div>
    <p style="margin-top:10px; color:rgba(255,255,255,0.85); font-size:0.85rem;">${state.xp} / ${levelInfo.next ? levelInfo.nextMin : levelInfo.currentMin} XP</p>
  `;

  const materiPct = Math.round((state.completedMaterials.length / MATERI_DATA.length) * 100);
  const answeredCases = PancaState.getAnsweredCaseCount(state);
  const kasusPct = Math.round((answeredCases / STUDI_KASUS_DATA.length) * 100);
  const avgQuiz = state.quizScores.length
    ? Math.round(state.quizScores.reduce((a, q) => a + q.score, 0) / state.quizScores.length)
    : 0;
  const challengeStatuses = PancaState.getChallengeStatus();
  const claimedChallenges = challengeStatuses.filter((c) => c.alreadyClaimed).length;
  const challengePct = Math.round((claimedChallenges / challengeStatuses.length) * 100);

  document.getElementById('stat-cards').innerHTML = `
    <div class="card stat-card"><div class="stat-value">${state.completedMaterials.length}/${MATERI_DATA.length}</div><div class="caption">Materi</div></div>
    <div class="card stat-card"><div class="stat-value">${answeredCases}/${STUDI_KASUS_DATA.length}</div><div class="caption">Studi Kasus</div></div>
    <div class="card stat-card"><div class="stat-value">${avgQuiz}%</div><div class="caption">Rata-rata Quiz</div></div>
    <div class="card stat-card"><div class="stat-value">🔥 ${state.streak.count}</div><div class="caption">Hari Beruntun</div></div>
  `;

  document.getElementById('progress-bars').innerHTML = `
    <div class="progress-bar-row">
      <div class="label-row"><span>Materi</span><span>${materiPct}%</span></div>
      <div class="progress-track"><div class="progress-fill" style="width:${materiPct}%"></div></div>
    </div>
    <div class="progress-bar-row">
      <div class="label-row"><span>Studi Kasus</span><span>${kasusPct}%</span></div>
      <div class="progress-track"><div class="progress-fill" style="width:${kasusPct}%"></div></div>
    </div>
    <div class="progress-bar-row">
      <div class="label-row"><span>Quiz Average</span><span>${avgQuiz}%</span></div>
      <div class="progress-track"><div class="progress-fill" style="width:${avgQuiz}%"></div></div>
    </div>
    <div class="progress-bar-row">
      <div class="label-row"><span>Challenge</span><span>${challengePct}%</span></div>
      <div class="progress-track"><div class="progress-fill" style="width:${challengePct}%"></div></div>
    </div>
  `;

  document.getElementById('achievement-grid').innerHTML = ACHIEVEMENT_DATA.map((a) => {
    const unlocked = state.achievements.includes(a.id);
    return `
      <div class="card achievement-card ${unlocked ? 'unlocked' : ''}">
        <div class="ach-icon">${a.icon}</div>
        <h3>${a.title}</h3>
        <span class="visually-hidden">${unlocked ? 'Sudah terbuka' : 'Masih terkunci'}.</span>
        <p>${a.description}</p>
      </div>
    `;
  }).join('');
})();
