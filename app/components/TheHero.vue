<script setup lang="ts">
const row1Visible = ref(false)
const row2Visible = ref(false)

onMounted(() => {
  row1Visible.value = true
  setTimeout(() => { row2Visible.value = true }, 200)
})
</script>

<template>
  <section
    id="index"
    aria-label="Introduction"
    class="max-w-6xl mx-auto px-4 md:px-8 pt-24 pb-16 md:pt-32 md:pb-24"
  >
    <!-- Headline -->
    <div
      :class="[
        'flex flex-col gap-6 transition-all duration-500',
        row1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5',
      ]"
    >
      <p class="font-mono text-xs uppercase text-zinc-500 tracking-widest">
        // portfolio_v2026 — senior engineer
      </p>

      <h1 class="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-zinc-100 max-w-4xl">
        Architecting
        <span class="text-zinc-500"> Intelligent Ecosystems</span>
        &amp; Enterprise Infrastructure.
      </h1>
    </div>

    <!-- Stat grid -->
    <div
      :class="[
        'mt-16 grid grid-cols-2 md:grid-cols-4 border-t border-l border-zinc-800/80 transition-all duration-500',
        row2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5',
      ]"
    >
      <div class="p-4 md:p-6 border-r border-b border-zinc-800/80 flex flex-col gap-2">
        <span class="font-mono text-[10px] uppercase text-zinc-500 tracking-wider">LOCATION</span>
        <span class="font-mono text-sm text-zinc-200">Nairobi, KE</span>
      </div>
      <div class="p-4 md:p-6 border-r border-b border-zinc-800/80 flex flex-col gap-2">
        <span class="font-mono text-[10px] uppercase text-zinc-500 tracking-wider">ROLE</span>
        <span class="font-mono text-sm text-zinc-200">Senior Full-Stack / Agentic AI</span>
      </div>
      <div class="p-4 md:p-6 border-r border-b border-zinc-800/80 flex flex-col gap-2">
        <span class="font-mono text-[10px] uppercase text-zinc-500 tracking-wider">STACK</span>
        <span class="font-mono text-sm text-zinc-200">Laravel · Nuxt 3 · Vue 3</span>
      </div>
      <div class="p-4 md:p-6 border-r border-b border-zinc-800/80 flex flex-col gap-2">
        <span class="font-mono text-[10px] uppercase text-zinc-500 tracking-wider">STATUS</span>
        <div class="flex items-center gap-2">
          <div
            aria-hidden="true"
            class="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"
          />
          <span class="font-mono text-sm text-zinc-200">Available · Q3 2026</span>
        </div>
      </div>
    </div>
  </section>
</template>
