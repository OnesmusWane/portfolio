<script setup lang="ts">
interface Target {
  title: string
  percent: number
  explainer: string
  note?: string
}

interface Quarter {
  id: string
  label: string
  targets: Target[]
  explainer: string
}

interface Year {
  year: number
  quarters: Quarter[]
  explainer: string
}

const years: Year[] = [
  {
    year: 2025,
    explainer: 'Foundation year — IMS core modules built and battle-tested, Premax and Tej Printbrands launched with full admin systems, and the SSR/SPA architecture pattern formalised across both platforms. Closed the year with an IMS RBAC overhaul that eliminated an entire class of data access bugs.',
    quarters: [
      {
        id: '2025-Q1',
        label: 'Q1 2025',
        explainer: 'Architecture-first quarter: IMS module boundaries defined, My 1Health website refreshed, and MySQL chosen as the production DB for all platforms. More design decisions than visible deliverables.',
        targets: [
          {
            title: 'IMS architecture + modular structure',
            percent: 88,
            explainer: 'Laravel modular monolith scaffolded with domain boundaries enforced by PHPStan level 8 and php-arkitect rules wired into CI. All five domain modules (Patients, Referrals, Insurance, Rewards, Reports) scaffolded.',
          },
          {
            title: 'My 1Health website redesign',
            percent: 82,
            explainer: 'Homepage, services directory, and hospital partner pages redesigned and deployed. Rewards programme page deferred to Q2 after late design feedback.',
          },
          {
            title: 'Database strategy + initial IMS migrations',
            percent: 95,
            explainer: 'MySQL 8.0 selected over PostgreSQL for all production platforms (ADR-029). Core IMS schema designed, migrations written, and seeded with hospital and TPA seed data.',
          },
        ],
      },
      {
        id: '2025-Q2',
        label: 'Q2 2025',
        explainer: 'Core IMS patient workflow shipped and Premax public site launched. TPA onboarding target partially missed — 30 of 40 planned TPAs integrated. Hospital Referral Engine complexity underestimated.',
        targets: [
          {
            title: 'IMS Patient Intake & KYC module',
            percent: 90,
            explainer: 'Multi-step intake, document upload pipeline, and identity verification shipped. Edge case handling for dual-nationality passports deferred to Q3.',
          },
          {
            title: 'Premax Autocare public website (Nuxt 3 SSR)',
            percent: 85,
            explainer: 'Full SSR site launched with service pages, gallery, and online booking flow. Fleet management feature dropped post-design review to stay on schedule.',
          },
          {
            title: 'IMS Hospital Referral Engine Phase 1',
            percent: 78,
            explainer: 'Referral dispatch and acknowledgement tracking built. Advanced SLA alerting and escalation logic deferred to Q3 — complexity was underestimated during planning.',
          },
        ],
      },
      {
        id: '2025-Q3',
        label: 'Q3 2025',
        explainer: 'Challenging quarter — Premax booking MVP scope reduced mid-sprint after owner feedback, costing 3 weeks of planned work. Tej Printbrands delivered on schedule. SSR/SPA split pattern formalised as ADR-033.',
        targets: [
          {
            title: 'Premax Admin Panel (Vue 3 SPA)',
            percent: 88,
            explainer: 'Workshop job management, service record history, and client portal shipped. Bulk invoice export deferred when scope was cut to recover the timeline.',
            note: 'scope reduced',
          },
          {
            title: 'Tej Printbrands website + admin',
            percent: 82,
            explainer: 'Nuxt 3 public site and Vue 3 admin panel both launched on schedule. E-commerce checkout deferred to Q4 to prioritise portfolio gallery and quote engine first.',
          },
          {
            title: 'Premax booking system MVP',
            percent: 74,
            explainer: 'Core booking flow and service selection delivered. Fleet client management feature removed after owner confirmed the priority was online visibility over fleet tooling.',
            note: 'scope changed',
          },
        ],
      },
      {
        id: '2025-Q4',
        label: 'Q4 2025',
        explainer: 'Best quarter of 2025 — IMS RBAC refactor eliminated the data-leak bug class, Tej e-commerce shipped with a WhatsApp integration bonus, and the Case Officer dashboard completed the core IMS product.',
        targets: [
          {
            title: 'IMS RBAC refactor (Spatie + Policies)',
            percent: 90,
            explainer: 'Spatie Laravel-Permission + Laravel Policies deployed (ADR-038). PermissionRegistry pattern enforced via custom PHPStan rule. Staging data-access incident class eliminated permanently.',
          },
          {
            title: 'IMS Case Officer Dashboard',
            percent: 88,
            explainer: 'Unified case workspace with in-app notifications, patient timeline, and task queue shipped. Bulk case reassignment deferred to Q1 2026.',
          },
          {
            title: 'Tej Printbrands e-commerce completion',
            percent: 92,
            explainer: 'Full checkout, order management, and product catalogue deployed. WhatsApp order integration added as a bonus during the sprint — now handles 30% of orders.',
          },
        ],
      },
    ],
  },
  {
    year: 2026,
    explainer: 'Consolidation and reach year — IMS analytics overhauled into a unified reporting centre, Premax v1 shipped to production (evolving into the premium v2 now live), Google offline conversions wired up, and IMS support communication rebuilt around a central agent workspace. Q3 in progress.',
    quarters: [
      {
        id: '2026-Q1',
        label: 'Q1 2026',
        explainer: 'Data-first quarter — IMS reporting consolidated from scattered dashboards into one unified analysis board, Premax MVP built from scratch and deployed to production. Both shipped clean and set the stage for the more ambitious v2 work ahead.',
        targets: [
          {
            title: 'IMS Reporting & Data Analysis Center',
            percent: 92,
            explainer: 'Consolidated every IMS dashboard into a single data reporting board with a dedicated analysis centre covering patient flow, TPA settlement status, referral funnels, and case officer workload. Main focus of the quarter — shipped clean.',
          },
          {
            title: 'Premax Autocare MVP — build & production launch',
            percent: 90,
            explainer: 'Initialized, built, and deployed the Premax Autocare platform to production in one quarter. The MVP validated the online booking and service showcase flow — its success directly led to the premium v2 redesign now live.',
          },
          {
            title: 'Farm Ecosystem platform architecture',
            percent: 78,
            explainer: 'Dual-DB design finalised (MySQL for operational data, TimescaleDB for telemetry). Laravel module structure scaffolded. MQTT protocol selected for IoT sensor communication.',
          },
        ],
      },
      {
        id: '2026-Q2',
        label: 'Q2 2026',
        explainer: 'Product-and-reach quarter — Google offline conversion tracking confirmed, IMS support rebuilt around a central agent workspace (90% adoption on release day, final updates shipped today), Tej Printbrands MVP launched and under observation, and full Farm Ecosystem architecture blueprint completed through deep research. Strong quarter across the board.',
        targets: [
          {
            title: 'Google offline conversion tracking',
            percent: 95,
            explainer: 'End-to-end offline conversion pipeline implemented — capturing post-click patient registrations and hospital onboarding events and pushing them back to Google Ads as offline conversions. Confirmed tracking accurately and delivering measurable attribution improvement.',
          },
          {
            title: 'IMS Ticketing & Communication module restructure',
            percent: 92,
            explainer: 'Rebuilt the IMS support workflow around a centralised agent communication workspace — all ticketing, internal notes, escalation, and patient messaging unified in one view. Released this week with 90% adoption rate on day one. Final polish updates shipped today.',
          },
          {
            title: 'Tej Printbrands MVP launch',
            percent: 80,
            explainer: 'Tej Printbrands MVP built and deployed to production. Product catalogue, quote engine, and order flow live. Still in the observation window — monitoring user behaviour and gathering feedback before committing to the next feature batch.',
            note: 'observing',
          },
          {
            title: 'Farm Ecosystem — deep research & architecture blueprint',
            percent: 88,
            explainer: 'Conducted deep research into agritech platforms, IoT sensor protocols, and market dynamics. Produced a full architecture blueprint: dual-DB design (MySQL + TimescaleDB), MQTT ingestion pipeline, modular Laravel structure, and consumer marketplace roadmap. Foundation for Q3 build work.',
          },
        ],
      },
      {
        id: '2026-Q3',
        label: 'Q3 2026',
        explainer: 'Current quarter — Farm Ecosystem marketplace in early development, IMS Rewards engine in active build, and this portfolio being finished and deployed. All targets in progress.',
        targets: [
          {
            title: 'Farm Ecosystem consumer marketplace',
            percent: 30,
            explainer: 'Product listing architecture and inventory sync model designed. UI scaffolded. Checkout flow and M-Pesa payment gateway integration not yet started.',
            note: 'in progress',
          },
          {
            title: 'IMS Rewards & Loyalty Engine',
            percent: 45,
            explainer: 'Points accrual engine built and unit-tested. Redemption rules and tier management in active development. Patient-facing dashboard not yet started.',
            note: 'in progress',
          },
          {
            title: 'Portfolio launch',
            percent: 80,
            explainer: 'Design system, all sections, ADR documentation, and SEO complete. Deployment configuration and custom domain setup pending. Target: end of Q3 2026.',
            note: 'in progress',
          },
        ],
      },
    ],
  },
]

// Default open: current year + current quarter
const expandedYears = ref(new Set<number>([2026]))
const expandedQuarters = ref(new Set<string>(['2026-Q3']))

function toggleYear(year: number) {
  const s = new Set(expandedYears.value)
  s.has(year) ? s.delete(year) : s.add(year)
  expandedYears.value = s
}

function toggleQuarter(id: string) {
  const s = new Set(expandedQuarters.value)
  s.has(id) ? s.delete(id) : s.add(id)
  expandedQuarters.value = s
}

function quarterAvg(q: Quarter): number {
  return Math.round(q.targets.reduce((a, t) => a + t.percent, 0) / q.targets.length)
}

function yearAvg(y: Year): number {
  const all = y.quarters.flatMap(q => q.targets)
  return Math.round(all.reduce((a, t) => a + t.percent, 0) / all.length)
}

const overallAvg = computed(() => {
  const all = years.flatMap(y => y.quarters.flatMap(q => q.targets))
  return Math.round(all.reduce((a, t) => a + t.percent, 0) / all.length)
})

const totalTargets = computed(() => years.flatMap(y => y.quarters.flatMap(q => q.targets)).length)

function barColor(p: number): string {
  if (p >= 90) return 'bg-emerald-500'
  if (p >= 75) return 'bg-blue-500'
  if (p >= 60) return 'bg-amber-400'
  return 'bg-rose-500'
}

function textColor(p: number): string {
  if (p >= 90) return 'text-emerald-400'
  if (p >= 75) return 'text-blue-400'
  if (p >= 60) return 'text-amber-400'
  return 'text-rose-400'
}

function badgeClass(p: number): string {
  if (p >= 90) return 'border-emerald-500/20 text-emerald-400/80 bg-emerald-500/5'
  if (p >= 75) return 'border-blue-500/20 text-blue-400/80 bg-blue-500/5'
  if (p >= 60) return 'border-amber-500/20 text-amber-400/80 bg-amber-500/5'
  return 'border-rose-500/20 text-rose-400/80 bg-rose-500/5'
}

function statusLabel(p: number): string {
  if (p >= 90) return 'EXCEEDED'
  if (p >= 75) return 'ON TRACK'
  if (p >= 60) return 'PARTIAL'
  return 'IN PROGRESS'
}

// Smooth accordion animation via JS hooks
function onBeforeEnter(el: Element) {
  const e = el as HTMLElement
  e.style.maxHeight = '0'
  e.style.opacity = '0'
  e.style.overflow = 'hidden'
}
function onEnter(el: Element, done: () => void) {
  const e = el as HTMLElement
  e.style.transition = 'max-height 0.32s ease, opacity 0.25s ease'
  e.style.maxHeight = e.scrollHeight + 'px'
  e.style.opacity = '1'
  setTimeout(done, 340)
}
function onAfterEnter(el: Element) {
  const e = el as HTMLElement
  e.style.maxHeight = 'none'
  e.style.overflow = 'visible'
}
function onLeave(el: Element, done: () => void) {
  const e = el as HTMLElement
  e.style.maxHeight = e.scrollHeight + 'px'
  e.style.overflow = 'hidden'
  requestAnimationFrame(() => {
    e.style.transition = 'max-height 0.25s ease, opacity 0.2s ease'
    e.style.maxHeight = '0'
    e.style.opacity = '0'
  })
  setTimeout(done, 270)
}

const { target: sectionRef, isInView } = useInView(0.1)
</script>

<template>
  <section
    id="performance"
    ref="sectionRef"
    aria-labelledby="performance-heading"
    class="max-w-6xl mx-auto px-4 md:px-8 py-24 border-t border-zinc-800/80"
  >
    <!-- Heading + summary stats -->
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
      <div>
        <div class="flex items-baseline gap-4 mb-3">
          <span class="font-mono text-xs text-zinc-500 uppercase tracking-widest">// PERFORMANCE</span>
          <h2 id="performance-heading" class="text-2xl font-semibold tracking-tight text-zinc-100">
            Quarterly Targets
          </h2>
        </div>
        <!-- Legend -->
        <div class="flex flex-wrap gap-4 font-mono text-[10px] uppercase tracking-widest">
          <span class="flex items-center gap-1.5 text-emerald-400/70"><span class="w-2 h-2 rounded-full bg-emerald-500 inline-block" />≥90% Exceeded</span>
          <span class="flex items-center gap-1.5 text-blue-400/70"><span class="w-2 h-2 rounded-full bg-blue-500 inline-block" />≥75% On Track</span>
          <span class="flex items-center gap-1.5 text-amber-400/70"><span class="w-2 h-2 rounded-full bg-amber-400 inline-block" />≥60% Partial</span>
          <span class="flex items-center gap-1.5 text-rose-400/70"><span class="w-2 h-2 rounded-full bg-rose-500 inline-block" />&lt;60% In Progress</span>
        </div>
      </div>

      <!-- Summary stats -->
      <div class="flex gap-3 shrink-0">
        <div class="border border-zinc-800/80 bg-surface p-4 flex flex-col gap-1 min-w-30 rounded-sm">
          <span class="font-mono text-[10px] uppercase text-zinc-600 tracking-wider">AVG DELIVERY</span>
          <span :class="['font-mono text-2xl font-medium', textColor(overallAvg)]">{{ overallAvg }}%</span>
        </div>
        <div class="border border-zinc-800/80 bg-surface p-4 flex flex-col gap-1 min-w-25 rounded-sm">
          <span class="font-mono text-[10px] uppercase text-zinc-600 tracking-wider">TARGETS</span>
          <span class="font-mono text-2xl text-zinc-300">{{ totalTargets }}</span>
        </div>
        <div class="border border-zinc-800/80 bg-surface p-4 flex flex-col gap-1 min-w-25 rounded-sm">
          <span class="font-mono text-[10px] uppercase text-zinc-600 tracking-wider">QUARTERS</span>
          <span class="font-mono text-2xl text-zinc-300">{{ years.flatMap(y => y.quarters).length }}</span>
        </div>
      </div>
    </div>

    <!-- Year accordion -->
    <div class="flex flex-col gap-3">
      <div
        v-for="year in years"
        :key="year.year"
        class="border border-zinc-800/80 rounded-sm overflow-hidden"
      >
        <!-- Year header (always visible) -->
        <button
          class="w-full flex items-center gap-4 p-5 bg-surface hover:bg-zinc-800/30 transition-colors text-left group"
          :aria-expanded="expandedYears.has(year.year)"
          :aria-controls="`year-${year.year}`"
          @click="toggleYear(year.year)"
        >
          <!-- Chevron -->
          <svg
            aria-hidden="true"
            :class="['w-4 h-4 text-zinc-500 transition-transform duration-200 shrink-0', expandedYears.has(year.year) ? 'rotate-90' : '']"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>

          <!-- Year label -->
          <span class="font-mono text-base font-medium text-zinc-200 w-14 shrink-0">{{ year.year }}</span>

          <!-- Bar -->
          <div class="flex-1 h-1.5 bg-zinc-800 rounded-sm overflow-hidden">
            <AppAnimatedBar
              :percent="isInView ? yearAvg(year) : 0"
              :color-class="barColor(yearAvg(year))"
            />
          </div>

          <!-- Percent + badge -->
          <div class="flex items-center gap-3 shrink-0">
            <span :class="['font-mono text-sm font-medium', textColor(yearAvg(year))]">{{ yearAvg(year) }}%</span>
            <span :class="['hidden sm:inline font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-sm border', badgeClass(yearAvg(year))]">
              {{ statusLabel(yearAvg(year)) }}
            </span>
            <span class="font-mono text-[10px] text-zinc-600">{{ year.quarters.length }} qtrs · {{ year.quarters.flatMap(q => q.targets).length }} targets</span>
          </div>
        </button>

        <!-- Year explainer (visible when collapsed, below button) -->
        <div class="px-5 pb-4 pt-0 bg-surface border-t border-zinc-800/50">
          <p class="font-mono text-[11px] text-zinc-500 leading-relaxed pl-8">{{ year.explainer }}</p>
        </div>

        <!-- Quarter list (expandable) -->
        <Transition
          :css="false"
          @before-enter="onBeforeEnter"
          @enter="onEnter"
          @after-enter="onAfterEnter"
          @leave="onLeave"
        >
          <div
            v-if="expandedYears.has(year.year)"
            :id="`year-${year.year}`"
            class="border-t border-zinc-800/80"
          >
            <div class="flex flex-col divide-y divide-zinc-800/60">
              <div
                v-for="quarter in year.quarters"
                :key="quarter.id"
                class="bg-obsidian"
              >
                <!-- Quarter header -->
                <button
                  class="w-full flex items-center gap-4 px-5 py-3.5 pl-10 hover:bg-zinc-800/20 transition-colors text-left group"
                  :aria-expanded="expandedQuarters.has(quarter.id)"
                  :aria-controls="`quarter-${quarter.id}`"
                  @click="toggleQuarter(quarter.id)"
                >
                  <svg
                    aria-hidden="true"
                    :class="['w-3 h-3 text-zinc-600 transition-transform duration-200 shrink-0', expandedQuarters.has(quarter.id) ? 'rotate-90' : '']"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                  </svg>

                  <span class="font-mono text-xs text-zinc-300 w-20 shrink-0">{{ quarter.label }}</span>

                  <div class="flex-1 h-1 bg-zinc-800 rounded-sm overflow-hidden">
                    <AppAnimatedBar
                      :percent="quarterAvg(quarter)"
                      :color-class="barColor(quarterAvg(quarter))"
                    />
                  </div>

                  <div class="flex items-center gap-3 shrink-0">
                    <span :class="['font-mono text-xs', textColor(quarterAvg(quarter))]">{{ quarterAvg(quarter) }}%</span>
                    <span :class="['hidden md:inline font-mono text-[10px] uppercase tracking-widest px-1.5 py-0.5 rounded-sm border', badgeClass(quarterAvg(quarter))]">
                      {{ statusLabel(quarterAvg(quarter)) }}
                    </span>
                    <span class="font-mono text-[10px] text-zinc-600">{{ quarter.targets.length }} targets</span>
                  </div>
                </button>

                <!-- Quarter explainer -->
                <div class="px-5 pb-3 pt-0 pl-15">
                  <p class="font-mono text-[10px] text-zinc-600 leading-relaxed">{{ quarter.explainer }}</p>
                </div>

                <!-- Target rows -->
                <Transition
                  :css="false"
                  @before-enter="onBeforeEnter"
                  @enter="onEnter"
                  @after-enter="onAfterEnter"
                  @leave="onLeave"
                >
                  <div
                    v-if="expandedQuarters.has(quarter.id)"
                    :id="`quarter-${quarter.id}`"
                    class="border-t border-zinc-800/40"
                  >
                    <div class="flex flex-col divide-y divide-zinc-800/30">
                      <div
                        v-for="(target, ti) in quarter.targets"
                        :key="ti"
                        class="px-5 py-3 pl-15 flex flex-col gap-2"
                      >
                        <!-- Target row -->
                        <div class="flex items-center gap-3">
                          <span class="font-mono text-xs text-zinc-300 flex-1 min-w-0 truncate">{{ target.title }}</span>
                          <div class="w-28 md:w-40 h-1 bg-zinc-800 rounded-sm overflow-hidden shrink-0">
                            <AppAnimatedBar
                              :percent="target.percent"
                              :color-class="barColor(target.percent)"
                            />
                          </div>
                          <span :class="['font-mono text-xs font-medium w-8 text-right shrink-0', textColor(target.percent)]">{{ target.percent }}%</span>
                          <span :class="['hidden lg:inline font-mono text-[10px] uppercase tracking-widest px-1.5 py-0.5 rounded-sm border shrink-0 w-24 text-center', badgeClass(target.percent)]">
                            {{ statusLabel(target.percent) }}
                          </span>
                        </div>
                        <!-- Explainer + note -->
                        <div class="flex items-start gap-2">
                          <p class="font-mono text-[10px] text-zinc-600 leading-relaxed flex-1">{{ target.explainer }}</p>
                          <span v-if="target.note" class="font-mono text-[10px] text-zinc-700 italic shrink-0">// {{ target.note }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Transition>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>
