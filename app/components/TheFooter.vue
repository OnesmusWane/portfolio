<script setup lang="ts">
const appConfig = useAppConfig()

const links = [
  {
    label: 'EMAIL',
    href: 'mailto:onesmuswane@gmail.com',
    ariaLabel: 'Send an email to Onesmus Wane',
  },
  {
    label: 'GITHUB',
    href: appConfig.links.github,
    ariaLabel: 'View GitHub profile',
    external: true,
  },
  {
    label: 'LINKEDIN',
    href: appConfig.links.linkedin,
    ariaLabel: 'View LinkedIn profile',
    external: true,
  },
]
</script>

<template>
  <footer id="contact" aria-label="Contact and footer">
    <div class="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
      <p class="font-mono text-sm md:text-base text-zinc-300 leading-relaxed mb-8">
        open_to
        <span class="text-zinc-500">→</span>
        senior roles · contract architecture · agentic ai builds
      </p>

      <nav aria-label="Contact links" class="flex flex-wrap gap-4">
        <a
          v-for="link in links"
          :key="link.label"
          :href="link.href"
          :aria-label="link.ariaLabel"
          :rel="link.external ? 'noopener noreferrer' : undefined"
          :target="link.external ? '_blank' : undefined"
          class="font-mono text-xs text-zinc-400 border border-zinc-700 px-4 py-2 hover:border-blue-500 hover:text-blue-400 transition-colors rounded-sm tracking-widest uppercase"
        >
          [ {{ link.label }} ]
        </a>
      </nav>
    </div>

    <div class="border-t border-zinc-800/80">
      <div class="max-w-6xl mx-auto px-4 md:px-8 py-4 flex flex-col md:flex-row justify-between items-center gap-2 font-mono text-[10px] text-zinc-600 uppercase tracking-widest">
        <span>© 2026 — Built in Nairobi</span>
        <span>LAST_DEPLOY: 2026.06.28</span>
      </div>
    </div>
  </footer>
</template>
