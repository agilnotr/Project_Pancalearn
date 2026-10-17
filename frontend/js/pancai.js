/* =========================================================
   PancaLearn — PancaAI (UI chat)
   - Frontend hanya memanggil backend (POST {API_BASE}/api/ai); API key tidak pernah ada di sini.
   - Status koneksi ditampilkan apa adanya: AI terhubung / mode demo / backend tidak terhubung.
   - API_BASE bisa diatur lewat <meta name="pancalearn-api-base"> atau window.PANCALEARN_API_BASE
     (mis. "http://localhost:3000" saat frontend dibuka lewat Live Server). Default: origin yang sama.
   ========================================================= */
(function () {
  const chatWindow = document.getElementById('chat-window');
  const chatForm = document.getElementById('chat-form');
  const chatInput = document.getElementById('chat-input');
  const sendBtn = document.getElementById('send-btn');
  const clearBtn = document.getElementById('clear-chat-btn');
  const quickPromptsWrap = document.getElementById('quick-prompts');
  const contextBanner = document.getElementById('context-banner');
  const statusEl = document.getElementById('chat-status');
  const statusText = document.getElementById('chat-status-text');
  const noticeEl = document.getElementById('chat-notice');

  const CHAT_HISTORY_KEY = 'pancalearn_chat_history_v1';
  const REQUEST_TIMEOUT_MS = 30000;
  const QUICK_PROMPTS = [
    'Apa makna sila ke-3?',
    'Berikan contoh penerapan Pancasila di kampus.',
    'Jelaskan kasus ini.',
    'Bagaimana menerapkan Pancasila di media sosial?',
  ];

  // ---------- API base ----------
  const API_BASE = 'https://pancalearn-production.up.railway.app';

  // ---------- Konteks (materi atau studi kasus) ----------
  const params = new URLSearchParams(window.location.search);
  const materiParam = (params.get('context') || '').slice(0, 200);
  const kasusParam = params.get('kasus');
  const kasusData = kasusParam ? STUDI_KASUS_DATA.find((k) => k.id === kasusParam) : null;

  // Konteks yang dikirim ke backend dan teks untuk banner.
  let contextText = '';
  let contextLabel = '';
  if (kasusData) {
    contextText = `Studi kasus "${kasusData.title}": ${kasusData.permasalahan}`.slice(0, 700);
    contextLabel = `studi kasus "${kasusData.title}"`;
  } else if (materiParam) {
    contextText = `Materi: ${materiParam}`;
    contextLabel = `materi "${materiParam}"`;
  }

  // ---------- Riwayat (sessionStorage, tahan error) ----------
  let history = loadHistory();

  function loadHistory() {
    try {
      const raw = sessionStorage.getItem(CHAT_HISTORY_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed.filter((t) => t && typeof t.content === 'string') : [];
    } catch (e) {
      return [];
    }
  }
  function saveHistory() {
    try {
      sessionStorage.setItem(CHAT_HISTORY_KEY, JSON.stringify(history));
    } catch (e) { /* penyimpanan penuh/diblokir: percakapan tetap jalan tanpa riwayat */ }
  }

  // ---------- Format teks balasan (escape dulu, baru tambah tag milik kita) ----------
  function escapeHtml(s) {
    return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }
  function formatText(text) {
    const inline = (l) => l.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    let html = '';
    let list = null;
    const close = () => { if (list) { html += `</${list}>`; list = null; } };
    escapeHtml(text).split('\n').forEach((raw) => {
      const line = raw.trim();
      let m;
      if ((m = line.match(/^[-*•]\s+(.*)$/))) {
        if (list !== 'ul') { close(); html += '<ul>'; list = 'ul'; }
        html += `<li>${inline(m[1])}</li>`;
      } else if ((m = line.match(/^\d+[.)]\s+(.*)$/))) {
        if (list !== 'ol') { close(); html += '<ol>'; list = 'ol'; }
        html += `<li>${inline(m[1])}</li>`;
      } else if (!line) {
        close();
      } else {
        close();
        html += `<p>${inline(line)}</p>`;
      }
    });
    close();
    return html;
  }

  // ---------- Render ----------
  function scrollToBottom() {
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }

  function avatarEl() {
    const a = document.createElement('div');
    a.className = 'ai-avatar ai-avatar-sm';
    a.setAttribute('aria-hidden', 'true');
    a.textContent = 'P';
    return a;
  }

  // kind: undefined | 'demo' | 'error' | 'hint'
  function addMessage(role, text, kind) {
    const row = document.createElement('div');
    row.className = `chat-row ${role}`;
    const bubble = document.createElement('div');
    bubble.className = `chat-bubble ${role}${kind ? ' ' + kind : ''}`;

    if (role === 'ai') {
      row.appendChild(avatarEl());
      bubble.innerHTML = formatText(text);
      if (kind === 'demo') {
        const tag = document.createElement('span');
        tag.className = 'bubble-tag';
        tag.textContent = 'Mode demo, bukan jawaban AI';
        bubble.appendChild(tag);
      }
    } else {
      bubble.textContent = text; // teks pengguna tidak pernah diperlakukan sebagai HTML
    }
    row.appendChild(bubble);
    chatWindow.appendChild(row);
    scrollToBottom();
    return row;
  }

  function addTypingIndicator() {
    const row = document.createElement('div');
    row.className = 'chat-row ai';
    row.id = 'typing-indicator';
    row.appendChild(avatarEl());
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble ai typing';
    bubble.setAttribute('role', 'status');
    bubble.setAttribute('aria-label', 'PancaAI sedang menyiapkan jawaban');
    bubble.innerHTML = '<span></span><span></span><span></span>';
    row.appendChild(bubble);
    chatWindow.appendChild(row);
    scrollToBottom();
    return row;
  }

  function renderHistory() {
    chatWindow.innerHTML = '';
    addMessage('ai', 'Halo! Saya PancaAI.\nSaya siap membantu kamu memahami Pancasila dengan cara yang sederhana dan mudah dipahami.');
    history.forEach((turn) => addMessage(turn.role === 'assistant' ? 'ai' : 'user', turn.content, turn.kind));
  }

  function renderQuickPrompts() {
    quickPromptsWrap.innerHTML = '';
    QUICK_PROMPTS.forEach((p) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'quick-prompt-btn';
      btn.textContent = p;
      btn.addEventListener('click', () => handleSubmit(p));
      quickPromptsWrap.appendChild(btn);
    });
  }

  function renderContextBanner() {
    if (!contextLabel) return;
    contextBanner.textContent = '';
    const span = document.createElement('span');
    span.textContent = `📘 Konteks aktif: ${contextLabel}. Pertanyaanmu akan dijawab dengan mempertimbangkan konteks ini. `;
    const link = document.createElement('a');
    link.href = 'pancai.html';
    link.textContent = 'Hapus konteks';
    contextBanner.append(span, link);
    contextBanner.classList.remove('hidden');
  }

  // ---------- Status backend (jujur: tidak mengklaim AI aktif tanpa bukti) ----------
  function setStatus(state, text, notice) {
    statusEl.setAttribute('data-state', state);
    statusText.textContent = text;
    if (notice) {
      noticeEl.textContent = notice;
      noticeEl.classList.remove('hidden');
    } else {
      noticeEl.classList.add('hidden');
    }
  }

  async function checkBackend() {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 5000);
    try {
      const res = await fetch(`${API_BASE}/api/health`, { signal: controller.signal });
      const data = await res.json();
      if (!res.ok || data.status !== 'ok') throw new Error('health');
      if (data.aiConfigured) {
        setStatus('ai', 'AI terhubung');
      } else {
        setStatus('demo', 'Mode demo (kunci AI belum diatur)',
          'Backend berjalan, tetapi AI_API_KEY belum diatur di backend/.env, jadi balasan hanya contoh dan bukan jawaban AI.');
      }
    } catch (e) {
      setStatus('offline', 'Backend belum terhubung',
        'PancaAI belum terhubung ke backend, jadi belum bisa menjawab. Jalankan backend (cd backend, npm start, lalu buka http://localhost:3000) atau atur alamat API. Lihat README bagian PancaAI.');
    } finally {
      clearTimeout(timer);
    }
  }

  // ---------- Kirim pesan ----------
  let sending = false;

  function updateSendState() {
    sendBtn.disabled = sending || !chatInput.value.trim();
  }

  function autosize() {
    chatInput.style.height = 'auto';
    chatInput.style.height = `${Math.min(chatInput.scrollHeight, 140)}px`;
  }

  async function handleSubmit(rawMessage) {
    const message = (rawMessage !== undefined ? rawMessage : chatInput.value).trim();
    if (!message || sending) return;

    // "Jelaskan kasus ini." tanpa konteks kasus: arahkan memilih kasus dulu, bukan mengirim pertanyaan kosong makna.
    if (message === 'Jelaskan kasus ini.' && !kasusData) {
      addMessage('user', message);
      const row = addMessage('ai', 'Aku belum tahu kasus mana yang kamu maksud. Buka salah satu studi kasus, jawab dulu, lalu pilih "Tanya PancaAI tentang kasus ini".', 'hint');
      const link = document.createElement('a');
      link.href = 'studi-kasus.html';
      link.className = 'bubble-link';
      link.textContent = 'Buka Studi Kasus →';
      row.querySelector('.chat-bubble').appendChild(link);
      scrollToBottom();
      chatInput.value = '';
      autosize();
      updateSendState();
      return;
    }

    sending = true;
    // Riwayat yang dikirim = percakapan SEBELUM pesan ini (pesan ini dikirim terpisah sebagai `message`).
    // Hanya giliran asli (bukan balasan demo/pesan sistem) yang dikirim.
    const priorHistory = history.filter((t) => !t.kind).slice(-10).map((t) => ({ role: t.role, content: t.content }));
    addMessage('user', message);
    history.push({ role: 'user', content: message });
    saveHistory();
    chatInput.value = '';
    autosize();
    updateSendState();
    const typingEl = addTypingIndicator();

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

    try {
      const response = await fetch(`${API_BASE}/api/ai`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          message,
          history: priorHistory,
          context: contextText || undefined,
        }),
      });

      typingEl.remove();
      const data = await response.json().catch(() => null);

      if (!response.ok || !data) {
        // 404/405 dari server statis (mis. Live Server) -> backend memang tidak ada
        const noBackend = !data && (response.status === 404 || response.status === 405 || response.status === 501);
        addMessage('ai', noBackend
          ? 'PancaAI belum terhubung ke backend, jadi belum bisa menjawab. Jalankan backend (npm start) atau atur alamat API. Lihat README bagian PancaAI.'
          : ((data && data.error) || 'Maaf, PancaAI sedang mengalami gangguan. Silakan coba lagi beberapa saat.'), 'error');
        if (noBackend) setStatus('offline', 'Backend belum terhubung');
        return;
      }

      const reply = data.reply || 'Maaf, PancaAI tidak dapat memberikan jawaban saat ini.';
      const kind = data.fallback ? 'demo' : undefined;
      addMessage('ai', reply, kind);
      history.push({ role: 'assistant', content: reply, kind });
      saveHistory();
    } catch (err) {
      typingEl.remove();
      const timedOut = err && err.name === 'AbortError';
      addMessage('ai', timedOut
        ? 'PancaAI terlalu lama merespons. Silakan coba lagi.'
        : 'PancaAI tidak dapat dihubungi. Periksa jaringanmu atau pastikan backend berjalan, lalu coba lagi.', 'error');
      if (!timedOut) setStatus('offline', 'Backend belum terhubung');
    } finally {
      clearTimeout(timer);
      sending = false;
      updateSendState();
      chatInput.focus();
    }
  }

  chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    handleSubmit();
  });

  chatInput.addEventListener('input', () => { autosize(); updateSendState(); });
  chatInput.addEventListener('keydown', (e) => {
    // Enter = kirim, Shift+Enter = baris baru; abaikan saat memilih kata lewat IME
    if (e.key === 'Enter' && !e.shiftKey && !e.isComposing) {
      e.preventDefault();
      handleSubmit();
    }
  });

  clearBtn.addEventListener('click', () => {
    history = [];
    saveHistory();
    renderHistory();
    showToast('Riwayat chat dibersihkan.', 'default');
    chatInput.focus();
  });

  renderQuickPrompts();
  renderContextBanner();
  renderHistory();
  updateSendState();
  checkBackend();
})();
