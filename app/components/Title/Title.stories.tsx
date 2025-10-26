import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Title from "./Title";

const meta: Meta<typeof Title> = {
  title: "Components/Title",
  component: Title,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["S", "M", "L", "XL"],
    },
    level: {
      control: { type: "select" },
      options: [1, 2, 3, 4, 5, 6],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "This is a title",
  },
};

export const Large: Story = {
  args: {
    size: "L",
    children: "Large Title",
  },
};

export const ExtraLarge: Story = {
  args: {
    size: "XL",
    children: "Extra Large Title",
  },
};

export const Small: Story = {
  args: {
    size: "S",
    children: "Small Title",
  },
};

export const HeadingLevel2: Story = {
  args: {
    level: 2,
    size: "M",
    children: "This is an H2 title",
  },
};

export const GradientText: Story = {
  args: {
    size: "XL",
    className: "gradientText",
    children: "Gradient Title",
  },
};
