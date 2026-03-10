/**
 * Menghapus tanda hubung (-) dan menggantinya dengan spasi,
 * serta mengubah huruf pertama menjadi kapital (opsional).
 */
export function formatSlug(text: string | undefined): string | undefined {
  if (!text) return undefined;
  return text.replace(/-/g, ' ');
}

/**
 * Format nomor telepon ke format yang lebih cantik jika diperlukan.
 */
export function formatPhone(phone: string): string {
  return phone.trim();
}
