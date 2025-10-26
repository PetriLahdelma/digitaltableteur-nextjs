import { BlogPost, replicate } from "./types";

export const digitalCraftsmanship: BlogPost = {
  slug: "digital-craftsmanship",
  published: "2024-08-18",
  readingMinutes: 6,
  tags: ["Craft", "Quality", "Process"],
  heroImage: "/pizza.jpg",
  heroAlt: {
    en: "A colorless pizza topped with melted cheese and vibrant toppings representing craftsmanship in everyday things.",
    fi: "Värätön pizza, jossa on sulatettua juustoa ja eläviä täytteitä, edustaa käsityötaitoa arkipäivän asioissa.",
    sv: "En färglös pizza med smält ost och livfulla pålägg som representerar hantverk i vardagliga saker.",
  },
  locale: replicate({
    title:
      "Digital Craftsmanship — Thoughts on Maintaining Quality in a Hurry-Up Culture",
    summary:
      "Exploring how to preserve craftsmanship and intentional design in a culture that prioritizes speed and automation.",
    metaTitle:
      "Digital Craftsmanship — Thoughts on Maintaining Quality in a Hurry-Up Culture",
    metaDescription:
      "The tools are faster, the deadlines tighter, and the expectations steeper. Somewhere between shipping faster and scaling bigger, something subtle gets lost. Not visibly. But you can feel it.",
    sections: [
      {
        heading: "Speed Isn't the Enemy — Thoughtlessness Is",
        body: [
          "I've worked long enough in digital to know that slowness doesn't equal quality. But there's a difference between moving fast with intent and just pushing to ship.",
          "We've built pipelines that automate, generate, even decide for us. But no automation substitutes the quiet friction of asking: Does this feel right? Does this deserve to exist this way?",
          "That pause is not inefficiency. It's where meaning starts.",
        ],
      },
      {
        heading: "Craft Is in the Edges",
        body: [
          "Good design isn't only in the headline or the layout — it lives in the in-between. The microcopy that never sounds off. The loading animation that softens a delay.",
          "The way a transition suggests something human was here, thinking about how it would feel — how others would feel using it.",
          "Craftsmanship is about honoring the parts that don't shout but shape the whole. It's not about polish. It's about presence.",
        ],
      },
      {
        heading: "Quality in the Age of Generators",
        body: [
          "AI is writing copy, generating layouts, filling in alt texts and icons — and oftentimes doing it quite decently. But the danger isn't in letting machines help.",
          "It's in letting them decide what 'good enough' looks like. When we stop noticing the difference, we stop caring.",
          "Craft today, more than ever, means keeping a human fingerprint on the product. Not because we should resist progress, but because we're still the ones accountable for the emotional resonance.",
        ],
      },
      {
        heading: "Leave Traces of Care",
        body: [
          "In every project, there's a point where we could cut a corner and no one would notice. But someone always does — even if they can't name it.",
          "Quality has a texture. It lingers. Not just in design, but in the culture it fosters: attention to detail becomes contagious. The team starts to raise their own bar.",
          "Digital craftsmanship isn't about perfection. It's about giving a damn.",
        ],
      },
      {
        heading: "In Praise of Slowness, Even When We're Fast",
        body: [
          "We won't go back to slower cycles. That's not the point. But we can bake slowness into the process: quick iterations, slow reflection.",
          "Fast drafts, considered revisions. Space for questions no prompt can answer.",
          "In the end, craft is just a pattern of choices made deliberately, not reactively. In a hurry-up culture, choosing to care is radical.",
        ],
      },
    ],
  }),
};
