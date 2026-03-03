<script lang="ts">
  import FormSection from "./FormSection.svelte";
  import FormField from "./FormField.svelte";
  import VisitTypeSelector from "./VisitTypeSelector.svelte";

  export let token: string;

  // Data State
  let jenisKunjungan: "personal" | "rombongan" = "personal";
  let jumlahOrang = "";
  let namaLengkap = "";
  let nomorHP = "";
  let instansi = "";
  let platNomor = "";
  let keperluan = "";
  let bertemuDengan = "";

  // Error State Map
  let errors: Record<string, string> = {};

  // Form Submission & Notification State
  let isSubmitting = false;
  let showToast = false;
  let toastMessage = "";
  let toastType: "success" | "error" = "error";

  function showNotification(msg: string, type: "success" | "error" = "error") {
    toastMessage = msg;
    toastType = type;
    showToast = true;
    setTimeout(() => {
      showToast = false;
    }, 4000);
  }

  function validate() {
    errors = {};
    let valid = true;

    if (namaLengkap.trim().length < 3) {
      errors.namaLengkap = "Nama lengkap minimal 3 karakter.";
      valid = false;
    }
    if (!/^[0-9]{10,15}$/.test(nomorHP.trim())) {
      errors.nomorHP = "Nomor HP harus angka, 10–15 digit.";
      valid = false;
    }
    if (!instansi.trim()) {
      errors.instansi = "Instansi / perusahaan / alamat wajib diisi.";
      valid = false;
    }
    if (!platNomor.trim()) {
      errors.platNomor = "Plat nomor kendaraan wajib diisi.";
      valid = false;
    }
    if (!keperluan.trim()) {
      errors.keperluan = "Keperluan wajib diisi.";
      valid = false;
    }
    if (!bertemuDengan.trim()) {
      errors.bertemuDengan = "Nama yang akan ditemui wajib diisi.";
      valid = false;
    }

    if (jenisKunjungan === "rombongan") {
      const parsedNumber = parseInt(jumlahOrang, 10);
      if (!jumlahOrang || isNaN(parsedNumber) || parsedNumber < 2) {
        errors.jumlahOrang = "Jumlah orang harus diisi valid (minimal 2).";
        valid = false;
      }
    }

    return valid;
  }

  async function handleSubmit() {
    if (isSubmitting) return;
    if (!validate()) return;

    isSubmitting = true;

    const payload = {
      // token,
      category: jenisKunjungan === "rombongan" ? "group" : "personal",
      full_name: namaLengkap.trim(),
      phone_number: nomorHP.trim(),
      plate_number: platNomor.trim().toUpperCase(),
      visit_from: instansi.trim(),
      visit_purpose: keperluan.trim(),
      meeting_with: bertemuDengan.trim(),
      number_of_people: jenisKunjungan === "rombongan" ? parseInt(jumlahOrang, 10) : 1,
    };

    try {
      const API_BASE = import.meta.env.PUBLIC_API_BASE_URL;
      const res = await fetch(`${API_BASE}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        window.location.href = "/success";
      } else {
        showNotification("Gagal mengirim data. Silakan coba lagi.");
      }
    } catch {
      showNotification("Terjadi kesalahan koneksi. Periksa internet Anda.");
    } finally {
      isSubmitting = false;
    }
  }
</script>

<form class="flex flex-col gap-6 p-6" novalidate on:submit|preventDefault={handleSubmit}>
  <!-- Section 1: Jenis Kunjungan -->
  <FormSection title="Jenis Kunjungan">
    <VisitTypeSelector bind:selectedType={jenisKunjungan} />
    
    {#if jenisKunjungan === "rombongan"}
      <div class="animate-splash-up">
        <FormField
          id="jumlahOrang"
          label="Total Jumlah Orang"
          type="number"
          placeholder="Contoh: 5"
          required
          bind:value={jumlahOrang}
          error={errors.jumlahOrang}
        />
      </div>
    {/if}
  </FormSection>

  <!-- Section 2: Data Pengunjung -->
  <FormSection title="Data Pengunjung">
    <FormField
      id="namaLengkap"
      label="Nama Lengkap"
      placeholder="Contoh: Budi Santoso"
      required
      bind:value={namaLengkap}
      error={errors.namaLengkap}
    />

    <FormField
      id="nomorHP"
      label="Nomor HP"
      type="tel"
      placeholder="Contoh: 08123456789"
      required
      bind:value={nomorHP}
      error={errors.nomorHP}
    />

    <FormField
      id="instansi"
      label="Instansi / Perusahaan / Alamat"
      placeholder="Contoh: PT Maju Bersama / Jl. Melati No. 1"
      required
      bind:value={instansi}
      error={errors.instansi}
    />

    <FormField
      id="platNomor"
      label="Plat Nomor Kendaraan"
      placeholder="Contoh: B 1234 ABC"
      required
      uppercase
      helperText='Isi dengan "-" jika tidak membawa kendaraan'
      bind:value={platNomor}
      error={errors.platNomor}
    />
  </FormSection>

  <!-- Section 3: Detail Kunjungan -->
  <FormSection title="Detail Kunjungan">
    <FormField
      id="keperluan"
      label="Keperluan"
      placeholder="Contoh: Rapat, Presentasi, dll."
      required
      bind:value={keperluan}
      error={errors.keperluan}
    />

    <FormField
      id="bertemuDengan"
      label="Bertemu Dengan"
      placeholder="Contoh: Bapak Andi (Marketing)"
      required
      bind:value={bertemuDengan}
      error={errors.bertemuDengan}
    />
  </FormSection>

  <!-- Tombol Submit -->
  <button
    type="submit"
    disabled={isSubmitting}
    class="w-full h-12 bg-primary text-white font-semibold rounded-xl transition-all hover:bg-primary-dark active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed text-sm tracking-wide mt-1"
  >
    {isSubmitting ? "Mengirim..." : "Kirim Data"}
  </button>
</form>

<!-- Toast Notification -->
{#if showToast}
  <div
    role="alert"
    aria-live="assertive"
    class="fixed bottom-6 left-4 right-4 max-w-[480px] mx-auto rounded-xl px-4 py-3 shadow-lg z-50 flex items-center gap-3 text-sm font-medium text-white transition-opacity {toastType === 'error' ? 'bg-red-600' : 'bg-green-600'}"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="w-5 h-5 flex-shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
      ></path>
    </svg>
    <span>{toastMessage}</span>
  </div>
{/if}
