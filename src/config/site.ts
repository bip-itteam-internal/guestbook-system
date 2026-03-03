/**
 * Konfigurasi global aplikasi – satu sumber kebenaran.
 * Ubah di sini, berlaku di semua halaman.
 */
export const SITE = {
  /** Nama perusahaan lengkap */
  company:       'PT. Bharata Internasional Pharmaceutical',
  /** Nama pendek untuk splash screen */
  companyShort:  'Bharata',
  companyShort2: 'Internasional Pharmaceutical',
  /** Nama aplikasi */
  appName:       'Buku Tamu Digital',
  /** Tagline */
  tagline:       'Digital Guestbook System',
  /** Path logo (relatif dari /public) */
  logo:          '/logo.png',
  /** Timezone IANA */
  timezone:      'Asia/Jakarta',
  /** Label timezone untuk tampilan */
  timezoneLabel: 'WIB',
  /** Locale Indonesia */
  locale:        'id-ID',
} as const;
