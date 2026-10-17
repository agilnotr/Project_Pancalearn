(function () {
  // Materi utama = 5 materi pertama (sama dengan pilar di Home). Semua materi tetap tampil di halaman ini.
  const FEATURED_COUNT = 5;

  const groupsEl = document.getElementById('materi-groups');
  const emptyState = document.getElementById('materi-empty');
  const searchInput = document.getElementById('materi-search');
  const filterSelect = document.getElementById('materi-filter');
  const countEl = document.getElementById('materi-count');
  const progressEl = document.getElementById('materi-progress');

  // Animasi muncul hanya pada render pertama, supaya mengetik di kolom cari tidak berkedip.
  let firstRender = true;

  function cardHtml(m, index, isDone, animate) {
    return `
      <article class="card materi-card${isDone ? ' is-done' : ''}${animate ? ' reveal-on-scroll' : ''}">
        <div class="materi-card-top">
          <span class="materi-icon" aria-hidden="true">${m.icon}</span>
          ${isDone ? '<span class="badge badge-success">✓ Selesai</span>' : '<span class="badge">Belum Dipelajari</span>'}
        </div>
        <h3>${m.title}</h3>
        <p>${m.description}</p>
        <span class="caption">Materi ${index + 1} · ⏱ ${m.readingTime} menit</span>
        <a href="detail-materi.html?id=${m.id}" class="btn ${isDone ? 'btn-secondary' : 'btn-primary'} btn-block">${isDone ? 'Baca Lagi' : 'Pelajari'}<span class="visually-hidden">: ${m.title}</span></a>
      </article>
    `;
  }

  function groupHtml(title, subtitle, entries, completed, animate) {
    if (!entries.length) return '';
    return `
      <section class="materi-group" aria-label="${title}">
        <div class="materi-group-header">
          <h2>${title} <span class="materi-group-count">${entries.length}</span></h2>
          <p>${subtitle}</p>
        </div>
        <div class="materi-grid">
          ${entries.map((e) => cardHtml(e.m, e.i, completed.includes(e.m.id), animate)).join('')}
        </div>
      </section>
    `;
  }

  function renderProgress(completed) {
    const total = MATERI_DATA.length;
    const done = completed.filter((id) => MATERI_DATA.some((m) => m.id === id)).length;
    const pct = total ? Math.round((done / total) * 100) : 0;
    progressEl.innerHTML = `
      <div class="flex-between">
        <div>
          <div class="caption">Learning Progress</div>
          <strong>${done} / ${total} Materi Selesai</strong>
        </div>
        <span class="learn-progress-pct">${pct}%</span>
      </div>
      <div class="progress-track" role="progressbar" aria-label="Progress materi" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pct}">
        <div class="progress-fill" style="width:${pct}%"></div>
      </div>
    `;
  }

  function emptyMessage(query, filter) {
    if (!query && filter === 'done') return 'Kamu belum menyelesaikan materi apa pun. Buka materi pertama untuk memulai.';
    if (!query && filter === 'todo') return 'Hebat! Semua materi sudah kamu selesaikan. 🎉';
    return 'Materi tidak ditemukan. Coba kata kunci lain.';
  }

  function render() {
    const state = PancaState.get();
    const completed = state.completedMaterials;
    const query = searchInput.value.trim().toLowerCase();
    const filter = filterSelect.value;

    renderProgress(completed);

    const entries = MATERI_DATA
      .map((m, i) => ({ m, i }))
      .filter(({ m }) => {
        const matchesQuery = !query || m.title.toLowerCase().includes(query) || m.description.toLowerCase().includes(query);
        const isDone = completed.includes(m.id);
        const matchesFilter = filter === 'all' || (filter === 'done' && isDone) || (filter === 'todo' && !isDone);
        return matchesQuery && matchesFilter;
      });

    countEl.textContent = `Menampilkan ${entries.length} dari ${MATERI_DATA.length} materi`;

    if (!entries.length) {
      groupsEl.innerHTML = '';
      const canReset = query || filter !== 'all';
      emptyState.innerHTML = `<p>${emptyMessage(query, filter)}</p>${canReset ? '<button type="button" class="btn btn-secondary" id="materi-reset">Reset Pencarian</button>' : ''}`;
      emptyState.classList.remove('hidden');
      return;
    }
    emptyState.classList.add('hidden');

    const animate = firstRender;
    groupsEl.innerHTML =
      groupHtml('Materi Utama', 'Lima materi dasar sebagai titik awal belajarmu.', entries.filter((e) => e.i < FEATURED_COUNT), completed, animate) +
      groupHtml('Materi Pendalaman', 'Perdalam pemahamanmu dengan topik-topik lanjutan.', entries.filter((e) => e.i >= FEATURED_COUNT), completed, animate);

    if (animate) {
      firstRender = false;
      initReveal();
    }
  }

  emptyState.addEventListener('click', (e) => {
    if (!e.target.closest('#materi-reset')) return;
    searchInput.value = '';
    filterSelect.value = 'all';
    render();
    searchInput.focus();
  });

  searchInput.addEventListener('input', render);
  filterSelect.addEventListener('change', render);
  render();
})();
