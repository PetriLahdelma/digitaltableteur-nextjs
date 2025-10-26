import { BlogPost, replicate } from "./types";

export const petriBio: BlogPost = {
  slug: "petri-lahdelma-bio",
  published: "2025-07-11",
  readingMinutes: 3,
  tags: ["Biography", "About"],
  heroImage: "/pete-vault-boy.jpg",
  heroAlt: {
    en: "Portrait of Petri Lähdelma in a creative workspace.",
    fi: "Muotokuva Petri Lähdelmästä luovassa työtilassa.",
    sv: "Porträtt av Petri Lähdelma i en kreativ arbetsplats.",
  },
  locale: replicate({
    title: "Petri Lahdelma: A Biography",
    summary:
      "Finnish designer, systems thinker, and advocate for professional ethics in design, with over two decades of experience across agencies, startups, and enterprise.",
    metaTitle: "Petri Lahdelma: A Biography",
    metaDescription:
      "Petri Lahdelma is a Finnish designer, systems thinker, and advocate for professional ethics in design. Raised in Varissuo, a suburb of Turku, his passion for visual culture came from a painter father and a supportive mother.",
    sections: [
      {
        heading: "Early Life and Education",
        body: [
          "Petri Lahdelma is a Finnish designer, systems thinker, and advocate for professional ethics in design. Raised in Varissuo, a suburb of Turku, his passion for visual culture came from a painter father and a supportive mother.",
          "That early spark carried him to the UK for a BA in Graphic Design at the University of Cumbria, and later to Aalto University in Helsinki for a master's degree.",
          "Among the mentors who shaped his craft were Rhiannon Robinson, who sharpened his critical eye, and Tapio Vapaasalo, who instilled a love for craftsmanship and form.",
        ],
      },
      {
        heading: "Professional Journey",
        body: [
          "After a junior stint at Werklig, Petri spent two decades moving through agencies, startups, and entrepreneurial ventures, always refusing to stand still.",
          "Today he leads a design system team in a global enterprise of more than 110,000 colleagues worldwide, balancing enterprise UX with scalable systems thinking.",
          "His portfolio ranges from national infrastructure identities like the Liikennevirasto corporate identity to agile startup brands such as New Things Company, and he laid the strategic groundwork for the Helsinki Design System.",
        ],
      },
      {
        heading: "Leadership and Influence",
        body: [
          "Throughout his career Petri has founded and led design guilds and special interest programs, shaping team culture as much as the work itself.",
          "He belongs to AIGA, IxDA, and ISTD. While he rarely speaks publicly—a regret of his own—his influence lives in the systems, standards, and ethics he brings to every project.",
          "He believes clarity matters more than decoration, that form follows function, and that users seldom say what they really need.",
        ],
      },
      {
        heading: "Philosophy and Approach",
        body: [
          "Guided by curiosity and care rather than fleeting trends, colleagues know him as a thoughtful, kind collaborator who insists on doing things the right way.",
          "His work focuses on the intersection of design and engineering, creating systems that balance craft with velocity and human needs with business objectives.",
          "Petri continues to advocate for ethical design practices, sustainable workflows, and the importance of maintaining quality in an increasingly fast-paced digital landscape.",
        ],
      },
    ],
  }),
};
