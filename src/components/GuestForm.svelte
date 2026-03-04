<script lang="ts">
  import FormSection from "./FormSection.svelte";
  import FormField from "./FormField.svelte";
  import VisitTypeSelector from "./VisitTypeSelector.svelte";
  import LocationInfo from "./LocationInfo.svelte";

  export let token: string;
  export let standby_security: string | undefined = undefined;
  export let visiting_office: string | undefined = undefined;

  $: formattedSecurity = standby_security?.replace(/-/g, " ");
  $: formattedOffice = visiting_office?.replace(/-/g, " ");

  // Data State
  let category: "personal" | "group" = "personal";
  let number_of_people = "";
  let full_name = "";
  let phone_number = "";
  let visit_from = "";
  let plate_number = "";
  let visit_purpose = "";
  let meeting_with = "";

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

    if (full_name.trim().length < 3) {
      errors.full_name = "Nama lengkap minimal 3 karakter.";
      valid = false;
    }
    if (!/^[0-9]{10,15}$/.test(phone_number.trim())) {
      errors.phone_number = "Nomor HP harus angka, 10–15 digit.";
      valid = false;
    }
    if (!visit_from.trim()) {
      errors.visit_from = "Instansi / perusahaan / alamat wajib diisi.";
      valid = false;
    }
    if (!plate_number.trim()) {
      errors.plate_number = "Plat nomor kendaraan wajib diisi.";
      valid = false;
    }
    if (!visit_purpose.trim()) {
      errors.visit_purpose = "Keperluan wajib diisi.";
      valid = false;
    }
    if (!meeting_with.trim()) {
      errors.meeting_with = "Nama yang akan ditemui wajib diisi.";
      valid = false;
    }

    if (category === "group") {
      const parsedNumber = parseInt(number_of_people, 10);
      if (!number_of_people || isNaN(parsedNumber) || parsedNumber < 2) {
        errors.number_of_people = "Jumlah orang harus diisi valid (minimal 2).";
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
      token,
      category,
      full_name: full_name.trim(),
      phone_number: phone_number.trim(),
      plate_number: plate_number.trim().toUpperCase(),
      visit_from: visit_from.trim(),
      visit_purpose: visit_purpose.trim(),
      meeting_with: meeting_with.trim() || undefined,
      number_of_people: category === "group" ? parseInt(number_of_people, 10) : undefined,
      standby_security: standby_security?.replace(/-/g, " "),
      visiting_office: visiting_office?.replace(/-/g, " "),
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
  <LocationInfo {formattedSecurity} {formattedOffice} />

  <!-- Section 1: Jenis Kunjungan -->
  <FormSection title="Jenis Kunjungan">
    <VisitTypeSelector bind:selectedType={category} />
    {#if category === "group"}
      <div class="animate-splash-up">
        <FormField
          id="number_of_people"
          label="Total Jumlah Orang"
          type="number"
          placeholder="Contoh: 5"
          required
          bind:value={number_of_people}
          error={errors.number_of_people}
        />
      </div>
    {/if}
  </FormSection>

  <!-- Section 2: Data Pengunjung -->
  <FormSection title="Data Pengunjung">
    <FormField
      id="full_name"
      label="Nama Lengkap"
      placeholder="Contoh: Budi Santoso"
      required
      bind:value={full_name}
      error={errors.full_name}
    />

    <FormField
      id="phone_number"
      label="Nomor HP"
      type="tel"
      placeholder="Contoh: 08123456789"
      required
      bind:value={phone_number}
      error={errors.phone_number}
    />

    <FormField
      id="visit_from"
      label="Instansi / Perusahaan / Alamat"
      placeholder="Contoh: PT Maju Bersama / Jl. Melati No. 1"
      required
      bind:value={visit_from}
      error={errors.visit_from}
    />

    <FormField
      id="plate_number"
      label="Plat Nomor Kendaraan"
      placeholder="Contoh: B 1234 ABC"
      required
      uppercase
      helperText='Isi dengan "-" jika tidak membawa kendaraan'
      bind:value={plate_number}
      error={errors.plate_number}
    />
  </FormSection>

  <!-- Section 3: Detail Kunjungan -->
  <FormSection title="Detail Kunjungan">
    <FormField
      id="visit_purpose"
      label="Keperluan"
      placeholder="Contoh: Rapat, Presentasi, dll."
      required
      bind:value={visit_purpose}
      error={errors.visit_purpose}
    />

    <FormField
      id="meeting_with"
      label="Bertemu Dengan"
      placeholder="Contoh: Bapak Andi (Marketing)"
      required
      bind:value={meeting_with}
      error={errors.meeting_with}
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
