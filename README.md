# PancaLearn

**Interactive Pancasila Learning Platform**
> Belajar Pancasila. Pahami Nilainya. Terapkan dalam Kehidupan.

---

## 1. Project Overview

PancaLearn adalah platform pembelajaran Pancasila interaktif yang dirancang untuk mahasiswa dan pelajar Indonesia. Platform ini menggabungkan materi pembelajaran, studi kasus kehidupan nyata, quiz, sistem gamifikasi (XP, level, achievement, streak), Panca Challenge, serta AI Learning Assistant bernama **PancaAI**.

## 2. Project Goals

- Membuat pembelajaran Pancasila lebih modern, interaktif, dan menyenangkan.
- Menghubungkan teori Pancasila dengan penerapan nyata di kehidupan kampus dan digital.
- Memberikan pengalaman belajar seperti produk EdTech profesional.

## 3. Features

- 🏠 Homepage interaktif (hero, statistik nyata dari data, fitur & alur belajar, 5 sila, 5 materi utama + progress, pratinjau studi kasus, quiz/challenge/level, PancaAI, CTA, team)
- 📘 Materi Pancasila (20 materi + detail materi + mini quiz)
- 🧩 Studi Kasus (30 kasus individual, dikerjakan bertahap: permasalahan → pertanyaan → jawaban → hasil & solusi)
- ❓ Quiz interaktif (10 soal, skor, retry). XP quiz hanya untuk quiz pertama setiap hari; percobaan berikutnya tetap tercatat skornya
- ⚡ Sistem XP & Level (5 level, disimpan di localStorage). Studi kasus: jawaban benar +30 XP (sekali per kasus), jawaban salah +0 XP
- 🏆 Achievement (5 badge)
- 🔥 Learning Streak harian
- 🎯 Panca Challenge (harian & mingguan). Pergantian hari/minggu mengikuti zona waktu perangkat; reward hanya bisa diklaim sekali setelah challenge selesai
- 📊 Progress Dashboard
- 🤖 PancaAI — AI Learning Assistant (chat, quick prompts, context-aware)
- 🌙 Dark / Light mode
- 📱 Fully responsive (diuji 320px – 2560px, termasuk landscape ponsel dan teks diperbesar 200%)

## 4. Tech Stack

**Frontend:** HTML5, CSS3 (custom design system with CSS variables), Vanilla JavaScript
**Backend:** Node.js, Express.js
**AI:** Anthropic API, called only from the backend (`/api/ai`)
**Storage:** Browser `localStorage` for user progress & gamification state

## 5. Folder Structure

```text
PancaLearn/
├── frontend/
│   ├── index.html
│   ├── pages/            # materi, detail-materi, studi-kasus, quiz, challenge, progress, pancai
│   ├── css/               # one stylesheet per page/section + shared style.css
│   ├── js/                 # data.js (content), state.js (gamification engine), main.js (navbar/footer), per-page scripts
│   └── assets/            # garuda-pancasila.png (asli, tidak diubah) dan garuda-pancasila.min.png (versi 73 KB yang dipakai di Home)
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── routes/ai.js       # POST /api/ai — PancaAI endpoint
│   └── .env                # NOT committed — create from .env.example
├── .env.example
├── .gitignore
└── README.md
```

## 6. Installation

```bash
git clone <repo-url>
cd PancaLearn
cd backend
npm install
```

## 7. Environment Setup

Copy the example env file and fill in your AI API key:

```bash
cp ../.env.example .env
```

Edit `backend/.env`:

```env
AI_API_KEY=your_api_key_here
AI_MODEL=claude-sonnet-4-6
PORT=3000
```

**Never commit `.env` to git** — it is already listed in `.gitignore`.

## 8. Running the App

The backend serves both the API and the static frontend, so you only need one command:

```bash
cd backend
npm start
```

Then open your browser at:

```text
http://localhost:3000
```

> Note: If `AI_API_KEY` is not set, PancaAI will still respond with a graceful fallback message so the rest of the app can be demonstrated without a live API key.

## 9. PancaAI Setup

- Endpoint chat: `POST /api/ai`, body `{ "message": "...", "history": [...], "context": "..." }`.
- Response: `{ "reply": "..." }`. Jika `AI_API_KEY` belum diatur, backend menambahkan `"fallback": true` (balasan contoh, **bukan** jawaban AI).
- Endpoint status: `GET /api/health` mengembalikan `{ "status": "ok", "aiConfigured": true|false }` (tidak pernah menampilkan key).
- Status di halaman PancaAI selalu jujur: **AI terhubung**, **Mode demo (kunci AI belum diatur)**, atau **Backend belum terhubung**.
- Konteks: tombol "Tanya PancaAI tentang materi ini" (Detail Materi) dan "Tanya PancaAI tentang kasus ini" (Studi Kasus, muncul setelah kasus dijawab) membuka PancaAI dengan konteks tersebut.
- System prompt menjaga PancaAI tetap fokus pada topik Pancasila. API key hanya dibaca di backend (`backend/routes/ai.js`) dan **tidak pernah** dikirim ke frontend.

**Menjalankan dengan Live Server.** Live Server hanya melayani file statis, jadi PancaAI akan menampilkan "Backend belum terhubung". Agar terhubung, jalankan backend (`cd backend && npm start`) lalu tambahkan di `<head>` halaman `pages/pancai.html`:

```html
<meta name="pancalearn-api-base" content="http://localhost:3000" />
```

Atau cukup buka `http://localhost:3000` (backend juga melayani frontend). Backend memerlukan Node.js 18 atau lebih baru.

## 10. LocalStorage

PancaLearn stores the following under the key `pancalearn_state_v1`:

```text
userName, xp, completedMaterials, completedCases, caseProgress, quizScores,
challengeProgress, completedChallenges, achievements, streak, theme,
dailyLog, weeklyLog, dataVersion
```

**Studi Kasus.** `caseProgress` menyimpan satu entri per kasus (30 kasus), contoh:

```text
"kasus-hoaks-media-sosial": {
  status: "answered_correct",   // not_started | answered_correct | answered_wrong
  selectedAnswer: 2, isCorrect: true, answeredAt: "...", xpClaimed: true
}
```

- Jawaban langsung terkunci dan tidak bisa diulang; refresh/menutup browser tidak menghapusnya.
- Jawaban benar = +30 XP satu kali (dijaga `xpClaimed`); jawaban salah = +0 XP. Keduanya dihitung sebagai progress (x / 30).
- `completedCases` tetap berisi id kasus yang sudah dijawab (benar atau salah).
- Migrasi data lama berjalan otomatis dan aman dijalankan berulang (`dataVersion`): XP tidak diubah. Kasus yang dikerjakan di versi lama diberi status `answered_legacy` karena jawaban dan benar/salahnya memang tidak pernah tersimpan.

Chat history for PancaAI is kept separately in `sessionStorage` (cleared when the tab closes) so conversations stay fresh per session.

## 11. Team Members

| Name | Role |
|---|---|
| Agil Dwi Pratama | Frontend Developer |
| Dominico Jose Wibowo | UI/UX Designer |
| Muhammad Syaeppuddin | Content & Research |
| Muhammad Mukhtasor Jidan | AI / Backend Developer |
| Soutan Maulana Alfarizi | QA / Tester |

## 12. Academic Information

- **Mata Kuliah:** Pancasila
- **Program Studi:** Teknik Informatika
- **Tahun:** 2026

## 13. Project Purpose

PancaLearn dibuat untuk memenuhi tugas mata kuliah Pancasila sebagai proyek edukatif yang menunjukkan penerapan teknologi web modern (frontend, backend, dan AI) untuk mendukung pembelajaran nilai-nilai kebangsaan.

---

© 2026 PancaLearn — Educational Project, Teknik Informatika.
