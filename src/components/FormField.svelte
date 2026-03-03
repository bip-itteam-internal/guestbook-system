<script lang="ts">
  export let id: string;
  export let label: string;
  export let type: 'text' | 'tel' | 'email' | 'number' = 'text';
  export let placeholder: string = '';
  export let required: boolean = false;
  export let disabled: boolean = false;
  export let uppercase: boolean = false;
  export let icon: 'calendar' | 'clock' | undefined = undefined;
  export let helperText: string | undefined = undefined;

  export let value: string = '';
  export let error: string = '';

  $: inputClass = disabled
    ? 'w-full h-11 px-3.5 border border-slate-200 rounded-xl text-sm text-slate-400 bg-slate-50 cursor-not-allowed'
    : `w-full h-11 px-3.5 border rounded-xl text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all ${
        uppercase ? 'uppercase ' : ''
      }${error ? 'border-red-400 bg-red-50/30' : 'border-slate-200 focus:border-primary'}`;
</script>

<div class="flex flex-col gap-1.5">
  <label for={id} class="text-sm font-medium text-slate-500 tracking-wider flex items-center">
    {#if icon === 'calendar'}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-3.5 h-3.5 text-slate-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    {/if}
    {#if icon === 'clock'}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-3.5 h-3.5 text-slate-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    {/if}

    {label}
    {#if required}
      <span class="text-red-400">*</span>
    {/if}
  </label>

  <input
    {id}
    name={id}
    {type}
    {placeholder}
    {disabled}
    class={inputClass}
    autocomplete="off"
    bind:value
  />

  {#if helperText}
    <p class="text-[10px] text-slate-400 leading-tight">{helperText}</p>
  {/if}

  {#if !disabled && error}
    <p class="text-xs text-red-500" aria-live="polite">
      {error}
    </p>
  {/if}
</div>
