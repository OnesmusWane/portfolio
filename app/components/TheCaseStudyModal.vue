<script setup lang="ts">
export interface CaseStudyDetail {
  num: string
  tag: string
  title: string
  subtitle: string
  overview: string
  status: string
  role: string
  url?: string
  modules: { name: string; desc: string }[]
  tags: string[]
  metrics: { label: string; value: string }[]
}

const props = defineProps<{ project: CaseStudyDetail | null }>()
const emit = defineEmits<{ close: [] }>()

const isOpen = computed(() => props.project !== null)

watch(isOpen, (open) => {
  if (import.meta.client) {
    document.body.style.overflow = open ? 'hidden' : ''
  }
})

onMounted(() => {
  const onKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') emit('close')
  }
  window.addEventListener('keydown', onKeydown)
  onUnmounted(() => window.removeEventListener('keydown', onKeydown))
})
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-200"
      enter-from-class="opacity-0"
      leave-active-class="transition-opacity duration-200"
      leave-to-class="opacity-0"
    >
      <div
        v-if="project"
        role="dialog"
        aria-modal="true"
        :aria-label="project.title"
        class="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-obsidian/90 backdrop-blur-sm p-4 md:p-8"
        @click.self="emit('close')"
      >
        <Transition
          enter-active-class="transition-all duration-300"
          enter-from-class="opacity-0 translate-y-4"
          leave-active-class="transition-all duration-200"
          leave-to-class="opacity-0 translate-y-4"
        >
          <div
            v-if="project"
            class="w-full max-w-3xl border border-zinc-700 bg-obsidian-card rounded-sm overflow-hidden shadow-2xl my-8"
          >
            <!-- Terminal header -->
            <div class="h-10 border-b border-zinc-800/80 bg-[#0A0A0C] flex items-center px-4 justify-between shrink-0" aria-hidden="true">
              <div class="flex gap-2">
                <div class="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <div class="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <div class="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              </div>
              <span class="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                {{ project.tag.replace(/[\[\]]/g, '') }}.MD
              </span>
              <button
                class="font-mono text-xs text-zinc-600 hover:text-zinc-300 transition-colors w-10 text-right"
                aria-label="Close dialog"
                @click="emit('close')"
              >
                ESC
              </button>
            </div>

            <div class="p-6 md:p-8 flex flex-col gap-8 overflow-y-auto max-h-[82vh]">
              <!-- Title block -->
              <div>
                <div class="flex items-center gap-3 font-mono text-xs mb-3">
                  <span class="text-zinc-500">{{ project.num }}</span>
                  <span class="text-blue-500">{{ project.tag }}</span>
                </div>
                <h2 class="text-xl md:text-2xl font-semibold text-zinc-100 mb-2">{{ project.title }}</h2>
                <p class="font-mono text-xs text-zinc-500">{{ project.subtitle }}</p>
              </div>

              <!-- Status / role row -->
              <div class="flex flex-wrap gap-6 border-y border-zinc-800/50 py-5 font-mono text-xs">
                <div class="flex flex-col gap-1">
                  <span class="text-zinc-600 uppercase tracking-widest text-[10px]">STATUS</span>
                  <span class="text-emerald-400">{{ project.status }}</span>
                </div>
                <div class="flex flex-col gap-1">
                  <span class="text-zinc-600 uppercase tracking-widest text-[10px]">ROLE</span>
                  <span class="text-zinc-300">{{ project.role }}</span>
                </div>
                <div v-if="project.url" class="flex flex-col gap-1">
                  <span class="text-zinc-600 uppercase tracking-widest text-[10px]">LIVE URL</span>
                  <a
                    :href="project.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
                  >
                    {{ project.url.replace('https://', '') }}
                    <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                </div>
              </div>

              <!-- Overview -->
              <div class="flex flex-col gap-2">
                <span class="font-mono text-[10px] uppercase text-zinc-500 tracking-widest">OVERVIEW</span>
                <p class="text-sm text-zinc-400 leading-relaxed">{{ project.overview }}</p>
              </div>

              <!-- Metrics -->
              <div v-if="project.metrics.length" class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div
                  v-for="m in project.metrics"
                  :key="m.label"
                  class="flex flex-col gap-1 border border-zinc-800 p-3 rounded-sm"
                >
                  <span class="font-mono text-[10px] uppercase text-zinc-600 tracking-widest">{{ m.label }}</span>
                  <span class="font-mono text-sm text-zinc-200">{{ m.value }}</span>
                </div>
              </div>

              <!-- Modules -->
              <div class="flex flex-col gap-4">
                <span class="font-mono text-[10px] uppercase text-zinc-500 tracking-widest">SYSTEM MODULES</span>
                <div class="flex flex-col gap-3">
                  <div
                    v-for="mod in project.modules"
                    :key="mod.name"
                    class="flex flex-col gap-1 border-l-2 border-zinc-800 hover:border-blue-500/50 pl-4 py-1 transition-colors"
                  >
                    <span class="font-mono text-xs text-zinc-300">{{ mod.name }}</span>
                    <p class="text-xs text-zinc-500 leading-relaxed">{{ mod.desc }}</p>
                  </div>
                </div>
              </div>

              <!-- Tech tags -->
              <div class="pt-2 border-t border-zinc-800/50 flex flex-wrap gap-2 font-mono text-[10px] uppercase text-zinc-500">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="px-2 py-1 border border-zinc-800"
                >{{ tag }}</span>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>
