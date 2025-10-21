import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Grid from "./Grid";

const meta: Meta<typeof Grid> = {
  title: "Components/Grid",
  component: Grid,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    columns: {
      control: { type: "number", min: 1, max: 12, step: 1 },
    },
    gap: {
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const GridItem = ({
  children,
  ...props
}: {
  children: React.ReactNode;
  span?: number;
  rowSpan?: number;
  style?: React.CSSProperties;
  className?: string;
}) => (
  <div
    style={{
      background: "#f0f0f0",
      padding: "1rem",
      textAlign: "center",
      border: "1px solid #ddd",
      borderRadius: "4px",
    }}
    {...props}
  >
    {children}
  </div>
);

export const ThreeColumns: Story = {
  args: {
    columns: 3,
    children: [
      <GridItem key="1">Item 1</GridItem>,
      <GridItem key="2">Item 2</GridItem>,
      <GridItem key="3">Item 3</GridItem>,
    ],
  },
};

export const TwoColumns: Story = {
  args: {
    columns: 2,
    gap: "2rem",
    children: [
      <GridItem key="1">First column</GridItem>,
      <GridItem key="2">Second column</GridItem>,
      <GridItem key="3">Third item (wraps)</GridItem>,
      <GridItem key="4">Fourth item</GridItem>,
    ],
  },
};

export const WithSpanning: Story = {
  args: {
    columns: 3,
    children: [
      <GridItem key="1" span={2}>
        Spans 2 columns
      </GridItem>,
      <GridItem key="2">Regular item</GridItem>,
      <GridItem key="3">Another item</GridItem>,
      <GridItem key="4">Final item</GridItem>,
    ],
  },
};

export const SingleColumn: Story = {
  args: {
    columns: 1,
    children: [
      <GridItem key="1">First item</GridItem>,
      <GridItem key="2">Second item</GridItem>,
      <GridItem key="3">Third item</GridItem>,
    ],
  },
};
