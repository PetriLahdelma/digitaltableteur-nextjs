import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import HelsinkiClock from "./HelsinkiClock";

const meta: Meta<typeof HelsinkiClock> = {
  title: "Components/HelsinkiClock",
  component: HelsinkiClock,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof HelsinkiClock>;

export const Default: Story = {};
