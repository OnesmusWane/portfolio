<script setup lang="ts">
import type { CaseStudyDetail } from './TheCaseStudyModal.vue'

interface Repo {
  label: string
  url: string
}

interface Project {
  num: string
  tag: string
  title: string
  desc: string
  colSpan: string
  visual: string
  tags: string[]
  metric: string
  url?: string
  repos?: Repo[]
  detail?: CaseStudyDetail
}

const barHeights = [28, 60, 40, 80, 50, 35, 70, 55, 90, 45, 65, 30]

const projects: Project[] = [
  {
    num: '01',
    tag: '[HEALTHTECH / PLATFORM]',
    title: 'My 1Health',
    desc: 'Global medical tourism platform connecting 53,000+ international patients with 350+ accredited hospitals across 20+ countries. End-to-end patient journey management from consultation through recovery.',
    colSpan: 'md:col-span-2',
    visual: 'globe',
    tags: ['Laravel', 'Vue 3', 'MySQL', 'Redis', 'Healthcare API'],
    metric: 'PATIENTS: 53K+',
    url: 'https://my1health.com/',
  },
  {
    num: '02',
    tag: '[HEALTHTECH / BACKEND]',
    title: 'IMS — My 1Health',
    desc: 'Internal Information Management System powering My 1Health\'s full operational backbone — patient lifecycle, hospital referral coordination, TPA billing, and case officer workflows.',
    colSpan: 'md:col-span-1',
    visual: 'schema',
    tags: ['Laravel 11', 'MySQL', 'Redis', 'Queue Workers', 'REST API'],
    metric: 'INTERNAL SYSTEM',
    detail: {
      num: '02',
      tag: '[HEALTHTECH / BACKEND]',
      title: 'IMS — My 1Health Information Management System',
      subtitle: 'Internal operational platform — no public URL',
      role: 'Lead Developer & System Architect',
      status: 'Live · Active', 
      overview: 'The My 1Health IMS is the operational nerve centre of the medical tourism platform. It consolidates every patient-facing workflow into a single system: from first inquiry and KYC, through treatment plan selection and hospital referral, to post-treatment follow-up and insurance settlement. Case officers manage complex multi-country patient journeys entirely within the system, with full audit trails and SLA tracking on every step.',
      metrics: [
        { label: 'PATIENTS MANAGED', value: '53K+' },
        { label: 'HOSPITAL PARTNERS', value: '350+' },
        { label: 'COUNTRIES', value: '20+' },
        { label: 'INSURANCE TPAs', value: '100+' },
      ],
      modules: [
        { name: 'Patient Intake & KYC', desc: 'Multi-step onboarding with document collection, identity verification, and medical history intake. Supports international patient profiles across 20+ countries.' },
        { name: 'Treatment Plan Builder', desc: 'Case officers build structured treatment packages — hospital selection, specialist matching, procedure pricing, and itinerary — from a curated hospital and specialist database.' },
        { name: 'Hospital Referral Engine', desc: 'Automated referral dispatch to partner hospitals with real-time status tracking, acceptance workflows, and SLA monitoring on response times.' },
        { name: 'Insurance & TPA Integration', desc: 'Direct billing module supporting 100+ global insurance providers and TPAs. Handles pre-authorisation, claims submission, and settlement reconciliation.' },
        { name: 'Case Officer Dashboard', desc: 'Unified workspace for managing concurrent patient cases, internal messaging, task assignment, and escalation workflows with priority queuing.' },
        { name: 'Reporting & Analytics', desc: 'Executive dashboards covering patient volume, referral conversion rates, hospital partner performance, and revenue by treatment category.' },
        { name: 'Rewards & Loyalty Engine', desc: 'Backend for the My 1Health Rewards Program — points accrual, redemption rules, tier management, and patient-facing rewards history.' },
      ],
      tags: ['Laravel 11', 'MySQL', 'Redis', 'Horizon Queue Workers', 'REST API', 'Vue 3', 'Role-Based Access Control'],
      metrics: [
        { label: 'PATIENTS MANAGED', value: '53K+' },
        { label: 'HOSPITAL PARTNERS', value: '350+' },
        { label: 'COUNTRIES', value: '20+' },
        { label: 'INSURANCE TPAs', value: '100+' },
      ],
    },
  },
  {
    num: '03',
    tag: '[AUTOMOTIVE / PLATFORM]',
    title: 'Premax Autocare',
    desc: 'Premium automotive care studio platform for Nairobi\'s luxury vehicle market. Full admin system for managing workshop bookings, service records, fleet clients, and website content.',
    colSpan: 'md:col-span-1',
    visual: 'diamond',
    tags: ['Vue 3', 'Laravel API', 'MySQL', 'Vuetify', 'Tailwind'],
    metric: 'VEHICLES: 5K+',
    url: 'https://www.premaxautoservice.co.ke/',
    repos: [
      { label: 'premax', url: 'https://github.com/OnesmusWane/premax' },
      { label: 'premax-admin', url: 'https://github.com/OnesmusWane/premax-admin' },
    ],
  },
  {
    num: '04',
    tag: '[BRANDING / PLATFORM]',
    title: 'Tej Printbrands',
    desc: 'Creative design, printing and branding platform serving Nairobi enterprises. Public website with e-commerce shop, quote engine, and full content admin for portfolios, services, and client management.',
    colSpan: 'md:col-span-1',
    visual: 'grid',
    tags: ['Vue 3', 'Laravel API', 'MySQL', 'Tailwind', 'E-commerce'],
    metric: 'CLIENTS: 30+ PROJECTS',
    url: 'https://tejprintbrands.com/',
    repos: [
      { label: 'tej-printbrands', url: 'https://github.com/OnesmusWane/tej-printbrands' },
    ],
  },
  {
    num: '05',
    tag: '[AGRITECH / AGENTIC AI]',
    title: 'Farm Ecosystem Platform',
    desc: 'Multi-module farm management system with IoT telemetry integration, covering apiculture, poultry, rabbitry, and horticulture. Paired with a consumer marketplace for selling honey and nuts direct-to-buyer.',
    colSpan: 'md:col-span-1',
    visual: 'wave',
    tags: ['Laravel 11', 'Nuxt 3', 'IoT Sensors', 'PostgreSQL', 'AI Agent'],
    metric: 'IN DEVELOPMENT',
    detail: {
      num: '05',
      tag: '[AGRITECH / AGENTIC AI]',
      title: 'Farm Ecosystem Platform',
      subtitle: 'Currently in active development',
      role: 'Founder & Lead Developer',
      status: 'In Development · Q3 2026',
      overview: 'A unified farm operations platform born from personally running 24 active beehives, 500+ poultry, and 4 acres of horticulture. The system bridges farm management software with IoT sensor telemetry and an agentic AI layer that surfaces predictive insights — when to harvest, detect swarm risk, flag feed conversion anomalies. A paired consumer marketplace allows direct-to-buyer sales of honey and nuts, cutting out middlemen entirely.',
      metrics: [
        { label: 'HIVES MONITORED', value: '24' },
        { label: 'FLOCK SIZE', value: '500+' },
        { label: 'PLOTS', value: '4 Acres' },
        { label: 'TARGET LAUNCH', value: 'Q4 2026' },
      ],
      modules: [
        { name: 'Farm Command Centre', desc: 'Central dashboard with live sensor feeds, farm health scores, and AI-generated daily action items across all farm units.' },
        { name: 'Apiculture Module', desc: 'Hive registry with IoT weight sensor integration for tracking honey accumulation and predictive harvest scheduling. Swarm early-warning via weight drop patterns.' },
        { name: 'Poultry & Rabbitry Module', desc: 'Flock management with cycle tracking, feed conversion ratio (FCR) monitoring, automated climate control schedules, and mortality logging.' },
        { name: 'Horticulture Module', desc: 'Plot management with crop rotation planning, soil moisture telemetry from drip irrigation network, yield logging, and harvest calendar.' },
        { name: 'IoT Telemetry Layer', desc: 'Real-time sensor ingestion pipeline for weight sensors (hives), soil moisture probes, and climate sensors. Data stored as time-series for AI analysis.' },
        { name: 'Agentic AI Ops', desc: 'LLM-powered agent that reads telemetry and farm logs to generate contextual recommendations — harvest timing, feed adjustments, pest risk alerts, and seasonal planning.' },
        { name: 'Direct Sales Marketplace', desc: 'Consumer-facing storefront for selling raw honey and nuts. Manages inventory sync with farm production logs, order processing, and fulfilment tracking.' },
      ],
      tags: ['Laravel 11', 'Nuxt 3', 'PostgreSQL', 'IoT Sensors', 'LLM Agent', 'Time-Series DB', 'Tailwind', 'REST API'],
      metrics: [
        { label: 'HIVES MONITORED', value: '24' },
        { label: 'FLOCK SIZE', value: '500+' },
        { label: 'PLOTS', value: '4 Acres' },
        { label: 'TARGET LAUNCH', value: 'Q4 2026' },
      ],
    },
  },
]

const selectedProject = ref<CaseStudyDetail | null>(null)

function handleClick(project: Project) {
  if (project.url) {
    window.open(project.url, '_blank', 'noopener,noreferrer')
  } else if (project.detail) {
    selectedProject.value = project.detail
  }
}
</script>

<template>
  <section
    id="work"
    aria-labelledby="work-heading"
    class="max-w-6xl mx-auto px-4 md:px-8 py-24"
  >
    <div class="flex items-baseline gap-4 mb-12">
      <span class="font-mono text-xs text-zinc-500 uppercase tracking-widest">// selected_work</span>
      <h2 id="work-heading" class="text-2xl font-semibold tracking-tight text-zinc-100">
        Case Studies
      </h2>
      <span aria-hidden="true" class="font-mono text-xs text-zinc-600">05</span>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <article
        v-for="project in projects"
        :key="project.num"
        :class="[
          project.colSpan,
          'group relative border border-zinc-800/80 bg-surface p-6 md:p-8 flex flex-col justify-between',
          'hover:-translate-y-1 hover:border-blue-500 transition-all duration-200 cursor-pointer min-h-75',
        ]"
        :aria-label="project.url ? `Visit ${project.title}` : `View ${project.title} details`"
        :role="project.url ? 'link' : 'button'"
        tabindex="0"
        @click="handleClick(project)"
        @keydown.enter="handleClick(project)"
        @keydown.space.prevent="handleClick(project)"
      >
        <!-- External link or detail arrow -->
        <div class="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true">
          <!-- External link icon for URL projects -->
          <svg v-if="project.url" class="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          <!-- Internal arrow for modal projects -->
          <svg v-else class="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </div>

        <div class="flex flex-col gap-5">
          <div class="flex items-center gap-3 font-mono text-xs">
            <span class="text-zinc-500">{{ project.num }}</span>
            <span class="text-blue-500">{{ project.tag }}</span>
          </div>

          <div>
            <h3 class="text-xl md:text-2xl font-semibold text-zinc-100 mb-2 group-hover:text-blue-50 transition-colors">
              {{ project.title }}
            </h3>
            <p class="text-zinc-400 text-sm leading-relaxed">{{ project.desc }}</p>
          </div>

          <!-- Bar chart visual — data throughput -->
          <div v-if="project.visual === 'bars'" aria-hidden="true" class="w-full h-14 border-y border-zinc-800/50 flex items-center justify-between px-4 my-1 opacity-50">
            <div class="flex gap-1 items-end h-8">
              <div v-for="(h, i) in barHeights" :key="i" class="w-1 bg-zinc-700" :style="{ height: `${h}%` }" />
            </div>
            <div class="font-mono text-[10px] text-zinc-600">NODE_GRAPH_ACTIVE</div>
          </div>

          <!-- Globe / network — global platform -->
          <div v-else-if="project.visual === 'globe'" aria-hidden="true" class="w-full h-14 border-y border-zinc-800/50 flex items-center justify-center gap-4 my-1 opacity-50 relative overflow-hidden">
            <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)]" />
            <div class="w-8 h-8 rounded-full border border-zinc-700 relative flex items-center justify-center">
              <div class="absolute w-full h-px bg-zinc-700 rotate-0" />
              <div class="absolute w-full h-px bg-zinc-700 rotate-45" />
              <div class="absolute w-full h-px bg-zinc-700 rotate-90" />
              <div class="w-1.5 h-1.5 bg-blue-500 rounded-full z-10" />
            </div>
            <div class="flex gap-3">
              <div v-for="n in 4" :key="n" class="w-1.5 h-1.5 rounded-full bg-zinc-700" />
            </div>
            <div class="font-mono text-[10px] text-zinc-600">GLOBAL_NETWORK</div>
          </div>

          <!-- Schema grid — admin / internal system -->
          <div v-else-if="project.visual === 'schema'" aria-hidden="true" class="w-full h-14 border-y border-zinc-800/50 flex items-center justify-center gap-2 my-1 opacity-50">
            <div class="grid grid-cols-3 gap-1">
              <div v-for="n in 9" :key="n" class="w-4 h-3 border border-zinc-700 rounded-[1px]" :class="[n % 3 === 0 ? 'bg-blue-500/20 border-blue-500/30' : '']" />
            </div>
            <div class="font-mono text-[10px] text-zinc-600 ml-3">DB_SCHEMA</div>
          </div>

          <!-- Diamond — luxury automotive -->
          <div v-else-if="project.visual === 'diamond'" aria-hidden="true" class="w-full h-14 border border-zinc-800/50 rounded-sm flex items-center justify-center my-1 opacity-50 relative overflow-hidden">
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)]" />
            <div class="w-8 h-8 border border-zinc-700 rotate-45" />
          </div>

          <!-- Grid — creative/branding -->
          <div v-else-if="project.visual === 'grid'" aria-hidden="true" class="w-full h-14 border-y border-zinc-800/50 flex items-center justify-center gap-1 my-1 opacity-50">
            <div class="grid grid-cols-4 gap-1">
              <div v-for="(color, n) in ['bg-zinc-700','bg-zinc-600','bg-zinc-800','bg-zinc-700','bg-zinc-600','bg-blue-500/30','bg-zinc-700','bg-zinc-600']" :key="n" class="w-4 h-5 rounded-[1px]" :class="color" />
            </div>
          </div>

          <!-- Wave — IoT / sensor -->
          <div v-else-if="project.visual === 'wave'" aria-hidden="true" class="w-full h-14 border-y border-zinc-800/50 flex items-center px-4 gap-1 my-1 opacity-50 overflow-hidden">
            <div class="flex gap-0.5 items-center h-8 flex-1">
              <div
                v-for="(h, i) in [40, 55, 35, 70, 45, 60, 30, 75, 50, 65, 40, 55, 35, 70, 45, 60]"
                :key="i"
                class="flex-1 rounded-full"
                :class="i % 4 === 0 ? 'bg-emerald-500/60' : 'bg-zinc-700'"
                :style="{ height: `${h}%` }"
              />
            </div>
            <div class="font-mono text-[10px] text-zinc-600 shrink-0 ml-2">IOT_FEED</div>
          </div>
        </div>

        <!-- Footer -->
        <div class="mt-6 pt-5 border-t border-zinc-800/80 flex flex-col gap-3">
          <div class="flex flex-wrap gap-2 font-mono text-[10px] uppercase text-zinc-500">
            <span v-for="tag in project.tags" :key="tag" class="px-2 py-1 border border-zinc-800">{{ tag }}</span>
          </div>

          <div class="flex items-center justify-between gap-3">
            <!-- GitHub repo links -->
            <div v-if="project.repos?.length" class="flex flex-wrap gap-3">
              <a
                v-for="repo in project.repos"
                :key="repo.url"
                :href="repo.url"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="`View ${repo.label} on GitHub`"
                class="flex items-center gap-1.5 font-mono text-[10px] text-zinc-500 hover:text-blue-400 transition-colors"
                @click.stop
              >
                <svg class="w-3 h-3 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                {{ repo.label }}
              </a>
            </div>
            <div v-else class="flex-1" />

            <div class="font-mono text-[10px] shrink-0" :class="project.metric === 'IN DEVELOPMENT' ? 'text-blue-500/70' : 'text-zinc-400'">
              {{ project.metric }}
            </div>
          </div>
        </div>

        <!-- Hint on non-URL projects -->
        <div v-if="!project.url && project.detail" class="mt-2 font-mono text-[10px] text-blue-500/50 group-hover:text-blue-500/80 transition-colors">
          → click to view system architecture
        </div>
      </article>
    </div>

    <TheCaseStudyModal :project="selectedProject" @close="selectedProject = null" />
  </section>
</template>
