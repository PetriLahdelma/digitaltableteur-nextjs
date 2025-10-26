import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import React from "react";
import SocialShare from "./SocialShare";

const meta: Meta<typeof SocialShare> = {
  title: "Components/SocialShare",
  component: SocialShare,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    url: {
      control: { type: "text" },
      description: "The URL to share",
    },
    title: {
      control: { type: "text" },
      description: "The title of the content being shared",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Wrapper component to handle i18n
const SocialShareWrapper = (args: { url: string; title: string }) => {
  return <SocialShare {...args} />;
};

export const Default: Story = {
  render: (args) => <SocialShareWrapper {...args} />,
  args: {
    url: "https://example.com/article",
    title: "Amazing Article Title",
  },
};
