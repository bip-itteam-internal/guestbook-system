<script lang="ts">
  export let formattedSecurity: string | undefined = undefined;
  export let formattedOffice: string | undefined = undefined;
</script>

{#if formattedSecurity || formattedOffice}
  <div class="bg-blue-50/50 border border-blue-100 p-4 rounded-xl text-sm">
    <div class="flex flex-col gap-2 text-gray-600">
      {#if formattedOffice}
        <div class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-primary opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          <span class="font-medium text-gray-800">{formattedOffice}</span>
        </div>
      {/if}
      {#if formattedSecurity}
        <div class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-primary opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span class="font-medium text-gray-800">{formattedSecurity} (Security)</span>
        </div>
      {/if}
    </div>
  </div>
{/if}
