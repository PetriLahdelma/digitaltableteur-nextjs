import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import SocialShareSection from "./SocialShareSection";

const meta: Meta<typeof SocialShareSection> = {
  title: "Components/SocialShare/SocialShareSection",
  component: SocialShareSection,
  args: {
    url: "https://digitaltableteur.com/blog/designing-in-2025",
    title: "Designing in 2025: Navigating the AI-Assisted Creative Landscape",
  },
  parameters: {
    docs: {
      description: {
        component:
          "A complete social sharing section with heading, divider, and social share buttons. Designed to be used at the end of blog posts and articles.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SocialShareSection>;

export const Default: Story = {};

export const WithCustomTitle: Story = {
  args: {
    title:
      "Digital Craftsmanship — Thoughts on Maintaining Quality in a Hurry-Up Culture",
    url: "https://digitaltableteur.com/blog/digital-craftsmanship",
  },
};

export const WithLongTitle: Story = {
  args: {
    title:
      "Rethinking Design-to-Product Workflows with Figma MCP and the Future of Automated Design Systems",
    url: "https://digitaltableteur.com/blog/figma-mcp-design-systems",
  },
};
