import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Text from "./Text";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children:
      "This is some body text. It can be quite long and will wrap naturally when it reaches the edge of its container.",
  },
};

export const Short: Story = {
  args: {
    children: "Short text content.",
  },
};

export const WithCustomClass: Story = {
  args: {
    children: "Text with custom styling.",
    className: "custom-text-class",
  },
};
