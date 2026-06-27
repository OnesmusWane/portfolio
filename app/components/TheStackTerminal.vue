<script setup lang="ts">
const rows = [
  {
    label: 'BACKEND',
    items: ['laravel@11', 'php@8.3', 'mysql', 'redis', 'postgresql', 'sql', 'python', 'node.js'],
  },
  {
    label: 'FRONTEND',
    items: ['vue@3', 'nuxt@3', 'react', 'tailwind', 'javascript', 'typescript', 'jquery'],
  },
  {
    label: 'AI / AGENTIC',
    items: ['openai', 'anthropic', 'langchain', 'vector_db', 'rag_pipelines'],
  },
  {
    label: 'INFRA',
    items: ['docker', 'nginx', 'github_actions', 'linux'],
  },
]
</script>

<template>
  <section
    id="stack"
    aria-labelledby="stack-heading"
    class="max-w-6xl mx-auto px-4 md:px-8 py-24"
  >
    <!-- Visually hidden heading for SEO + accessibility -->
    <h2 id="stack-heading" class="sr-only">Technology Stack</h2>

    <div class="w-full max-w-4xl mx-auto border border-zinc-800/80 bg-[#0A0A0C] rounded-sm overflow-hidden shadow-2xl">
      <!-- Terminal header -->
      <div class="h-10 border-b border-zinc-800/80 bg-surface flex items-center px-4 justify-between" aria-hidden="true">
        <div class="flex gap-2">
          <div class="w-2.5 h-2.5 rounded-full bg-zinc-700" />
          <div class="w-2.5 h-2.5 rounded-full bg-zinc-700" />
          <div class="w-2.5 h-2.5 rounded-full bg-zinc-700" />
        </div>
        <div class="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">~/stack — zsh</div>
        <div class="w-10" />
      </div>

      <!-- Terminal body -->
      <div class="p-6 md:p-8 font-mono text-xs md:text-sm leading-loose overflow-x-auto">
        <dl class="flex flex-col gap-4 min-w-[600px]">
          <div v-for="row in rows" :key="row.label" class="flex">
            <span aria-hidden="true" class="text-blue-500 mr-4 shrink-0">›</span>
            <dt class="text-zinc-500 w-32 shrink-0">{{ row.label }}</dt>
            <dd class="text-zinc-300">
              <template v-for="(item, i) in row.items" :key="item">
                <span>{{ item }}</span>
                <span v-if="i < row.items.length - 1" aria-hidden="true" class="text-zinc-700 mx-2">·</span>
              </template>
            </dd>
          </div>

          <!-- Blinking cursor -->
          <div class="flex mt-4 items-center" aria-hidden="true">
            <span class="text-emerald-500 mr-4">$</span>
            <span class="w-2 h-4 bg-zinc-400 inline-block animate-blink" />
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>
