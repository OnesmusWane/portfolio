<script setup lang="ts">
import type { ADR } from '~/types/adr'

const props = defineProps<{ adr: ADR | null }>()
const emit = defineEmits<{ close: [] }>()

const isOpen = computed(() => props.adr !== null)

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

const statusClass = computed(() => {
  if (!props.adr) return ''
  return {
    ACCEPTED: 'border-emerald-500/30 text-emerald-400',
    PROPOSED: 'border-blue-500/30 text-blue-400',
    SUPERSEDED: 'border-zinc-700 text-zinc-500',
  }[props.adr.status] ?? ''
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
        v-if="adr"
        role="dialog"
        aria-modal="true"
        :aria-label="adr.title"
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
            v-if="adr"
            class="w-full max-w-3xl border border-zinc-700 bg-obsidian-card rounded-sm overflow-hidden shadow-2xl my-8"
          >
            <!-- Terminal header -->
            <div class="h-10 border-b border-zinc-800/80 bg-[#0A0A0C] flex items-center px-4 justify-between shrink-0">
              <div class="flex gap-2" aria-hidden="true">
                <div class="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <div class="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <div class="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              </div>
              <span class="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">{{ adr.fileName }}</span>
              <button
                class="font-mono text-xs text-zinc-600 hover:text-zinc-300 transition-colors w-10 text-right"
                aria-label="Close dialog"
                @click="emit('close')"
              >
                ESC
              </button>
            </div>

            <!-- Content -->
            <div class="p-6 md:p-8 flex flex-col gap-8 overflow-y-auto max-h-[80vh]">
              <!-- Title + meta -->
              <div>
                <div class="flex items-start justify-between gap-4 mb-3">
                  <h2 class="text-xl font-semibold text-zinc-100 leading-snug">{{ adr.title }}</h2>
                  <span
                    :class="['font-mono text-[10px] uppercase tracking-widest px-2 py-1 border rounded-sm shrink-0', statusClass]"
                  >{{ adr.status }}</span>
                </div>
                <div class="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase text-zinc-500 tracking-widest">
                  <span class="text-zinc-400">{{ adr.id }}</span>
                  <span class="text-zinc-700">·</span>
                  <span>{{ adr.date }}</span>
                  <span class="text-zinc-700">·</span>
                  <span class="text-blue-500">{{ adr.projectTag }}</span>
                  <span class="text-zinc-700">·</span>
                  <span>READ_TIME: {{ adr.readTime }}</span>
                </div>
              </div>

              <!-- Summary grid -->
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6 border-y border-zinc-800/50 py-6">
                <div class="flex flex-col gap-2">
                  <span class="font-mono text-[10px] uppercase text-zinc-500 tracking-widest">CONTEXT</span>
                  <p class="text-sm text-zinc-400 leading-relaxed">{{ adr.summary.context }}</p>
                </div>
                <div class="flex flex-col gap-2">
                  <span class="font-mono text-[10px] uppercase text-zinc-500 tracking-widest">DECISION</span>
                  <p class="text-sm text-zinc-400 leading-relaxed">{{ adr.summary.decision }}</p>
                </div>
                <div class="flex flex-col gap-2">
                  <span class="font-mono text-[10px] uppercase text-zinc-500 tracking-widest">TRADEOFF</span>
                  <p class="text-sm text-zinc-400 leading-relaxed">{{ adr.summary.tradeoff }}</p>
                </div>
              </div>

              <!-- Full body -->
              <div class="flex flex-col gap-6">
                <div
                  v-for="section in adr.sections"
                  :key="section.title"
                  class="flex flex-col gap-2"
                >
                  <h3 class="font-mono text-xs uppercase text-zinc-500 tracking-widest">{{ section.title }}</h3>
                  <p class="text-sm text-zinc-400 leading-relaxed whitespace-pre-line">{{ section.body }}</p>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>
