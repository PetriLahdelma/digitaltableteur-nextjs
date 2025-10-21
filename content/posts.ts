import type { SupportedLocale } from "@/app/i18n";

export type BlogSection = {
  heading: string;
  body: string[];
};

export type BlogPostLocaleContent = {
  title: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  sections: BlogSection[];
};

export type BlogPost = {
  slug: string;
  published: string;
  updated?: string;
  readingMinutes: number;
  tags: string[];
  heroImage: string;
  heroAlt: Record<SupportedLocale, string>;
  locale: Record<SupportedLocale, BlogPostLocaleContent>;
};

const locales: SupportedLocale[] = ["en", "fi", "sv"];

function replicate(content: BlogPostLocaleContent) {
  return locales.reduce<Record<SupportedLocale, BlogPostLocaleContent>>(
    (acc, locale) => {
      acc[locale] = { ...content };
      return acc;
    },
    {} as Record<SupportedLocale, BlogPostLocaleContent>
  );
}

const designing2025: BlogPost = {
  slug: "designing-in-2025",
  published: "2025-01-12",
  readingMinutes: 7,
  tags: ["Process", "Design Ops"],
  heroImage: "/globe.svg",
  heroAlt: {
    en: "Abstract globe and interface panels representing modern design systems.",
    fi: "Abstrakti maapallo ja käyttöliittymäpaneelit, jotka kuvaavat moderneja design-systeemejä.",
    sv: "Abstrakt jordglob och gränssnittspaneler som representerar moderna designsystem.",
  },
  locale: replicate({
    title: "Designing in 2025",
    summary:
      "Five shifts influencing how we scope, prototype, and measure digital experiences this year.",
    metaTitle: "Designing in 2025 | Digitaltableteur",
    metaDescription:
      "Petri Lähdelmä breaks down the trends reshaping product design in 2025, from adaptive systems to multilingual content ops.",
    sections: [
      {
        heading: "Why 2025 feels different",
        body: [
          "Design leaders are balancing AI-assisted tooling with an appetite for more opinionated craft. Teams want systems that accelerate work without flattening brand expression.",
          "At Digitaltableteur we map every engagement against three lenses: localisation readiness, velocity insights, and sense-making. These guide which experiments deserve real budget.",
        ],
      },
      {
        heading: "Signals we're acting on",
        body: [
          "Component libraries now extend into motion and microcopy. Maintaining them demands an editorial mindset as much as a technical one.",
          "Multilingual publishing is table stakes. We're investing in content models that store localisation metadata right alongside design tokens.",
          "Telemetry from live products loops back into design through qualitative dashboards, not just funnel charts.",
        ],
      },
      {
        heading: "How to respond",
        body: [
          "Audit your current system for the friction designers face when moving from concept to production. Remove orphaned components and document intent, not just usage.",
          "Embed localisation early. Even a simple language toggle prototype will expose assumptions in tone, layout, and legal copy.",
          "Pair analytics with narrative. We host monthly critique sessions where performance data shares the stage with lived customer stories.",
        ],
      },
    ],
  }),
};

const workflowTips: BlogPost = {
  slug: "workflow-tips",
  published: "2024-11-02",
  readingMinutes: 6,
  tags: ["Process", "Tooling"],
  heroImage: "/window.svg",
  heroAlt: {
    en: "Window illustration symbolising focused creative work.",
    fi: "Ikkunakuva, joka symboloi keskittynyttä luovaa työtä.",
    sv: "Fönsterillustration som symboliserar fokuserat kreativt arbete.",
  },
  locale: replicate({
    title: "Workflow Tips for Independent Studios",
    summary:
      "Seven habits we use to keep projects aligned while moving fast across strategy, design, and code.",
    metaTitle: "Workflow Tips | Digitaltableteur",
    metaDescription:
      "Learn the rituals that help Digitaltableteur deliver multilingual, craft-driven projects without adding overhead.",
    sections: [
      {
        heading: "Set a weekly narrative",
        body: [
          "Every Monday we write a one-page narrative that links project goals to concrete deliverables. It keeps strategy present without bloating task boards.",
        ],
      },
      {
        heading: "Prototype in the source repo",
        body: [
          "Storybook and Vite sandboxes live alongside production code. It shortens handoff and encourages designers to test real data flows early.",
        ],
      },
      {
        heading: "Translate as you iterate",
        body: [
          "We treat localisation as a design dimension. Strings sit in JSON resources from day one, so copywriters and translators collaborate asynchronously.",
        ],
      },
    ],
  }),
};

const digitalCraftsmanship: BlogPost = {
  slug: "digital-craftsmanship",
  published: "2024-08-18",
  readingMinutes: 8,
  tags: ["Craft", "Opinion"],
  heroImage: "/window.svg",
  heroAlt: {
    en: "Abstract craftsmanship icon representing refined details.",
    fi: "Abstrakti käsityön ikoni, joka kuvaa viimeisteltyä laatua.",
    sv: "Abstrakt hantverksikon som visar förfinade detaljer.",
  },
  locale: replicate({
    title: "Digital Craftsmanship",
    summary:
      "What craftsmanship means when your output is a living service instead of a static artefact.",
    metaTitle: "Digital Craftsmanship | Digitaltableteur",
    metaDescription:
      "A reflection on balancing craft and velocity across strategy, design, and engineering engagements.",
    sections: [
      {
        heading: "Craft is a process, not a polish layer",
        body: [
          "Craft shows up in how we research, how we set constraints, and how we follow through on accessibility—not just in visual flourishes.",
          "Clients feel craftsmanship when feedback loops are respectful and decisive. Documentation, naming, and testing are part of the craft stack.",
        ],
      },
      {
        heading: "Guardrails that help",
        body: [
          "Shared design tokens prevent entropy and make it easier to focus on meaningful differentiation.",
          "Checklists for accessibility and localisation keep teams honest about inclusivity goals.",
        ],
      },
    ],
  }),
};

const thoughtsBranding: BlogPost = {
  slug: "thoughts-on-future-branding",
  published: "2024-05-22",
  readingMinutes: 9,
  tags: ["Branding", "Future"],
  heroImage: "/globe.svg",
  heroAlt: {
    en: "Forward-looking branding illustration with gradients and arrows.",
    fi: "Tulevaisuuteen katsova brändi-illustratio gradientteineen ja nuolineen.",
    sv: "Framtidsinriktad varumärkesillustration med gradienter och pilar.",
  },
  locale: replicate({
    title: "Thoughts on Future Branding",
    summary:
      "Signals from emerging markets, AI tooling, and multilingual audiences that will define branding over the next few years.",
    metaTitle: "Future Branding | Digitaltableteur",
    metaDescription:
      "Exploring how global audiences and adaptive systems influence branding strategies.",
    sections: [
      {
        heading: "From assets to ecosystems",
        body: [
          "Brands are treating design systems as living ecosystems that evolve with community input.",
        ],
      },
      {
        heading: "Intelligence with taste",
        body: [
          "AI-generated assets require a strong editorial voice—otherwise differentiation disappears quickly.",
        ],
      },
      {
        heading: "Localization is your brand",
        body: [
          "Audiences judge credibility on how well you speak their language—literally and visually.",
        ],
      },
    ],
  }),
};

const figmaMcp: BlogPost = {
  slug: "figma-mcp-design-systems",
  published: "2024-03-10",
  readingMinutes: 5,
  tags: ["Tooling", "Automation"],
  heroImage: "/file.svg",
  heroAlt: {
    en: "Figma MCP integration illustration showing components syncing.",
    fi: "Figma MCP -integraation kuvitus komponenttien synkronoinnista.",
    sv: "Illustration av Figma MCP-integration som synkar komponenter.",
  },
  locale: replicate({
    title: "Figma MCP & Design Systems",
    summary:
      "How MCP servers help us bridge design assets, documentation, and Next.js components.",
    metaTitle: "Figma MCP & Design Systems | Digitaltableteur",
    metaDescription:
      "Digitaltableteur's workflow for using Figma MCP servers to keep design tokens and code in sync.",
    sections: [
      {
        heading: "Why MCP matters",
        body: [
          "MCP servers give you a programmable API between Figma files and engineering repos. Changes trigger updates without waiting for manual exports.",
        ],
      },
      {
        heading: "Our setup",
        body: [
          "Tokens are stored in JSON, synced via MCP, and validated through automated linting.",
          "Storybook consumes the same source of truth, so design reviews always reference live components.",
        ],
      },
    ],
  }),
};

const petriBio: BlogPost = {
  slug: "petri-lahdelma-bio",
  published: "2024-01-25",
  readingMinutes: 4,
  tags: ["Team"],
  heroImage: "/window.svg",
  heroAlt: {
    en: "Portrait abstract of Petri Lähdelmä in geometric style.",
    fi: "Geometrinen muotokuva Petri Lähdelmästä.",
    sv: "Geometriskt porträtt av Petri Lähdelmä.",
  },
  locale: replicate({
    title: "Petri Lähdelmä: Biography",
    summary:
      "From early illustration gigs to leading multilingual product launches across Europe.",
    metaTitle: "Petri Lähdelmä Bio | Digitaltableteur",
    metaDescription:
      "Learn about Petri Lähdelmä's background and how it shapes Digitaltableteur's multidisciplinary practice.",
    sections: [
      {
        heading: "Origins",
        body: [
          "Petri started in editorial illustration before moving into product design, carrying a love for narrative into every engagement.",
        ],
      },
      {
        heading: "Today",
        body: [
          "He now leads Digitaltableteur, partnering with teams across Northern Europe on brand, product, and storytelling initiatives.",
        ],
      },
      {
        heading: "Focus",
        body: [
          "Petri's focus areas include multilingual brand systems, accessibility, and building processes that honour craft without sacrificing velocity.",
        ],
      },
    ],
  }),
};

export const blogPosts: BlogPost[] = [
  designing2025,
  workflowTips,
  digitalCraftsmanship,
  thoughtsBranding,
  figmaMcp,
  petriBio,
];

export function getPosts(locale: SupportedLocale) {
  return blogPosts.map((post) => ({
    ...post,
    content: post.locale[locale] ?? post.locale.en,
  }));
}

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
