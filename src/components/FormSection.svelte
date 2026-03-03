<script lang="ts">
  export let title: string;
</script>

<section class="space-y-4">
  <div class="flex items-center gap-2">
    <!-- Indikator Hijau -->
    <div class="w-1 h-4 bg-primary rounded-full"></div>
    <!-- Judul Section -->
    <h5 class="font-medium text-[12px] text-slate-800 uppercase tracking-widest">
      {title}
    </h5>
  </div>

  <!-- Slot untuk field di dalam section -->
  <div class="flex flex-col gap-5">
    <slot />
  </div>
</section>
