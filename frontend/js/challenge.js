(function () {
  const dailyGrid = document.getElementById('daily-grid');
  const weeklyGrid = document.getElementById('weekly-grid');

  // Tombol aksi untuk challenge yang belum selesai, berdasarkan metrik yang dihitung.
  const ACTIONS = {
    casesToday: { href: 'studi-kasus.html', label: 'Kerjakan Studi Kasus' },
    quizzesToday: { href: 'quiz.html', label: 'Mulai Quiz' },
    materiThisWeek: { href: 'materi.html', label: 'Buka Materi' },
  };

  function actionHtml(c) {
    if (c.alreadyClaimed) return '<span class="badge badge-success">✓ Reward diklaim</span>';
    if (c.done) return `<button type="button" class="btn btn-primary btn-block claim-btn" data-period="${c.periodId}">Klaim +${c.reward} XP</button>`;
    const action = ACTIONS[c.metric];
    return action ? `<a href="${action.href}" class="btn btn-secondary btn-block">${action.label}</a>` : '';
  }

  function cardHtml(c) {
    const value = Math.min(c.value, c.target);
    const pct = Math.round((value / c.target) * 100);
    const state = c.alreadyClaimed ? ' completed' : c.done ? ' ready' : '';

    return `
      <article class="card challenge-card${state}" data-period="${c.periodId}">
        <div class="flex-between">
          <span class="badge badge-primary">${c.type === 'daily' ? 'Harian' : 'Mingguan'}</span>
          <span class="challenge-reward">+${c.reward} XP</span>
        </div>
        <h3 class="challenge-title" tabindex="-1">${c.title}</h3>
        <div class="challenge-progress">
          <div class="progress-track" role="progressbar" aria-label="Progress: ${c.title}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pct}">
            <div class="progress-fill" style="width:${pct}%"></div>
          </div>
          <span class="caption">${value}/${c.target}</span>
        </div>
        ${actionHtml(c)}
      </article>
    `;
  }

  function render(focusPeriod) {
    const statuses = PancaState.getChallengeStatus();
    dailyGrid.innerHTML = statuses.filter((c) => c.type === 'daily').map(cardHtml).join('');
    weeklyGrid.innerHTML = statuses.filter((c) => c.type === 'weekly').map(cardHtml).join('');

    document.querySelectorAll('.claim-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const periodId = btn.getAttribute('data-period');
        // Reward & status selesai diverifikasi di state, bukan dari atribut HTML.
        const result = PancaState.claimChallenge(periodId);
        if (result.awarded) {
          showToast(`+${result.xp} XP — Challenge selesai!`, 'success');
          refreshXpPill();
        }
        render(periodId);
      });
    });

    if (focusPeriod) {
      const card = document.querySelector(`.challenge-card[data-period="${focusPeriod}"] .challenge-title`);
      if (card) card.focus({ preventScroll: true });
    }
  }

  render();
})();
