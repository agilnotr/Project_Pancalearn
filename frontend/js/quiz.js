(function () {
  const wrap = document.getElementById('quiz-wrap');
  const TOTAL = QUIZ_DATA.length;
  let currentIndex = 0;
  let correctCount = 0;
  let wrongCount = 0;
  let answered = false;
  let xpAwarded = false;

  const letter = (i) => String.fromCharCode(65 + i);

  function renderQuestion() {
    answered = false;
    const q = QUIZ_DATA[currentIndex];
    const pct = Math.round((currentIndex / TOTAL) * 100);

    wrap.innerHTML = `
      <div class="progress-label">
        <span>Soal ${currentIndex + 1} dari ${TOTAL}</span>
        <span id="quiz-tally">Benar: ${correctCount} · Salah: ${wrongCount}</span>
      </div>
      <div class="progress-track quiz-progress" id="quiz-progress" role="progressbar" aria-label="Progress quiz" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pct}">
        <div class="progress-fill" style="width:${pct}%"></div>
      </div>
      <div class="card quiz-card">
        <p class="quiz-question" id="quiz-question" tabindex="-1">${q.question}</p>
        <div class="answer-options" id="quiz-options" role="group" aria-labelledby="quiz-question">
          ${q.options.map((opt, i) => `
            <button type="button" data-index="${i}">
              <span class="option-letter" aria-hidden="true">${letter(i)}</span>
              <span>${opt}</span>
            </button>
          `).join('')}
        </div>
        <div class="answer-feedback" id="quiz-feedback" role="status" aria-live="polite"></div>
        <div class="quiz-nav">
          <button type="button" class="btn btn-primary hidden" id="next-btn">${currentIndex === TOTAL - 1 ? 'Lihat Hasil' : 'Soal Berikutnya →'}</button>
        </div>
      </div>
    `;

    const optionsWrap = document.getElementById('quiz-options');
    const feedback = document.getElementById('quiz-feedback');
    const nextBtn = document.getElementById('next-btn');

    optionsWrap.addEventListener('click', (e) => {
      const btn = e.target.closest('button');
      if (!btn || answered) return;
      answered = true;
      const chosen = parseInt(btn.getAttribute('data-index'), 10);
      const isCorrect = chosen === q.correctIndex;
      if (isCorrect) correctCount += 1; else wrongCount += 1;

      [...optionsWrap.children].forEach((b, i) => {
        b.disabled = true;
        if (i === q.correctIndex) b.classList.add('correct');
        else if (i === chosen) b.classList.add('wrong');
      });

      feedback.className = `answer-feedback show ${isCorrect ? 'feedback-correct' : 'feedback-wrong'}`;
      feedback.innerHTML = `
        <h4>${isCorrect ? '✓ Benar!' : 'Kurang Tepat'}</h4>
        ${isCorrect ? '' : `<div class="better-choice"><strong>Jawaban yang tepat: ${letter(q.correctIndex)}. ${q.options[q.correctIndex]}</strong></div>`}
        <p>${q.explanation}</p>
      `;

      document.getElementById('quiz-tally').textContent = `Benar: ${correctCount} · Salah: ${wrongCount}`;
      const done = Math.round(((currentIndex + 1) / TOTAL) * 100);
      const bar = document.getElementById('quiz-progress');
      bar.setAttribute('aria-valuenow', done);
      bar.firstElementChild.style.width = `${done}%`;

      nextBtn.classList.remove('hidden');
      feedback.scrollIntoView({ block: 'nearest' });
    });

    nextBtn.addEventListener('click', () => {
      currentIndex += 1;
      if (currentIndex >= TOTAL) {
        renderResult();
      } else {
        renderQuestion();
        focusTop();
      }
    });
  }

  // Setelah ganti layar, bawa fokus & posisi ke bagian atas kartu (keyboard & screen reader).
  function focusTop() {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    wrap.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    const target = document.getElementById('quiz-question') || document.getElementById('quiz-result-title');
    if (target) target.focus({ preventScroll: true });
  }

  function renderResult() {
    const score = Math.round((correctCount / TOTAL) * 100);

    let xp = 0;
    if (!xpAwarded) {
      xp = PancaState.recordQuizResult(score);
      xpAwarded = true;
      refreshXpPill();
    }

    const scores = PancaState.get().quizScores.map((s) => s.score);
    const best = scores.length ? Math.max(...scores) : score;

    wrap.innerHTML = `
      <div class="card quiz-result">
        <h2 id="quiz-result-title" tabindex="-1">${score >= 70 ? '🎉 Kerja Bagus!' : score >= 40 ? '👍 Lumayan!' : '💪 Terus Berlatih!'}</h2>
        <div class="result-score">${score}/100</div>
        <div class="result-stats">
          <div><div class="result-stat-num" style="color:var(--success);">${correctCount}</div><div class="caption">Benar</div></div>
          <div><div class="result-stat-num" style="color:var(--danger);">${wrongCount}</div><div class="caption">Salah</div></div>
          <div><div class="result-stat-num" style="color:var(--primary-text);">+${xp} XP</div><div class="caption">XP Didapat</div></div>
        </div>
        <p class="caption">Skor terbaikmu: ${best}/100</p>
        ${xp === 0 ? '<p class="caption">XP quiz hanya diberikan untuk quiz pertama setiap hari. Skor kamu tetap tercatat.</p>' : ''}
        <div class="result-actions">
          <button type="button" class="btn btn-secondary" id="retry-btn">Coba Lagi</button>
          <a href="studi-kasus.html" class="btn btn-primary">Lanjut ke Studi Kasus</a>
        </div>
      </div>
    `;
    focusTop();

    document.getElementById('retry-btn').addEventListener('click', () => {
      currentIndex = 0;
      correctCount = 0;
      wrongCount = 0;
      xpAwarded = false;
      renderQuestion();
      focusTop();
    });
  }

  renderQuestion();
})();
