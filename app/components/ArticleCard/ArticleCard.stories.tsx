import React from "react";
// import { within, userEvent } from "@storybook/testing-library";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import ArticleCard from "./ArticleCard";
// import { useTranslation } from "react-i18next";

const meta: Meta<typeof ArticleCard> = {
  title: "Components/ArticleCard",
  component: ArticleCard,
  args: {
    title:
      "How to Build a Design System for Modern Teams and Ensure Consistency Across All Products",
    lead: "A practical and comprehensive guide to building, scaling, and maintaining a robust design system for modern teams, covering best practices, common pitfalls, and strategies for ensuring consistency and efficiency across all digital products and platforms.",
    link: "/blog/design-system-guide",
    readTime: "10 min read",
  },
  argTypes: {
    title: { control: "text" },
    lead: { control: "text" },
    link: { control: "text" },
    readTime: { control: "text" },
    className: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const ArticleCardWrapper = (args: Parameters<typeof ArticleCard>[0]) => {
  return (
    <ArticleCard {...args} title={args.title || ""} lead={args.lead || ""} />
  );
};

export const Default: Story = {
  render: (args) => <ArticleCardWrapper {...args} />,
  args: {
    title: "How to Build a Design System for Modern Teams",
    lead: "A comprehensive guide to building, scaling, and maintaining design systems",
    link: "/blog/design-system-guide",
    readTime: "10 min read",
  },
};

export const WithCustomClass: Story = {
  render: (args) => <ArticleCardWrapper {...args} />,
  args: {
    title: "Branding in 2025",
    lead: "What the future holds for digital branding and visual identity",
    link: "/blog/branding-2025",
    readTime: "14 min read",
    className: "customClass",
  },
};

// WithCustomClass.play = async ({
//   canvasElement,
// }: {
//   canvasElement: HTMLElement;
// }) => {
//   const canvas = within(canvasElement);
//   await canvas.findByText(/branding in 2025/i);
//   await canvas.findByText(/future holds for digital branding/i);
//   await canvas.findByText(/14 min read/i);
//   // Focus test
//   await userEvent.tab();
// };
