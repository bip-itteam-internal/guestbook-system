<script lang="ts">
  export let selectedType: "personal" | "rombongan" = "personal";

  function handleInput(event: Event) {
    selectedType = (event.target as HTMLInputElement).value as "personal" | "rombongan";
  }
</script>

<div class="flex flex-col gap-2">
  <div class="grid grid-cols-2 gap-2.5">
    <!-- Personal -->
    <label
      class="flex items-center gap-2.5 border border-slate-200 rounded-xl px-4 py-3 cursor-pointer transition-all has-[:checked]:border-primary has-[:checked]:bg-primary-light has-[:checked]:shadow-sm"
    >
      <input
        type="radio"
        name="jenisKunjungan"
        value="personal"
        class="accent-primary"
        checked={selectedType === "personal"}
        on:change={handleInput}
      />
      <div>
        <p class="text-sm font-semibold text-slate-800">Personal</p>
        <p class="text-xs text-slate-400">1 orang</p>
      </div>
    </label>

    <!-- Rombongan -->
    <label
      class="flex items-center gap-2.5 border border-slate-200 rounded-xl px-4 py-3 cursor-pointer transition-all has-[:checked]:border-primary has-[:checked]:bg-primary-light has-[:checked]:shadow-sm"
    >
      <input
        type="radio"
        name="jenisKunjungan"
        value="rombongan"
        class="accent-primary"
        checked={selectedType === "rombongan"}
        on:change={handleInput}
      />
      <div>
        <p class="text-sm font-semibold text-slate-800">Rombongan</p>
        <p class="text-xs text-slate-400">Perwakilan</p>
      </div>
    </label>
  </div>

  <!-- Info rombongan — muncul otomatis dari reactivity Svelte -->
  {#if selectedType === "rombongan"}
    <div
      class="bg-amber-50 border border-amber-200 rounded-xl px-4 py-2 text-xs text-amber-700 flex items-center gap-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-4 h-4 flex-shrink-0 text-amber-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20A10 10 0 0012 2z"
        ></path>
      </svg>
      <span class="leading-none">Untuk rombongan, cukup satu orang yang mengisi sebagai perwakilan.</span>
    </div>
  {/if}
</div>
