(function () {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const index = MATERI_DATA.findIndex((m) => m.id === id);
  // Unknown/missing id falls back to the first materi; "next" must follow the materi actually shown.
  const currentIndex = index >= 0 ? index : 0;
  const materi = MATERI_DATA[currentIndex];
  const nextMateri = MATERI_DATA[currentIndex + 1] || null;

  const state = PancaState.get();
  const alreadyDone = state.completedMaterials.includes(materi.id);

  // Mark as completed as soon as the user opens the material (simple, exploit-resistant since it's a Set/array).
  const result = PancaState.completeMaterial(materi.id);
  if (result.awarded) showToast(`+${result.xp} XP — Materi "${materi.title}" selesai!`, 'success');

  document.title = `${materi.title} — PancaLearn`;

  document.getElementById('detail-header').innerHTML = `
    <a href="materi.html" class="caption">← Kembali ke Materi</a>
    <h1 style="margin-top:14px;">${materi.icon} ${materi.title}</h1>
    <div class="detail-meta">
      <span class="badge">⏱ ${materi.readingTime} menit baca</span>
      <span class="badge badge-success">✓ Materi selesai dipelajari</span>
    </div>
    <div class="progress-track"><div class="progress-fill" style="width:100%"></div></div>
  `;

  const relatedCase = STUDI_KASUS_DATA.find((c) => c.id === materi.relatedCaseId);

  document.getElementById('detail-body').innerHTML = `
    <div class="detail-section">
      <h2>Ringkasan</h2>
      <p>${materi.summary}</p>
    </div>

    <div class="detail-section">
      <h2>Poin-Poin Penting</h2>
      <ul class="key-points">
        ${materi.keyPoints.map((p) => `<li>${p}</li>`).join('')}
      </ul>
    </div>

    <div class="detail-section">
      <h2>Penjelasan</h2>
      <p>${materi.content}</p>
    </div>

    <div class="detail-section">
      <h2>Contoh Kehidupan Nyata</h2>
      <p>${materi.realLifeExample}</p>
    </div>

    <div class="detail-section">
      <h2>Mini Quiz</h2>
      <div class="card mini-quiz-box">
        <p style="color:var(--text-primary); font-weight:600;">${materi.miniQuiz.question}</p>
        <div class="mini-quiz-options" id="mini-quiz-options">
          ${materi.miniQuiz.options.map((opt, i) => `<button type="button" data-index="${i}">${opt}</button>`).join('')}
        </div>
        <div class="mini-quiz-feedback" id="mini-quiz-feedback" aria-live="polite"></div>
      </div>
    </div>

    ${relatedCase ? `
    <div class="detail-section">
      <h2>Studi Kasus Terkait</h2>
      <div class="card">
        <span class="badge badge-primary">${relatedCase.topic}</span>
        <p style="margin-top:12px; color:var(--text-primary);">${relatedCase.question}</p>
        <a href="studi-kasus.html?id=${relatedCase.id}" class="btn btn-secondary">Coba Studi Kasus Ini</a>
      </div>
    </div>` : ''}

    <div class="detail-section">
      <h2>Butuh Penjelasan Lebih Lanjut?</h2>
      <a class="btn btn-primary" href="pancai.html?context=${encodeURIComponent(materi.title)}">Tanya PancaAI tentang materi ini</a>
    </div>

    <div class="detail-section text-center">
      ${nextMateri
        ? `<p>Materi selanjutnya</p><a href="detail-materi.html?id=${nextMateri.id}" class="btn btn-secondary">${nextMateri.icon} ${nextMateri.title} →</a>`
        : `<p>🎉 Kamu telah mencapai materi terakhir!</p><a href="materi.html" class="btn btn-secondary">Kembali ke Daftar Materi</a>`}
    </div>
  `;

  // ---- Mini quiz interaction ----
  const optionsWrap = document.getElementById('mini-quiz-options');
  const feedback = document.getElementById('mini-quiz-feedback');
  let answered = false;

  optionsWrap.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn || answered) return;
    answered = true;
    const chosen = parseInt(btn.getAttribute('data-index'), 10);
    const correct = materi.miniQuiz.correctIndex;

    [...optionsWrap.children].forEach((b, i) => {
      b.disabled = true;
      if (i === correct) b.classList.add('correct');
      else if (i === chosen) b.classList.add('wrong');
    });

    if (chosen === correct) {
      feedback.className = 'mini-quiz-feedback show feedback-correct';
      feedback.innerHTML = `✅ Benar! ${materi.miniQuiz.explanation}`;
    } else {
      feedback.className = 'mini-quiz-feedback show feedback-wrong';
      feedback.innerHTML = `❌ Kurang tepat. ${materi.miniQuiz.explanation}`;
    }
  });
})();
