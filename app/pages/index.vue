<script setup lang="ts">
const SITE_URL = "https://onesmuswane.netlify.app";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

const title =
  "Onesmus Wane — Senior Full-Stack & Agentic AI Engineer · Nairobi, Kenya";
const description =
  "Full-Stack & Agentic AI Engineer in Nairobi, Kenya. Laravel · Vue 3 · Nuxt · LLM pipelines. Enterprise systems across healthcare, agritech, and automotive. Open to senior roles and contract architecture.";

useSeoMeta({
  // Core
  title,
  description,
  keywords:
    "Onesmus Wane, Senior Full-Stack Engineer Kenya, Laravel Developer Nairobi, Vue Developer Kenya, Nuxt Developer, Agentic AI Engineer, Full-Stack Developer Nairobi, Healthcare Software Kenya, Automotive Software Developer, Agritech IoT Developer, Enterprise Architecture Kenya, PHP Developer Kenya, React Developer, Laravel Vue Nuxt, AI Agent Developer",
  robots:
    "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",

  // Open Graph
  ogType: "website",
  ogUrl: SITE_URL,
  ogTitle: title,
  ogDescription: description,
  ogImage: OG_IMAGE,
  ogImageWidth: "1200",
  ogImageHeight: "630",
  ogImageAlt: "Onesmus Wane — Senior Full-Stack & Agentic AI Engineer",
  ogSiteName: "Onesmus Wane",
  ogLocale: "en_US",

  // Twitter / X
  twitterCard: "summary_large_image",
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: OG_IMAGE,
  twitterImageAlt: "Onesmus Wane — Senior Full-Stack & Agentic AI Engineer",
});

useHead({
  link: [{ rel: "canonical", href: SITE_URL }],
  script: [
    // Schema 1: Person
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: "Onesmus Wane",
        url: SITE_URL,
        image: OG_IMAGE,
        jobTitle: "Senior Full-Stack & Agentic AI Engineer",
        description:
          "Senior Full-Stack and Agentic AI Engineer specialising in enterprise infrastructure, intelligent agent systems, and real-time data pipelines across healthcare, agritech, and automotive sectors.",
        email: "onesmuswane@my1health.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Nairobi",
          addressRegion: "Nairobi County",
          addressCountry: "KE",
        },
        sameAs: [
          "https://github.com/OnesmusWane",
          "https://www.linkedin.com/in/onesmus-wane-9a19a61a0",
        ],
        knowsAbout: [
          "Laravel",
          "PHP",
          "MySQL",
          "PostgreSQL",
          "Redis",
          "Vue.js",
          "Nuxt.js",
          "React",
          "Tailwind CSS",
          "TypeScript",
          "JavaScript",
          "Python",
          "Node.js",
          "jQuery",
          "OpenAI",
          "Anthropic",
          "LangChain",
          "RAG Pipelines",
          "Agentic AI",
          "LLMs",
          "Vector Databases",
          "Docker",
          "Nginx",
          "GitHub Actions",
          "Linux",
          "Enterprise Architecture",
          "IoT Systems",
          "TimescaleDB",
          "MQTT",
          "Healthcare Software",
          "Insurance Management Systems",
          "Agritech",
        ],
        hasOccupation: {
          "@type": "Occupation",
          name: "Software Engineer",
          occupationLocation: {
            "@type": "City",
            name: "Nairobi",
          },
          skills:
            "Laravel, Vue.js, Nuxt.js, PHP, MySQL, Redis, Agentic AI, LLM Pipelines, IoT, Enterprise Architecture",
        },
        alumniOf: [],
        availableLanguage: [{ "@type": "Language", name: "English" }],
      }),
    },
    // Schema 2: WebSite
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Onesmus Wane — Portfolio Ledger",
        description:
          "Personal portfolio of Onesmus Wane, Senior Full-Stack & Agentic AI Engineer based in Nairobi, Kenya.",
        author: { "@id": `${SITE_URL}/#person` },
        inLanguage: "en-US",
        copyrightYear: 2026,
        copyrightHolder: { "@id": `${SITE_URL}/#person` },
      }),
    },
    // Schema 3: WebPage
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "@id": `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: title,
        description,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#person` },
        author: { "@id": `${SITE_URL}/#person` },
        dateModified: "2026-06-28",
        inLanguage: "en-US",
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: SITE_URL,
            },
          ],
        },
      }),
    },
  ],
});
</script>

<template>
  <div>
    <TheNav />
    <main>
      <TheHero />
      <TheNowStatus />
      <TheMetricTicker />
      <TheCaseStudies />
      <TheEngineeringLog />
      <TheQuarterlyTargets />
      <TheParallelSystems />
      <TheStackTerminal />
    </main>
    <TheFooter />
  </div>
</template>
