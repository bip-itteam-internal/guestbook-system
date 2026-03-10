<script lang="ts">
  import { notifications } from "../stores/notifications";
  import { flip } from "svelte/animate";
</script>

<div class="fixed bottom-6 left-4 right-4 max-w-[480px] mx-auto z-[100] flex flex-col gap-3 pointer-events-none">
  {#each $notifications as toast (toast.id)}
    <div
      animate:flip={{ duration: 300 }}
      class="pointer-events-auto rounded-xl px-4 py-3 shadow-lg flex items-center gap-3 text-sm font-medium text-white transition-all
        {toast.type === 'error' ? 'bg-red-600' : ''}
        {toast.type === 'success' ? 'bg-green-600' : ''}
        {toast.type === 'info' ? 'bg-blue-600' : ''}"
      role="alert"
    >
      {#if toast.type === 'error'}
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
        </svg>
      {:else}
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      {/if}
      <span>{toast.message}</span>
    </div>
  {/each}
</div>
