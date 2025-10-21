import type { Meta, StoryObj } from "@storybook/react";
import SocialShare from "./SocialShare";

const meta: Meta<typeof SocialShare> = {
  title: "Components/SocialShare",
  component: SocialShare,
  args: {
    url: "https://digitaltableteur.com/blog/designing-in-2025",
    title: "Designing in 2025",
  },
};

export default meta;
type Story = StoryObj<typeof SocialShare>;

export const Default: Story = {};
