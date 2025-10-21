import type { SupportedLocale } from "@/app/i18n";

export type CaseStudySection = {
  heading: string;
  body: string[];
};

export type CaseStudyHighlight = {
  label: string;
  items: string[];
};

export type CaseStudyLocaleContent = {
  title: string;
  tagline: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  sections: CaseStudySection[];
  highlights: CaseStudyHighlight[];
};

export type CaseStudyMedia = {
  type: "image" | "video";
  src: string;
  alt: string;
};

export type CaseStudy = {
  slug: string;
  featuredImage: string;
  featuredAlt: Record<SupportedLocale, string>;
  heroImage: string;
  heroAlt: Record<SupportedLocale, string>;
  services: string[];
  year: string;
  locale: Record<SupportedLocale, CaseStudyLocaleContent>;
  gallery: CaseStudyMedia[];
};

const sharedLocales: SupportedLocale[] = ["en", "fi", "sv"];

function replicateLocaleContent(content: CaseStudyLocaleContent) {
  return sharedLocales.reduce<Record<SupportedLocale, CaseStudyLocaleContent>>(
    (acc, locale) => {
      acc[locale] = { ...content };
      return acc;
    },
    {} as Record<SupportedLocale, CaseStudyLocaleContent>
  );
}

const newThingsCo: CaseStudy = {
  slug: "new-things-co",
  featuredImage: "/images-ntco.webp",
  featuredAlt: {
    en: "Lively geometric collage used as hero for New Things Co.",
    fi: "Uusiin muotoihin perustuva värikäs hero-kuva New Things Co:lle.",
    sv: "Färgstark geometrisk hero-bild för New Things Co.",
  },
  heroImage: "/images-ntco.webp",
  heroAlt: {
    en: "Brand system for New Things Co showcasing modular typography.",
    fi: "New Things Co:n modulaarinen typografiajärjestelmä.",
    sv: "New Things Co:s modulära typografisystem.",
  },
  services: [
    "Brand strategy",
    "Identity system",
    "Website design",
    "Front-end build",
  ],
  year: "2024",
  locale: replicateLocaleContent({
    title: "New Things Co",
    tagline: "Helping an innovation lab feel tangible and trustworthy",
    summary:
      "A multilingual brand and product surface for an innovation lab serving enterprise launches. We created a modular identity system, editorial design language, and a website that scales across three markets.",
    metaTitle: "New Things Co Case Study | Digitaltableteur",
    metaDescription:
      "How Digitaltableteur developed a modular brand identity, multilingual website, and product storytelling for New Things Co.",
    sections: [
      {
        heading: "Context",
        body: [
          "New Things Co accelerates ventures inside established companies. Their teams needed a digital presence that felt inventive, yet dependable enough to close enterprise contracts.",
          "We audited prior messaging, interviewed program leads, and identified that their prospects valued process clarity and proof of execution over brand slogans.",
        ],
      },
      {
        heading: "Approach",
        body: [
          "We built a narrative spine that walks prospects from venture framing to delivery. Visual language pairs animated graphic grids with refined typography to balance experimentation and rigor.",
          "All pages were authored in English, Finnish, and Swedish. A custom CMS model keeps hero moments consistent while allowing regional case studies to rotate in.",
        ],
      },
      {
        heading: "Outcomes",
        body: [
          "Launch traffic converted 36% better than the previous site, with the contact form producing qualified leads in the first week.",
          "The modular component library feeds both marketing pages and internal venture templates, shortening iteration cycles by roughly 40%.",
        ],
      },
    ],
    highlights: [
      {
        label: "Team",
        items: ["Strategy", "Design", "Engineering"],
      },
      {
        label: "Duration",
        items: ["12 weeks"],
      },
      {
        label: "Deliverables",
        items: ["Brand system", "Design tokens", "Marketing site", "Sales collateral"],
      },
    ],
  }),
  gallery: [
    {
      type: "image",
      src: "/images-ntco.webp",
      alt: "Screens from the New Things Co website highlighting hero, case stories, and modular cards.",
    },
    {
      type: "image",
      src: "/check_pattern@2x.webp",
      alt: "Pattern language built from arrow motifs and modular grids.",
    },
  ],
};

const illustrations: CaseStudy = {
  slug: "illustrations",
  featuredImage: "/ice-cream.webp",
  featuredAlt: {
    en: "Editorial illustration of a melting popsicle in playful colors.",
    fi: "Sulava mehujää värikkäänä kuvituksena.",
    sv: "Illustration av en smältande isglass i ljusa färger.",
  },
  heroImage: "/ice-cream.webp",
  heroAlt: {
    en: "Series of editorial illustrations exploring future brand metaphors.",
    fi: "Sarja toimituksellisia kuvituksia, jotka tutkivat brändimetaforia.",
    sv: "Serie redaktionella illustrationer som utforskar framtidens varumärkesmetaforer.",
  },
  services: ["Editorial direction", "Illustration", "Animation"],
  year: "2023",
  locale: replicateLocaleContent({
    title: "Illustrations",
    tagline: "Transforming complex systems into approachable stories",
    summary:
      "A library of editorial artwork used across articles, keynote decks, and product marketing. The set leans on textured gradients and geometric characters to humanize technical narratives.",
    metaTitle: "Illustrations Case Study | Digitaltableteur",
    metaDescription:
      "See how Digitaltableteur produces editorial illustration systems that scale across media and motion.",
    sections: [
      {
        heading: "Context",
        body: [
          "Content teams needed visuals that could flex from blog posts to conference keynotes without reinventing the aesthetic each sprint.",
          "We defined illustration pillars—Playful, Precise, and Progressive—to anchor art direction while keeping production efficient.",
        ],
      },
      {
        heading: "Approach",
        body: [
          "Illustrations are constructed from a shared vector kit with rules for lighting, stroke weight, and character anatomy.",
          "Motion studies translate static assets into lightweight Lottie animations, enabling rich interactions in product onboarding.",
        ],
      },
      {
        heading: "Outcomes",
        body: [
          "Publishing cadence increased by 2× because teams could pull from the ready-made library.",
          "Animation assets reduced engineering handoff time by standardizing file prep and documentation.",
        ],
      },
    ],
    highlights: [
      {
        label: "Usage",
        items: ["Blog", "Social", "Keynotes", "Product onboarding"],
      },
      {
        label: "Toolkit",
        items: ["Figma", "After Effects", "Lottie"],
      },
    ],
  }),
  gallery: [
    {
      type: "image",
      src: "/ice-cream.webp",
      alt: "A melting popsicle illustration representing playful craft.",
    },
    {
      type: "image",
      src: "/window.svg",
      alt: "Vector window landscape illustration from the editorial system.",
    },
  ],
};

const garageJunction: CaseStudy = {
  slug: "garage-junction",
  featuredImage: "/check_pattern@2x.webp",
  featuredAlt: {
    en: "Garage Junction identity pattern with bold neon typography.",
    fi: "Garage Junction -identiteetin neonkuvio.",
    sv: "Garage Junctions identitetsmönster med neon-typografi.",
  },
  heroImage: "/check_pattern@2x.webp",
  heroAlt: {
    en: "Event brand system for Garage Junction with gritty textures.",
    fi: "Garage Junctionin tapahtumabrändi rouheilla tekstuureilla.",
    sv: "Eventidentitet för Garage Junction med råa texturer.",
  },
  services: ["Brand identity", "Immersive web", "Motion"],
  year: "2022",
  locale: replicateLocaleContent({
    title: "Garage Junction",
    tagline: "Capturing the energy of an underground creative festival",
    summary:
      "We designed the identity and digital experience for Garage Junction, a two-day festival celebrating Helsinki's creative underground. The result blends raw typography, analog textures, and bold motion to match the sonic intensity on stage.",
    metaTitle: "Garage Junction Case Study | Digitaltableteur",
    metaDescription:
      "Inside the branding and immersive site Digitaltableteur produced for the Garage Junction festival.",
    sections: [
      {
        heading: "Context",
        body: [
          "Garage Junction curates musicians, visual artists, and experimental technologists. They needed a digital space that felt like walking into the venue: loud, unexpected, and participatory.",
          "Budget constraints meant the system had to stay lightweight for indie collaborators to reuse.",
        ],
      },
      {
        heading: "Approach",
        body: [
          "We combined gritty found textures with an adjustable typographic grid inspired by street posters. The website uses scroll-driven motion and WebGL overlays to mimic stage lighting.",
          "Components are built in Storybook so the festival team can remix layouts without touching code.",
        ],
      },
      {
        heading: "Outcomes",
        body: [
          "Ticket sales sold out 10 days before the event thanks to the launch campaign.",
          "The identity toolkit is now used across merch, live visuals, and community updates without diluting the aesthetic.",
        ],
      },
    ],
    highlights: [
      {
        label: "Deliverables",
        items: ["Visual identity", "Immersive microsite", "Motion graphics"],
      },
      {
        label: "Collaboration",
        items: ["Festival team", "Local illustrators", "Sound designers"],
      },
    ],
  }),
  gallery: [
    {
      type: "image",
      src: "/check_pattern@2x.webp",
      alt: "Garage Junction pattern system in use across digital surfaces.",
    },
  ],
};

export const caseStudies: CaseStudy[] = [newThingsCo, illustrations, garageJunction];

export function getCaseStudies(locale: SupportedLocale) {
  return caseStudies.map((study) => ({
    ...study,
    content: study.locale[locale] ?? study.locale.en,
  }));
}

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
