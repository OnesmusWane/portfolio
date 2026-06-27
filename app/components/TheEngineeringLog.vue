<script setup lang="ts">
import type { ADR } from '~/types/adr'

const adrs: ADR[] = [
  {
    id: 'ADR-042',
    fileName: 'ADR_042_REDIS_DUAL_ROLE.MD',
    title: 'Redis as Both Queue Backend and Primary Cache Driver',
    date: '2026.04.12',
    projectTag: '[MY1HEALTH_IMS]',
    readTime: '5 MIN',
    status: 'ACCEPTED',
    summary: {
      context: 'IMS processes three concurrent async workloads — insurance pre-auth dispatching, hospital referral notifications, and patient document ingestion — all synchronously, causing API gateway timeouts under peak East African morning load.',
      decision: 'Deploy Redis as both the Laravel Horizon queue backend and the primary cache driver, replacing the database cache driver and eliminating sync processing entirely.',
      tradeoff: 'Redis adds a stateful dependency and single-point-of-failure risk (mitigated with Sentinel), but the 10× throughput gain and sub-millisecond cache reads outweigh the operational overhead for the team size.',
    },
    sections: [
      {
        title: 'Context',
        body: 'My 1Health IMS handles three distinct async-worthy workloads running synchronously in the request cycle:\n\n1. Insurance pre-authorisation dispatch — submitting structured requests to 100+ TPA endpoints with varying SLA response times (2 min to 48 hrs)\n2. Hospital referral notifications — sending structured referral packets and awaiting acknowledgement confirmations\n3. Patient document ingestion — processing uploaded PDFs, X-rays, and lab reports through a pipeline of validation, OCR extraction, and record linkage\n\nDuring peak hours (08:00–11:00 EAT), simultaneous document uploads and referral dispatches were blocking PHP-FPM workers. The shared nginx pool would exhaust available workers within 3–4 minutes of peak onset, causing 504 timeouts visible to case officers. Compounding this, the application cache was running on the database driver — meaning cache reads were issuing SQL queries, adding latency to every authenticated request.',
      },
      {
        title: 'Decision',
        body: 'Redis deployed in dual role:\n\nQUEUE BACKEND (via Laravel Horizon):\n- 3 dedicated Horizon worker processes for document ingestion (CPU-bound)\n- 2 workers for referral dispatch (I/O-bound, high concurrency)\n- 2 workers for insurance pre-auth (rate-limited per TPA)\n- Priority queues: critical → standard → batch\n- Dead-letter queue with Slack alert on failure spike\n- Auto-scaling supervisor: 2–10 workers based on queue depth\n\nCACHE DRIVER:\n- All authenticated session data\n- Hospital and TPA configuration profiles (60-min TTL)\n- Exchange rate snapshots for multi-currency billing (15-min TTL)\n- Permission/role resolution cache (invalidated on role change event)',
      },
      {
        title: 'Consequences',
        body: 'Positive:\n- API timeout rate dropped from 12% at peak to <0.3% within one week of deployment\n- Cache read latency: 320ms avg (DB driver) → 1.8ms avg (Redis)\n- Horizon dashboard gives real-time visibility into job throughput, worker health, and failure rates — previously invisible in sync processing\n- Idempotent job design, enforced by code review, eliminated the duplicate-dispatch bug class entirely\n\nNegative:\n- Redis is now a hard infrastructure dependency — its failure takes down both queues and cache simultaneously. Mitigated with Redis Sentinel (1 primary, 2 replicas) and a circuit breaker that falls back to DB cache on Redis unavailability\n- Eventual consistency is now a first-class design constraint. All jobs carry idempotency keys. Consumers are written to be re-runnable without side effects.',
      },
    ],
  },
  {
    id: 'ADR-055',
    fileName: 'ADR_055_MODULAR_MONOLITH.MD',
    title: 'Modular Monolith over Microservices for IMS',
    date: '2026.01.08',
    projectTag: '[MY1HEALTH_IMS]',
    readTime: '6 MIN',
    status: 'ACCEPTED',
    summary: {
      context: 'Architecture planning for IMS surfaced a microservices vs monolith debate — five distinct domains (Patients, Referrals, Insurance, Rewards, Reports) each with independent scaling needs, but a 3-person engineering team.',
      decision: 'Modular monolith: a single Laravel application with strict domain module boundaries — own routes, services, models, and events per domain — communicating via Laravel events and service contracts, never direct cross-module model imports.',
      tradeoff: 'Sacrifices independent deployability per domain, but eliminates distributed system complexity (network calls, distributed tracing, service discovery) that would consume the team\'s entire operational capacity.',
    },
    sections: [
      {
        title: 'Context',
        body: 'IMS serves five clearly bounded domains:\n- Patient Management (intake, KYC, profile, history)\n- Referral Engine (hospital matching, dispatch, tracking)\n- Insurance & TPA (pre-auth, billing, reconciliation)\n- Rewards & Loyalty (points, redemption, tier management)\n- Reporting & Analytics (case officer dashboards, executive views)\n\nThe temptation to split these into microservices was real — each domain has different scaling characteristics and different change velocity. Insurance integration changes rarely; Referral Engine changes weekly. However, the engineering team is 3 developers. The overhead of maintaining 5+ separately deployed services on cloud infrastructure without a dedicated DevOps function was evaluated against a well-structured monolith.',
      },
      {
        title: 'Decision',
        body: 'Modular monolith with enforced domain boundaries inside a single Laravel 11 application:\n\nStructure: app/Modules/{Domain}/{Controllers,Services,Models,Events,Jobs,Requests}\n\nEnforced constraints:\n- No model from Domain A is directly imported into Domain B\n- Cross-domain data flow uses Laravel Events (fired by the originating domain, listened by dependents) or explicit Service Contracts (interfaces in a shared Contracts layer)\n- Each module has its own database migration directory and seeds\n- PHPStan at level 8 enforces type boundaries; a custom architectural rule (php-arkitect) fails CI if cross-module model imports are detected\n\nThis gives extraction paths: when a domain is ready to break out as a service, its boundary is already clean.',
      },
      {
        title: 'Consequences',
        body: 'Positive:\n- Single deployment target — one Dockerfile, one CI pipeline, one monitoring dashboard\n- Transactional integrity across domain boundaries where needed (a referral creation and its audit log in one DB transaction, not two distributed writes)\n- Onboarding friction eliminated — new developer runs one environment, not five\n- Domain boundaries enforced by CI catch architectural drift immediately\n\nNegative:\n- Cannot scale the Insurance domain independently without scaling the whole application. Currently acceptable — the Insurance module processes ~200 requests/hour, well within single-instance capacity\n- Shared deployment means a crash in Reporting (rare but happened during a bad aggregation query) takes down all domains. Resolved by moving all long-running report generation to background jobs\n\nStatus: Will revisit when Insurance integration volume crosses 5,000 pre-auth/day.',
      },
    ],
  },
  {
    id: 'ADR-038',
    fileName: 'ADR_038_RBAC_SPATIE.MD',
    title: 'RBAC Architecture: Spatie/Permission + Policy Layer',
    date: '2025.10.15',
    projectTag: '[MY1HEALTH_IMS]',
    readTime: '5 MIN',
    status: 'ACCEPTED',
    summary: {
      context: 'IMS has 6 user types with non-overlapping permission sets. Hand-rolled middleware guards accumulated inconsistencies across 3 sprints, with a staging incident where a Finance team member could view unassigned patient records.',
      decision: 'Adopt Spatie Laravel-Permission for role/permission storage, layered with Laravel Policies for object-level authorization. A custom PermissionRegistry class centralises all permission string constants.',
      tradeoff: 'Spatie adds a package dependency and extra tables. The PermissionRegistry pattern adds ceremony, but eliminates the typo-driven permission bug class that caused the staging incident.',
    },
    sections: [
      {
        title: 'Context',
        body: 'IMS serves 6 distinct user types with non-overlapping access requirements:\n\n- Super Admin: full system access\n- Case Officer: own assigned patient cases, referral dispatch, document upload\n- Hospital Partner Admin: their hospital\'s inbound referrals only\n- TPA / Insurance Analyst: their TPA\'s pre-auth queue and billing records\n- Finance Team: billing data, settlement records, no patient clinical data\n- Read-Only Auditor: full read, no write, no PII fields\n\nThe early implementation used Laravel middleware with hardcoded role name checks ($user->hasRole(\'case_officer\')). Across 3 sprints, inconsistencies accumulated — one route checked for \'CaseOfficer\', another for \'case_officer\'. A staging incident confirmed that a Finance user could retrieve patient records via a route that had the wrong guard. This was a data integrity risk in a HIPAA-adjacent context.',
      },
      {
        title: 'Decision',
        body: 'Two-layer access control:\n\nLAYER 1 — Spatie Laravel-Permission:\n- All roles and permissions stored in spatie_roles / spatie_permissions tables\n- Permissions follow a verb-resource-scope pattern: patients.view.assigned, referrals.dispatch, billing.view.all\n- Permissions are cached via Redis (flushed on role/permission change)\n- Roles assigned at registration; adjustable by Super Admin only\n\nLAYER 2 — Laravel Policies (object-level):\n- PatientPolicy: canView(), canEditRecord(), canExportData()\n- ReferralPolicy: canDispatch(), canViewStatus()\n- Object-level checks verify ownership/assignment, not just role membership\n- Policies are unit-tested in isolation from HTTP layer\n\nPERMISSION REGISTRY:\n- A single PermissionRegistry::class holds all permission string constants\n- Every gate check, policy call, and Spatie assignment references the registry — no raw strings anywhere in application code\n- Custom PHPStan rule fails build on raw permission strings outside the registry',
      },
      {
        title: 'Consequences',
        body: 'Positive:\n- Permission typo bug class eliminated entirely — the staging incident type cannot recur\n- Policies enable granular object-level tests: "Case Officer A cannot see Case Officer B\'s patient" is a 5-line PHPUnit test\n- Redis-cached permissions: gate check latency 3ms → 0.4ms\n- Auditor role added in 20 minutes — define permissions in registry, assign Spatie role, done\n\nNegative:\n- Spatie adds 4 extra tables and its own cache key namespace. Non-trivial to remove if we change strategy\n- The PermissionRegistry adds a mandatory extra step for any new permission — intentionally so. New team members occasionally forget this and CI catches it',
      },
    ],
  },
  {
    id: 'ADR-029',
    fileName: 'ADR_029_MYSQL_OVER_POSTGRES.MD',
    title: 'MySQL 8.0 over PostgreSQL for All Production Platforms',
    date: '2025.06.10',
    projectTag: '[MULTI_PLATFORM]',
    readTime: '4 MIN',
    status: 'ACCEPTED',
    summary: {
      context: 'Every new project needed a relational DB. PostgreSQL offered technically superior features (JSONB, RLS, pgvector, LISTEN/NOTIFY) but Kenyan managed hosting providers — Safaricom Dev Cloud, Cloudoon, cPanel VPS — offer MySQL 8.0 as the only fully managed option.',
      decision: 'MySQL 8.0 for IMS, Premax, and Tej Printbrands. PostgreSQL is reserved solely for the Farm Ecosystem Platform where TimescaleDB is a hard requirement for IoT time-series data.',
      tradeoff: 'Miss advanced PostgreSQL features but gain fully managed DB hosting, automatic backups, and zero DBA overhead on lean teams.',
    },
    sections: [
      {
        title: 'Context',
        body: 'Three separate projects — IMS, Premax Autocare, and Tej Printbrands — all needed a production relational database in 2025. The evaluation was between:\n\nMySQL 8.0:\n- Available as a fully managed service from every Kenyan hosting provider we use\n- Excellent Laravel Eloquent integration (migrations, factories, JSON columns)\n- Team has 5+ years of production MySQL operations experience\n- Automatic backups, point-in-time recovery managed by provider\n\nPostgreSQL 16:\n- Technically superior: JSONB with GIN indexing, Row-Level Security, LISTEN/NOTIFY, pgvector extension\n- No managed offering from Safaricom Dev Cloud or Cloudoon without self-managed EC2-equivalent\n- Self-managed Postgres means the team owns backups, WAL archiving, vacuum tuning, and upgrades\n- With a 2–3 person engineering team across all projects, this is unsustainable',
      },
      {
        title: 'Decision',
        body: 'MySQL 8.0 for all production relational data on IMS, Premax, and Tej Printbrands. The following MySQL 8.0 features cover the use cases that would otherwise pull us to Postgres:\n\n- Native JSON columns with JSON_EXTRACT and generated virtual columns for indexing (replaces simple JSONB)\n- MySQL roles for application user privilege scoping (replaces need for RLS in current access patterns)\n- Window functions (ROW_NUMBER, RANK, LAG) for reporting queries\n- Full-text search (replaces simple Postgres tsvector use cases)\n\nPostgreSQL exception: Farm Ecosystem Platform uses PostgreSQL + TimescaleDB for IoT sensor telemetry. This is the only system where time-series range queries and hypertable partitioning justify the self-managed overhead.',
      },
      {
        title: 'Consequences',
        body: 'Positive:\n- Zero DBA overhead on three production systems — provider handles backups, failover, patching\n- Consistent toolchain across IMS, Premax, and Tej — knowledge transfers directly\n- Laravel migration compatibility: no Postgres-specific migration syntax to guard against\n\nNegative:\n- No pgvector — if we add semantic search to IMS (e.g., case similarity matching), we\'ll need an external vector store (Pinecone or a dedicated Postgres instance)\n- No native RLS — data isolation is enforced at the Eloquent/Policy layer. Higher application-layer discipline required\n- MySQL JSON column indexing is less capable than Postgres JSONB + GIN. Accepted for current query patterns; flagged for review if JSON query complexity increases\n\nReview trigger: if any MySQL platform crosses 10M rows in JSON-heavy tables, re-evaluate Postgres migration.',
      },
    ],
  },
  {
    id: 'ADR-051',
    fileName: 'ADR_051_TIMESCALEDB_IOT.MD',
    title: 'TimescaleDB over InfluxDB for Farm IoT Telemetry',
    date: '2026.05.20',
    projectTag: '[FARM_ECOSYSTEM]',
    readTime: '7 MIN',
    status: 'PROPOSED',
    summary: {
      context: '24 hive weight sensors, soil moisture probes across 4 acres, and climate sensors in poultry/rabbitry units emit readings every 15 minutes — ~3,000 data points/day scaling to 1M+ records/year. Standard MySQL timestamp-indexed tables became too slow for week-over-week trend queries within 3 months of prototyping.',
      decision: 'TimescaleDB on PostgreSQL for all sensor telemetry, keeping MySQL for the operational farm management data. Hypertables partition automatically by time and stay queryable with standard SQL.',
      tradeoff: 'Self-managed PostgreSQL instance (no managed TimescaleDB in Kenya) vs InfluxDB\'s managed cloud — but TimescaleDB keeps the team on familiar SQL and avoids learning Flux as a second query language.',
    },
    sections: [
      {
        title: 'Context',
        body: 'Farm sensor network as of mid-2026:\n- 24 hive weight sensors (Apimonitor-compatible, MQTT protocol) — tracking honey accumulation curves and swarm detection via sudden weight drops\n- 12 soil moisture probes across 4 acres (capacitive sensors on Raspberry Pi GPIO)\n- 6 climate sensors in poultry and rabbitry units (temperature, humidity, CO2)\n- Drip irrigation pressure monitors (4 zones)\n\nReading interval: every 15 minutes per sensor. Total: ~3,000 readings/day → ~1.1M/year.\n\nPrototype data was stored in a MySQL sensor_readings table with a composite index on (sensor_id, recorded_at). By month 3 of prototype data, the query "show me hive 14\'s weight trend over the last 8 weeks" took 4.2 seconds — unacceptable for the real-time farm dashboard. The AI agent also needs to run rolling-window aggregations (7-day averages, anomaly detection on 30-day baselines) at query time.',
      },
      {
        title: 'Decision',
        body: 'Hybrid storage architecture:\n\nTIMESCALEDB (PostgreSQL + extension) for telemetry:\n- sensor_readings hypertable, partitioned by recorded_at (weekly chunks)\n- Continuous aggregates: pre-computed 1-hour and 1-day rollups materialised automatically\n- Data retention policy: raw 15-min data kept for 90 days, 1-hour aggregates for 2 years, 1-day aggregates indefinitely\n- TimescaleDB compression on chunks older than 14 days (87% storage reduction on test data)\n\nMYSQL for operational data:\n- Farm entities: hives, plots, flocks, sensors (registration + metadata)\n- Production logs: harvest records, mortality events, feed purchases\n- Marketplace: orders, inventory, customer data\n\nBOTH exposed via the same Laravel API — the Farm module uses two DB connections (farm_ops: MySQL, farm_telemetry: PostgreSQL).',
      },
      {
        title: 'Consequences',
        body: 'Positive:\n- 8-week trend query on hive weight: 4.2s (MySQL) → 180ms (TimescaleDB with continuous aggregate)\n- Continuous aggregates are automatically maintained by TimescaleDB — no cron job to manage\n- Standard SQL throughout — the AI agent\'s analytic queries are plain SQL window functions, not Flux or PromQL\n- Compression cuts storage cost significantly for historical data\n\nNegative:\n- Self-managed PostgreSQL + TimescaleDB instance — team owns backup, vacuum, and upgrade cycles. Mitigated with pg_dump cron to S3 and pgBackRest for WAL archiving\n- Two DB connections in the Laravel application adds configuration complexity and requires careful transaction boundary design (cross-DB transactions are not atomic)\n- TimescaleDB\'s continuous aggregate refresh can lag under burst ingestion — acceptable for 15-minute sensor intervals, not for sub-minute real-time use cases\n\nStatus: Architecture validated on 3-month prototype dataset. Full deployment pending IoT hardware procurement.',
      },
    ],
  },
  {
    id: 'ADR-033',
    fileName: 'ADR_033_SSR_SPA_SPLIT.MD',
    title: 'Nuxt 3 SSR for Public Sites + Vue 3 SPA for Admin Panels',
    date: '2025.09.03',
    projectTag: '[PREMAX / TEJ_PRINTBRANDS]',
    readTime: '4 MIN',
    status: 'ACCEPTED',
    summary: {
      context: 'Premax and Tej Printbrands each serve two distinct audiences: public visitors needing SEO-optimised pages, and internal admin users managing bookings, inventory, and content. Building one unified app would force either SSR overhead on the admin or SEO-killing SPA rendering on the public site.',
      decision: 'Two separate deployments per project: Nuxt 3 SSR for the public website, standalone Vue 3 SPA for the admin panel. Both consume the same Laravel API backend via Sanctum token authentication.',
      tradeoff: 'Two frontend codebases per project to maintain, but Premax now ranks organically for "luxury car service Nairobi" and "ceramic coating Nairobi" — traffic that an SPA would not have captured.',
    },
    sections: [
      {
        title: 'Context',
        body: 'Both Premax and Tej Printbrands have two fundamentally different frontend audiences:\n\nPUBLIC SITE users:\n- Potential customers landing from Google Search\n- Need: fast First Contentful Paint (FCP), server-rendered meta tags for SEO, structured data for Google rich results\n- Critical pages: Service listings, portfolio/gallery, booking form, pricing\n- These pages change infrequently (content admin updates them weekly)\n\nADMIN PANEL users:\n- Workshop managers (Premax) and studio staff (Tej)\n- Need: rich interactive UI — booking calendars, drag-and-drop content editors, real-time job status boards\n- Never indexed by search engines\n- Heavy client-side state: active job queues, live inventory counts, multi-step forms\n\nBuilding this as one Nuxt SSR app would mean SSR rendering overhead on admin routes that have zero SEO value. Building it as one Vue SPA means the public-facing service pages are not crawlable — Google\'s client-side rendering support is inconsistent enough that we cannot rely on it for business-critical organic traffic.',
      },
      {
        title: 'Decision',
        body: 'Two deployments per project sharing one Laravel API:\n\nPUBLIC SITE (Nuxt 3, SSR):\n- Full SSR for service pages, portfolio, and booking flow\n- useSeoMeta + JSON-LD structured data per page type\n- Nuxt Image for automatic WebP conversion and lazy loading\n- Aggressive Nginx caching: service pages cached 5 minutes, portfolio 30 minutes (purged on admin content update via Laravel webhook)\n- Core Web Vitals target: LCP < 2.5s, CLS < 0.1\n\nADMIN PANEL (Vue 3 SPA):\n- Static build served from the same server, /admin path, separate nginx location block\n- Vuetify 3 component library for rapid admin UI development\n- Pinia for complex client state (job queues, notification feeds)\n- Laravel Sanctum SPA tokens — auth cookie scoped to same domain\n- Role-based route guards at the Vue Router level (mirrored from backend policies)',
      },
      {
        title: 'Consequences',
        body: 'Positive:\n- Premax ranks on page 1 for "luxury car detailing Nairobi" and "ceramic coating Kiambu Road" — directly attributable to SSR + structured data. Organic bookings increased 40% in 3 months post-launch\n- Admin panel deploy is independent of public site — a broken admin build never affects public traffic\n- Admin Vuetify components are significantly richer than what we could build from scratch in the same timeline\n\nNegative:\n- Two frontend codebases per project: ~30% of UI components (buttons, form elements, data tables) are duplicated across admin and public apps. A shared component library is the next architectural priority\n- Deployment pipeline is more complex: two build steps, two nginx config blocks, one API. Managed with separate CI/CD jobs that deploy in parallel\n- Sanctum SPA token scoping requires careful cookie domain configuration — caused a 2-hour debugging session on the Tej staging environment when subdomain config was wrong',
      },
    ],
  },
  {
    id: 'ADR-047',
    fileName: 'ADR_047_WEBHOOK_VS_POLLING.MD',
    title: 'Insurance Pre-Auth: Webhook Push over Polling',
    date: '2026.02.28',
    projectTag: '[MY1HEALTH_IMS]',
    readTime: '5 MIN',
    status: 'ACCEPTED',
    summary: {
      context: 'TPA pre-authorisation response times range from 2 minutes to 48 hours. Cron-based polling (every 5 min, all 100+ TPA integrations) generated thousands of no-change API calls daily and triggered rate-limit warnings from 3 TPAs within 6 weeks of launch.',
      decision: 'Webhook-first architecture: TPAs push status updates to a signed IMS endpoint. A Redis-queued polling fallback at 30-minute intervals covers legacy TPAs without webhook support.',
      tradeoff: 'Exposes a public webhook endpoint requiring per-TPA HMAC signature verification, and maintains dual-path complexity for legacy integrations — but cuts outbound API calls by 85% and eliminates rate-limit risk.',
    },
    sections: [
      {
        title: 'Context',
        body: 'When a case officer submits a pre-authorisation request to an insurance TPA on behalf of a patient, the TPA\'s review process is asynchronous — responses arrive anywhere from 2 minutes to 48 hours depending on the TPA, coverage type, and treatment complexity.\n\nThe original IMS implementation used a Laravel scheduled command that ran every 5 minutes, looping through all open pre-auth requests and calling each TPA\'s status endpoint. Within 6 weeks of production launch:\n\n- 3 TPAs sent rate-limiting warnings (429 responses began appearing)\n- One TPA (Aetna integration) threatened to revoke API access citing "polling abuse"\n- Daily outbound call volume: ~14,400 calls (100 TPAs × 12 polls/hour × 12 hours active)\n- Status-changed calls: ~120/day — meaning 99.2% of calls returned no useful information\n\nThis was clearly unsustainable.',
      },
      {
        title: 'Decision',
        body: 'WEBHOOK-FIRST:\n- IMS exposes a single pre-auth status webhook endpoint: POST /api/webhooks/preauth/{tpa_code}\n- Each TPA integration is configured with its specific HMAC signing secret during onboarding\n- Incoming webhooks are verified (HMAC-SHA256 signature on raw payload + timestamp replay-attack window of 5 minutes)\n- Verified payloads are pushed to a dedicated Redis webhook queue and processed by a single Horizon worker\n- Processing: update pre-auth status → fire PreAuthStatusChanged event → notify assigned case officer via in-app notification + email\n\nPOLLING FALLBACK (legacy TPAs only):\n- 18 of 100+ TPA integrations do not support webhooks\n- These are polled via a rate-limited queue job at 30-minute intervals per TPA (not per request)\n- Job throttles to 1 outbound call per TPA per 30 min regardless of open pre-auth count\n- Fallback clearly flagged in TPA configuration: webhook_capable: false',
      },
      {
        title: 'Consequences',
        body: 'Positive:\n- Outbound API calls: 14,400/day → 2,160/day (fallback polling only) = 85% reduction\n- Zero rate-limit incidents since migration (3 months)\n- Pre-auth status update latency: was up to 5 minutes lag (polling interval), now near-real-time for webhook-capable TPAs\n- Case officers see live status changes in the dashboard without page refresh (WebSocket broadcast on PreAuthStatusChanged event)\n\nNegative:\n- Public webhook endpoint is now an attack surface. HMAC verification is strong, but we also added IP allowlisting for TPAs that publish their IP ranges\n- Replay attack window (5 minutes) was contentious — some TPAs have clock drift > 2 minutes. Had to extend to 5 min and accept a slightly larger replay window\n- Dual-path (webhook + polling) means the same PreAuthStatusChanged event can fire from two different code paths — required careful deduplication using a processed_at idempotency check on the pre-auth record before status update',
      },
    ],
  },
]

const selectedAdr = ref<ADR | null>(null)
const featuredAdr = adrs[0]
const listAdrs = adrs.slice(1)

function statusClass(status: ADR['status']) {
  return {
    ACCEPTED: 'border-emerald-500/20 text-emerald-500/80',
    PROPOSED: 'border-blue-500/20 text-blue-500/80',
    SUPERSEDED: 'border-zinc-800 text-zinc-500',
  }[status]
}
</script>

<template>
  <section
    id="log"
    aria-labelledby="log-heading"
    class="max-w-6xl mx-auto px-4 md:px-8 py-24 border-t border-zinc-800/80"
  >
    <div class="flex items-baseline gap-4 mb-12">
      <span class="font-mono text-xs text-zinc-500 uppercase tracking-widest">// ENGINEERING_LOG</span>
      <h2 id="log-heading" class="text-2xl font-semibold tracking-tight text-zinc-100">
        Architecture Decisions
      </h2>
      <span aria-hidden="true" class="font-mono text-xs text-zinc-600">
        {{ adrs.length < 10 ? `0${adrs.length}` : adrs.length }}
      </span>
    </div>

    <div class="flex flex-col gap-6">
      <!-- Featured entry -->
      <article
        class="w-full border border-zinc-800/80 bg-surface rounded-sm overflow-hidden group cursor-pointer hover:border-blue-500/50 transition-colors"
        :aria-label="`Architecture Decision Record: ${featuredAdr.title}`"
        @click="selectedAdr = featuredAdr"
      >
        <!-- Terminal header -->
        <div class="h-10 border-b border-zinc-800/80 bg-[#0A0A0C] flex items-center px-4 justify-between" aria-hidden="true">
          <div class="flex gap-2">
            <div class="w-2.5 h-2.5 rounded-full bg-zinc-700" />
            <div class="w-2.5 h-2.5 rounded-full bg-zinc-700" />
            <div class="w-2.5 h-2.5 rounded-full bg-zinc-700" />
          </div>
          <div class="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">{{ featuredAdr.fileName }}</div>
          <div class="w-10" />
        </div>

        <div class="p-6 md:p-8 flex flex-col gap-8">
          <div>
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-xl font-semibold text-zinc-100 group-hover:text-blue-400 transition-colors">
                {{ featuredAdr.title }}
              </h3>
              <svg aria-hidden="true" class="w-5 h-5 text-zinc-600 group-hover:text-blue-500 transition-colors opacity-0 group-hover:opacity-100 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </div>
            <div class="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase text-zinc-500 tracking-widest">
              <span class="text-zinc-400">{{ featuredAdr.id }}</span>
              <span class="text-zinc-700">·</span>
              <span>{{ featuredAdr.date }}</span>
              <span class="text-zinc-700">·</span>
              <span class="text-blue-500">{{ featuredAdr.projectTag }}</span>
              <span class="text-zinc-700">·</span>
              <span>READ_TIME: {{ featuredAdr.readTime }}</span>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 border-y border-zinc-800/50 py-6">
            <div class="flex flex-col gap-2">
              <span class="font-mono text-[10px] uppercase text-zinc-500 tracking-widest">CONTEXT</span>
              <p class="text-sm text-zinc-400 leading-relaxed">{{ featuredAdr.summary.context }}</p>
            </div>
            <div class="flex flex-col gap-2">
              <span class="font-mono text-[10px] uppercase text-zinc-500 tracking-widest">DECISION</span>
              <p class="text-sm text-zinc-400 leading-relaxed">{{ featuredAdr.summary.decision }}</p>
            </div>
            <div class="flex flex-col gap-2">
              <span class="font-mono text-[10px] uppercase text-zinc-500 tracking-widest">TRADEOFF</span>
              <p class="text-sm text-zinc-400 leading-relaxed">{{ featuredAdr.summary.tradeoff }}</p>
            </div>
          </div>

          <div>
            <span class="inline-flex items-center gap-2 font-mono text-xs text-blue-500 group-hover:text-blue-400 transition-colors">
              View full writeup
              <svg aria-hidden="true" class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </span>
          </div>
        </div>
      </article>

      <!-- Compact list -->
      <div class="flex flex-col gap-3" role="list">
        <article
          v-for="adr in listAdrs"
          :key="adr.id"
          role="listitem"
          class="w-full border border-zinc-800/80 bg-surface rounded-sm p-4 md:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer group hover:border-blue-500/50 hover:-translate-y-0.5 transition-all"
          :aria-label="`Architecture Decision Record: ${adr.title}`"
          @click="selectedAdr = adr"
        >
          <div class="flex flex-col gap-2 flex-1 min-w-0">
            <div class="flex items-center gap-3">
              <span class="font-mono text-[10px] text-zinc-500 shrink-0">{{ adr.id }}</span>
              <h4 class="text-sm md:text-base font-medium text-zinc-200 group-hover:text-blue-400 transition-colors truncate">
                {{ adr.title }}
              </h4>
            </div>
            <div class="flex items-center gap-3 font-mono text-[10px] uppercase text-zinc-500 tracking-widest truncate">
              <span>{{ adr.date }}</span>
              <span class="text-zinc-700">·</span>
              <span class="text-blue-500">{{ adr.projectTag }}</span>
              <span class="text-zinc-700 hidden sm:inline">·</span>
              <span class="hidden sm:inline truncate">CTX: {{ adr.summary.context }}</span>
            </div>
          </div>

          <div class="shrink-0 flex items-center gap-4">
            <span :class="['font-mono text-[10px] uppercase tracking-widest px-2 py-1 rounded-sm border', statusClass(adr.status)]">
              {{ adr.status }}
            </span>
            <svg aria-hidden="true" class="w-4 h-4 text-zinc-600 group-hover:text-blue-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </div>
        </article>
      </div>
    </div>

    <TheADRModal :adr="selectedAdr" @close="selectedAdr = null" />
  </section>
</template>
