# Guestbook System — PT. Bharata Internasional Pharmaceutical

Sistem Buku Tamu Digital berbasis QR Code untuk mencatat kunjungan tamu secara digital. Dibangun dengan **Astro** + **Tailwind CSS v4**.

---

## Fitur

- **QR Code flow** — tamu scan QR Code → isi form → data terkirim ke API
- **Tanggal & waktu otomatis** — terisi saat halaman dimuat (timezone WIB), tidak perlu input manual
- **Jenis kunjungan** — Personal atau Rombongan (perwakilan)
- **Validasi form** — client-side, dengan inline error message
- **Toast notification** — pengganti `alert()`, lebih clean dan styled
- **Splash screen** — tampil selamat datang saat halaman dibuka
- **Halaman error dinamis** — `/invalid?reason=expired|used|notfound|invalid`
- **Auto-redirect** — halaman sukses redirect ke home setelah 10 detik

---

## Stack

| Teknologi | Keterangan |
|-----------|------------|
| [Astro](https://astro.build) v5 | SSR framework, file-based routing |
| [Tailwind CSS v4](https://tailwindcss.com) | Styling, via `@theme` untuk design tokens |
| [Inter](https://fonts.google.com/specimen/Inter) | Google Fonts — typography |
| TypeScript | Semua script menggunakan TypeScript |

---

## Struktur Proyek

```
guestbook-system/
├── public/
│   ├── logo.png            # Logo perusahaan
│   └── favicon.svg
├── src/
│   ├── config/
│   │   └── site.ts         # ⚙️  Konfigurasi global (nama perusahaan, timezone, dll)
│   ├── layouts/
│   │   └── BaseLayout.astro # 🧱 Shared <head>, fonts, meta — dipakai semua halaman
│   ├── pages/
│   │   ├── index.astro      # Landing page + splash screen
│   │   ├── invalid.astro    # Halaman error (token invalid/expired/used)
│   │   ├── success.astro    # Halaman sukses setelah submit
│   │   ├── 404.astro        # Redirect ke /invalid
│   │   └── visit/
│   │       └── [token].astro # Form buku tamu dinamis per token
│   └── styles/
│       └── global.css       # @theme Tailwind v4 (color tokens, base styles)
├── .env.example             # Template environment variables
└── astro.config.mjs
```

---

## Konfigurasi

### Environment Variables

Salin `.env.example` ke `.env` dan sesuaikan:

```env
# URL base API backend (tanpa trailing slash)
PUBLIC_API_BASE_URL=http://localhost:3000
```

### Konfigurasi Aplikasi

Edit `src/config/site.ts` untuk mengubah identitas aplikasi:

```ts
export const SITE = {
  company:       'PT. Bharata Internasional Pharmaceutical',
  appName:       'Buku Tamu Digital',
  timezone:      'Asia/Jakarta',
  timezoneLabel: 'WIB',
  // ...
};
```

> Mengubah di sini akan berlaku di **semua halaman** secara otomatis.

---

## Integrasi API

Form mengirim `POST` ke `${PUBLIC_API_BASE_URL}/api/guest` dengan body JSON:

```json
{
  "token": "<token dari URL>",
  "jenisKunjungan": "personal | rombongan",
  "namaLengkap": "Budi Santoso",
  "nomorHP": "08123456789",
  "instansi": "PT Maju Bersama",
  "keperluan": "Rapat",
  "bertemuDengan": "Bapak Andi (Marketing)",
  "platNomor": "B 1234 ABC",
  "waktuKunjungan": "2026-03-03T02:36:00.000Z"
}
```

Validasi token (saat halaman `/visit/[token]` diakses) dapat diaktifkan di bagian frontmatter `[token].astro` — lihat komentar `TODO` di file tersebut.

---

## Commands

Jalankan dari direktori root proyek:

| Command | Keterangan |
|---------|------------|
| `npm install` | Install dependencies |
| `npm run dev` | Dev server di `localhost:4321` |
| `npm run build` | Build production ke `./dist/` |
| `npm run preview` | Preview build production lokal |

---

## Alur Pengguna

```
Tamu tiba → Petugas security tampilkan QR Code
     ↓
Tamu scan QR Code (buka /visit/<token>)
     ↓
Splash screen → Form muncul (tanggal & waktu terisi otomatis)
     ↓
Tamu isi data → Kirim Data
     ↓
✅ Sukses → Halaman /success → redirect ke / setelah 10 detik
❌ Gagal  → Toast notification muncul, form tetap aktif
```
