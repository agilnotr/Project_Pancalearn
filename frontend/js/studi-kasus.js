/* =========================================================
   PancaLearn — Studi Kasus (30 kasus individual)
   Alur bertahap, satu renderer untuk semua kasus:
     Tahap 1  Permasalahan (judul, label ilustrasi, narasi)
     Tahap 2  Pertanyaan + pilihan (jawaban langsung terkunci)
     Tahap 3  Hasil: Benar!/Kurang Tepat → penjelasan → Upaya → Hasil Upaya → Pengalaman → Nilai Pancasila
   Jawaban & progress disimpan di PancaState.caseProgress (localStorage), jadi bertahan setelah refresh.
   Progress = jumlah kasus yang sudah dijawab (urutan pengerjaan bebas), bukan nomor kasus yang dibuka.
   ========================================================= */
(function () {
  const wrap = document.getElementById('kasus-wrap');
  const TOTAL = STUDI_KASUS_DATA.length;
  const letter = (i) => String.fromCharCode(65 + i);
  const pad = (n) => String(n).padStart(2, '0');
  const silaTitle = (n) => (SILA_DATA[n - 1] ? SILA_DATA[n - 1].title : '');

  const params = new URLSearchParams(window.location.search);
  let currentIndex = (() => {
    const idx = STUDI_KASUS_DATA.findIndex((k) => k.id === params.get('id'));
    return idx >= 0 ? idx : 0;
  })();
  let showSummary = params.get('view') === 'ringkasan';

  /* ---------- Helpers state ---------- */
  const statusOf = (state, id) => (state.caseProgress[id] ? state.caseProgress[id].status : 'not_started');
  const isAnswered = (status) => status !== 'not_started';

  /* ---------- Components ---------- */

  function renderProgress(state) {
    const answered = PancaState.getAnsweredCaseCount(state);
    const pct = Math.round((answered / TOTAL) * 100);
    return `
      <div class="progress-label">
        <span>Kasus ${pad(currentIndex + 1)} dari ${TOTAL}</span>
        <span>${answered} / ${TOTAL} dikerjakan</span>
      </div>
      <div class="progress-track" role="progressbar" aria-label="Progress studi kasus" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pct}" aria-valuetext="${answered} dari ${TOTAL} kasus sudah dikerjakan">
        <div class="progress-fill" style="width:${pct}%"></div>
      </div>
      ${answered === TOTAL ? '<p class="caption" style="margin:0 0 12px;">Semua kasus sudah dikerjakan. <button type="button" class="link-btn" id="show-summary">Lihat ringkasan</button></p>' : ''}
    `;
  }

  const STATUS_MARK = { answered_correct: '✓', answered_wrong: '✕', answered_legacy: '●' };
  const STATUS_LABEL = { not_started: 'belum dikerjakan', answered_correct: 'dijawab benar', answered_wrong: 'dijawab kurang tepat', answered_legacy: 'sudah dikerjakan' };

  function renderCaseList(state) {
    return `
      <details class="kasus-list">
        <summary>Pilih kasus (01–${TOTAL})</summary>
        <div class="kasus-list-grid">
          ${STUDI_KASUS_DATA.map((k, i) => {
            const st = statusOf(state, k.id);
            const current = i === currentIndex;
            const cls = st === 'answered_correct' ? ' is-correct' : st === 'answered_wrong' ? ' is-wrong' : st === 'answered_legacy' ? ' is-legacy' : '';
            return `<button type="button" class="kasus-chip${cls}${current ? ' is-current' : ''}" data-go="${i}" ${current ? 'aria-current="true"' : ''} aria-label="Kasus ${i + 1}: ${k.title}, ${STATUS_LABEL[st]}">${STATUS_MARK[st] || pad(i + 1)}</button>`;
          }).join('')}
        </div>
        <p class="caption kasus-legend">✓ benar · ✕ kurang tepat · ● sudah dikerjakan (riwayat lama) · angka = belum dikerjakan</p>
      </details>
    `;
  }

  function renderCaseHeader(kasus, status) {
    const answered = isAnswered(status);
    const statusBadge = {
      answered_correct: '<span class="badge badge-success">Benar</span>',
      answered_wrong: '<span class="badge">Kurang Tepat</span>',
      answered_legacy: '<span class="badge">Sudah dikerjakan</span>',
    }[status] || '<span class="badge">Belum dikerjakan</span>';
    return `
      <header class="case-header">
        <div class="badge-row">
          <span class="badge badge-primary">${kasus.topic}</span>
          ${answered ? `<span class="badge">Sila ke-${kasus.silaTerkait}</span>` : ''}
          ${statusBadge}
        </div>
        <h2 class="case-title" id="case-title" tabindex="-1">${kasus.title}</h2>
        <p class="caption">Kasus ilustrasi berdasarkan situasi sehari-hari.</p>
      </header>
    `;
  }

  // Tahap 1: hanya permasalahan
  function renderProblem(kasus) {
    return `
      <ol class="case-steps">
        <li class="case-section">
          <h3>Permasalahan yang Dihadapi</h3>
          <p>${kasus.permasalahan}</p>
        </li>
      </ol>
    `;
  }

  // Tahap 2: pertanyaan + pilihan (terkunci bila sudah dijawab)
  function renderQuestion(kasus) {
    return `
      <div class="case-question">
        <span class="eyebrow">Apa yang akan kamu lakukan?</span>
        <p class="kasus-question" id="case-prompt">${kasus.prompt}</p>
      </div>
    `;
  }

  function renderOptions(kasus, entry) {
    const answered = entry && entry.status !== 'not_started';
    const selected = answered && Number.isInteger(entry.selectedAnswer) ? entry.selectedAnswer : -1;
    return `
      <div class="answer-options" id="kasus-options" role="group" aria-labelledby="case-prompt">
        ${kasus.options.map((opt, i) => {
          let cls = '';
          if (answered) {
            if (i === kasus.correctIndex) cls = 'correct';
            else if (i === selected) cls = 'wrong';
          }
          const note = answered && i === selected ? ' <span class="visually-hidden">(jawabanmu)</span>' : '';
          return `
            <button type="button" data-index="${i}" class="${cls}${i === selected ? ' is-selected' : ''}" ${answered ? 'disabled' : ''}>
              <span class="option-letter" aria-hidden="true">${letter(i)}</span>
              <span class="option-text">${opt}${note}</span>
            </button>`;
        }).join('')}
      </div>
    `;
  }

  // Tahap 3: hasil
  function renderResult(kasus, entry, ctx) {
    const status = entry.status;
    const correct = kasus.correctIndex;
    const betterChoice = `
      <div class="better-choice">
        <strong>${status === 'answered_wrong' ? 'Pilihan yang lebih tepat' : 'Jawaban yang tepat'}: ${letter(correct)}. ${kasus.options[correct]}</strong>
        <p>${kasus.optionFeedback[correct]}</p>
      </div>`;

    let heading, body, cls, xpLine;
    if (status === 'answered_correct') {
      heading = 'Benar!';
      cls = 'feedback-correct';
      body = `<p>${kasus.optionFeedback[entry.selectedAnswer]}</p>`;
      xpLine = ctx.justAnswered
        ? `<p class="xp-line">⚡ +${ctx.xpGained} XP untuk kasus ini</p>`
        : `<p class="xp-line xp-line-muted">XP kasus ini sudah kamu dapatkan (+${XP_REWARDS.studiKasus} XP), tidak diberikan dua kali.</p>`;
    } else if (status === 'answered_wrong') {
      heading = 'Kurang Tepat';
      cls = 'feedback-wrong';
      body = `<p>${kasus.optionFeedback[entry.selectedAnswer]}</p>${betterChoice}`;
      xpLine = '<p class="xp-line xp-line-muted">Jawabanmu kurang tepat, jadi tidak ada XP untuk kasus ini. Kasus ini tetap dihitung sebagai progress.</p>';
    } else { // answered_legacy
      heading = 'Kasus ini sudah kamu kerjakan';
      cls = 'feedback-correct';
      body = `<p>Kasus ini dikerjakan sebelum pembaruan, sehingga pilihan jawabanmu tidak tersimpan. Berikut pembahasannya.</p>${betterChoice}`;
      xpLine = '<p class="xp-line xp-line-muted">Tidak ada XP tambahan untuk kasus ini.</p>';
    }

    const steps = [
      ['Upaya Penyelesaian', kasus.upaya],
      ['Hasil Upaya', kasus.hasil],
      ['Pengalaman Berharga', kasus.pengalaman],
    ];

    return `
      <section id="case-result" aria-label="Hasil jawaban">
        <div class="answer-feedback show ${cls}" id="kasus-feedback" role="status" aria-live="polite">
          <h4 id="case-result-title" tabindex="-1">${heading}</h4>
          ${body}
          <p class="feedback-summary">${kasus.explanation}</p>
          ${xpLine}
        </div>
        <ol class="case-steps case-steps-result">
          ${steps.map(([label, text]) => `
            <li class="case-section">
              <h3>${label}</h3>
              <p>${text}</p>
            </li>`).join('')}
        </ol>
        ${renderPancasilaValues(kasus)}
        <p class="case-ai"><a class="btn btn-secondary" href="pancai.html?kasus=${kasus.id}">🤖 Tanya PancaAI tentang kasus ini</a></p>
      </section>
    `;
  }

  function renderPancasilaValues(kasus) {
    return `
      <section class="case-values" aria-label="Nilai Pancasila yang Relevan">
        <h3>Nilai Pancasila yang Relevan</h3>
        <ul>
          ${kasus.nilai.map((v) => `
            <li>
              <span class="badge badge-primary">Sila ke-${v.sila}</span>
              <span><strong>${silaTitle(v.sila)}</strong><br>${v.alasan}</span>
            </li>`).join('')}
        </ul>
        <p class="caption" style="margin:12px 0 0;">${kasus.nilaiPancasila}</p>
      </section>
    `;
  }

  function nextUnansweredIndex(state) {
    for (let step = 1; step <= TOTAL; step += 1) {
      const idx = (currentIndex + step) % TOTAL;
      if (!isAnswered(statusOf(state, STUDI_KASUS_DATA[idx].id))) return idx;
    }
    return -1;
  }

  function renderSummary(state) {
    const entries = STUDI_KASUS_DATA.map((k) => state.caseProgress[k.id]);
    const correct = entries.filter((e) => e && e.status === 'answered_correct').length;
    const wrong = entries.filter((e) => e && e.status === 'answered_wrong').length;
    const legacy = entries.filter((e) => e && e.status === 'answered_legacy').length;
    wrap.innerHTML = `
      <div class="card kasus-finished">
        <h2 id="case-title" tabindex="-1">🎉 Semua ${TOTAL} studi kasus sudah dikerjakan</h2>
        <p>Ringkasan hasilmu:</p>
        <div class="result-stats">
          <div><div class="result-stat-num" style="color:var(--success);">${correct}</div><div class="caption">Benar</div></div>
          <div><div class="result-stat-num" style="color:var(--danger);">${wrong}</div><div class="caption">Kurang tepat</div></div>
          ${legacy ? `<div><div class="result-stat-num">${legacy}</div><div class="caption">Riwayat lama</div></div>` : ''}
        </div>
        <div class="kasus-finished-actions">
          <a href="quiz.html" class="btn btn-primary">Lanjut ke Quiz</a>
          <button type="button" class="btn btn-secondary" id="first-btn">Kembali ke Kasus Pertama</button>
        </div>
        <p class="caption" style="margin-top:12px;">Tombol di atas hanya membuka Kasus 01. Progress, jawaban, dan XP kamu tidak dihapus.</p>
      </div>
    `;
    document.getElementById('first-btn').addEventListener('click', () => go(0));
  }

  /* ---------- Page ---------- */

  function syncUrl(kasus) {
    try {
      window.history.replaceState(null, '', showSummary ? '?view=ringkasan' : `?id=${kasus.id}`);
    } catch (e) { /* file:// atau lingkungan tanpa history: abaikan */ }
  }

  function go(index) {
    showSummary = false;
    currentIndex = Math.min(Math.max(0, index), TOTAL - 1);
    render();
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    wrap.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    const heading = document.getElementById('case-title');
    if (heading) heading.focus({ preventScroll: true });
  }

  function openSummary() {
    showSummary = true;
    render();
    wrap.scrollIntoView({ block: 'start' });
    const heading = document.getElementById('case-title');
    if (heading) heading.focus({ preventScroll: true });
  }

  function render(ctx = {}) {
    const state = PancaState.get();
    const answeredCount = PancaState.getAnsweredCaseCount(state);

    // Ringkasan hanya valid jika benar-benar sudah 30/30 dijawab (bukan dari currentIndex).
    if (showSummary && answeredCount === TOTAL) {
      syncUrl(STUDI_KASUS_DATA[currentIndex]);
      renderSummary(state);
      return;
    }
    showSummary = false;

    const kasus = STUDI_KASUS_DATA[currentIndex];
    const entry = state.caseProgress[kasus.id] || { status: 'not_started' };
    const answered = isAnswered(entry.status);
    syncUrl(kasus);

    const nextUn = answered ? nextUnansweredIndex(state) : -1;

    wrap.innerHTML = `
      ${renderProgress(state)}
      ${renderCaseList(state)}
      <article class="card kasus-card">
        ${renderCaseHeader(kasus, entry.status)}
        ${renderProblem(kasus)}
        ${renderQuestion(kasus)}
        ${renderOptions(kasus, entry)}
        ${answered ? renderResult(kasus, entry, ctx) : ''}
        ${answered ? `
          <div class="case-continue">
            ${answeredCount === TOTAL
              ? '<button type="button" class="btn btn-primary" id="summary-btn">Lihat Ringkasan →</button>'
              : `<button type="button" class="btn btn-primary" id="unanswered-btn">Kasus Belum Dikerjakan Berikutnya →</button>`}
          </div>` : ''}
        <div class="kasus-nav">
          <button type="button" class="btn btn-ghost" id="prev-btn" ${currentIndex === 0 ? 'disabled' : ''}>← Sebelumnya</button>
          <button type="button" class="btn btn-ghost" id="next-btn" ${currentIndex === TOTAL - 1 ? 'disabled' : ''}>Selanjutnya →</button>
        </div>
      </article>
    `;

    // Jawab: disimpan, dikunci, XP hanya untuk jawaban benar yang belum pernah mendapat XP.
    if (!answered) {
      document.getElementById('kasus-options').addEventListener('click', (e) => {
        const btn = e.target.closest('button');
        if (!btn || btn.disabled) return;
        const chosen = parseInt(btn.getAttribute('data-index'), 10);
        const res = PancaState.answerCase(kasus.id, chosen);
        if (!res.recorded) { render(); return; } // sudah dijawab (mis. di tab lain): tampilkan yang tersimpan
        if (res.xp > 0) showToast(`+${res.xp} XP — Jawaban benar!`, 'success');
        refreshXpPill();
        render({ justAnswered: true, xpGained: res.xp });
        const title = document.getElementById('case-result-title');
        if (title) {
          title.scrollIntoView({ block: 'center' });
          title.focus({ preventScroll: true });
        }
      });
    }

    document.getElementById('prev-btn').addEventListener('click', () => go(currentIndex - 1));
    document.getElementById('next-btn').addEventListener('click', () => go(currentIndex + 1));
    const unBtn = document.getElementById('unanswered-btn');
    if (unBtn) unBtn.addEventListener('click', () => go(nextUn));
    const sumBtn = document.getElementById('summary-btn');
    if (sumBtn) sumBtn.addEventListener('click', openSummary);
    const sumLink = document.getElementById('show-summary');
    if (sumLink) sumLink.addEventListener('click', openSummary);
    wrap.querySelector('.kasus-list-grid').addEventListener('click', (e) => {
      const chip = e.target.closest('[data-go]');
      if (chip) go(parseInt(chip.getAttribute('data-go'), 10));
    });
  }

  render();
})();
