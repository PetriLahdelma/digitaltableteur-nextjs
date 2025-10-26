import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Link from "./Link";

const meta: Meta<typeof Link> = {
  title: "Components/Link",
  component: Link,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["S", "M", "L"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: "#",
    children: "This is a link",
  },
};

export const External: Story = {
  args: {
    href: "https://example.com",
    children: "External link",
    target: "_blank",
    rel: "noopener noreferrer",
  },
};

export const Large: Story = {
  args: {
    size: "L",
    href: "#",
    children: "Large link",
  },
};

export const Small: Story = {
  args: {
    size: "S",
    href: "#",
    children: "Small link",
  },
};
