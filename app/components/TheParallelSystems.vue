<script setup lang="ts">
const { target: sectionRef, isInView } = useInView(0.15)

const hivesCurrent = 8
const hivesTarget = 14
const hivesPercent = Math.round((hivesCurrent / hivesTarget) * 100)

const rabbitsCurrent = 92
const rabbitsTarget = 140
const rabbitsPercent = Math.round((rabbitsCurrent / rabbitsTarget) * 100)
</script>

<template>
  <section
    id="systems"
    ref="sectionRef"
    aria-labelledby="systems-heading"
    class="max-w-6xl mx-auto px-4 md:px-8 py-24 border-t border-zinc-800/80"
  >
    <div class="mb-12">
      <p class="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-3">// off-screen_ops — real-world optimization ecosystems</p>
      <h2 id="systems-heading" class="text-3xl md:text-4xl font-bold tracking-tight text-zinc-100">
        Parallel Systems: Engineering the Earth
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-0 border border-zinc-800/80 bg-surface">

      <!-- Apiculture -->
      <div class="p-6 md:p-8 border-b md:border-b-0 md:border-r border-zinc-800/80">
        <h3 class="font-mono text-sm font-medium text-zinc-200 mb-6 flex items-center gap-2">
          <span aria-hidden="true" class="text-amber-500">■</span>
          APICULTURE
        </h3>
        <dl class="flex flex-col gap-4 font-mono text-xs">
          <div class="flex justify-between border-b border-zinc-800/50 pb-2">
            <dt class="text-zinc-500">STATUS</dt>
            <dd class="text-zinc-300">Active</dd>
          </div>
          <!-- Hive count with progress -->
          <div class="flex flex-col gap-2">
            <div class="flex justify-between">
              <dt class="text-zinc-500">HIVES (ACTIVE)</dt>
              <dd class="text-amber-400 font-medium">{{ hivesCurrent }} / {{ hivesTarget }}</dd>
            </div>
            <div class="h-1 bg-zinc-800 rounded-sm overflow-hidden">
              <AppAnimatedBar
                :percent="isInView ? hivesPercent : 0"
                color-class="bg-amber-500"
              />
            </div>
            <span class="text-zinc-600 text-[10px]">Target: {{ hivesTarget }} hives by Dec 2026 — {{ hivesPercent }}% of target</span>
          </div>
          <div class="flex flex-col gap-1 pt-1 border-t border-zinc-800/50">
            <span class="text-zinc-500">NOTES</span>
            <p class="text-zinc-400 leading-relaxed">Farm Ecosystem IoT integration planned — weight sensors and hive telemetry in the Q3 build roadmap.</p>
          </div>
        </dl>
      </div>

      <!-- Poultry + Rabbitry -->
      <div class="p-6 md:p-8 border-b md:border-b-0 md:border-r border-zinc-800/80">
        <h3 class="font-mono text-sm font-medium text-zinc-200 mb-6 flex items-center gap-2">
          <span aria-hidden="true" class="text-blue-500">■</span>
          POULTRY / RABBITRY
        </h3>
        <dl class="flex flex-col gap-4 font-mono text-xs">
          <!-- Poultry breakdown -->
          <div class="flex flex-col gap-2 border-b border-zinc-800/50 pb-3">
            <div class="flex justify-between">
              <dt class="text-zinc-500">LAYERS</dt>
              <dd class="text-zinc-300">122</dd>
            </div>
            <div class="flex justify-between">
              <dt class="text-zinc-500">BROILERS</dt>
              <dd class="text-zinc-300">131</dd>
            </div>
            <div class="flex justify-between pt-1">
              <dt class="text-zinc-600">TOTAL BIRDS</dt>
              <dd class="text-blue-400 font-medium">253</dd>
            </div>
          </div>
          <!-- Rabbits with trajectory -->
          <div class="flex flex-col gap-2">
            <div class="flex justify-between">
              <dt class="text-zinc-500">RABBITS (CURRENT)</dt>
              <dd class="text-blue-400 font-medium">{{ rabbitsCurrent }} / {{ rabbitsTarget }}</dd>
            </div>
            <div class="h-1 bg-zinc-800 rounded-sm overflow-hidden">
              <AppAnimatedBar
                :percent="isInView ? rabbitsPercent : 0"
                color-class="bg-blue-500"
              />
            </div>
            <span class="text-zinc-600 text-[10px]">Growth trajectory to {{ rabbitsTarget }} by Dec 2026 — {{ rabbitsPercent }}% of target</span>
          </div>
          <div class="flex flex-col gap-1 pt-1 border-t border-zinc-800/50">
            <span class="text-zinc-500">NOTES</span>
            <p class="text-zinc-400 leading-relaxed">Natural cycling across all three livestock streams. Feed conversion and cycle records maintained manually — sensor integration on the roadmap.</p>
          </div>
        </dl>
      </div>

      <!-- Horticulture -->
      <div class="p-6 md:p-8">
        <h3 class="font-mono text-sm font-medium text-zinc-200 mb-6 flex items-center gap-2">
          <span aria-hidden="true" class="text-emerald-500">■</span>
          HORTICULTURE
        </h3>
        <dl class="flex flex-col gap-4 font-mono text-xs">
          <div class="flex flex-col gap-2 border-b border-zinc-800/50 pb-3">
            <div class="flex justify-between">
              <dt class="text-zinc-500">ORANGES</dt>
              <dd class="text-zinc-300">Seasonal harvest</dd>
            </div>
            <div class="flex justify-between">
              <dt class="text-zinc-500">MANGOES</dt>
              <dd class="text-zinc-300">Seasonal harvest</dd>
            </div>
            <div class="flex justify-between">
              <dt class="text-zinc-500">CUSTARD APPLE (TOMOKO)</dt>
              <dd class="text-zinc-300">Seasonal harvest</dd>
            </div>
          </div>
          <div class="flex justify-between border-b border-zinc-800/50 pb-2">
            <dt class="text-zinc-500">FAMILY GARDEN</dt>
            <dd class="text-emerald-400">Active</dd>
          </div>
          <div class="flex flex-col gap-1 pt-1">
            <span class="text-zinc-500">NOTES</span>
            <p class="text-zinc-400 leading-relaxed">Mixed fruit and vegetable cultivation. Family garden running alongside the orchard — soil health and irrigation improvements planned for the Farm platform.</p>
          </div>
        </dl>
      </div>

    </div>

    <p class="mt-6 font-mono text-xs text-zinc-500">
      Convergence target →
      <span class="text-blue-500">Farm Ecosystem platform</span>
      · sensor telemetry · agentic farm ops · consumer marketplace.
    </p>
  </section>
</template>
