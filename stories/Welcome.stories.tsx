import type { Meta, StoryObj } from "@storybook/react";

const Welcome = () => (
  <div
    style={{
      padding: "2rem",
      fontFamily: "var(--font-geist-sans)",
      maxWidth: "600px",
      margin: "0 auto",
    }}
  >
    <h1
      style={{
        background: "var(--home-gradient)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
        fontSize: "3rem",
        marginBottom: "1rem",
      }}
    >
      Digitaltableteur Components
    </h1>
    <p style={{ fontSize: "1.125rem", lineHeight: 1.6, marginBottom: "2rem" }}>
      Welcome to the component library for Digitaltableteur. Here you&apos;ll
      find all the reusable components used throughout the application.
    </p>
    <h2 style={{ marginBottom: "1rem" }}>Available Components:</h2>
    <ul style={{ fontSize: "1rem", lineHeight: 1.8 }}>
      <li>
        <strong>Button</strong> - Interactive buttons with multiple variants
      </li>
      <li>
        <strong>Title</strong> - Headings with different sizes and semantic
        levels
      </li>
      <li>
        <strong>Text</strong> - Body text components
      </li>
      <li>
        <strong>Link</strong> - Navigation and external links
      </li>
      <li>
        <strong>Grid</strong> - Flexible grid layout system
      </li>
    </ul>
  </div>
);

const meta: Meta<typeof Welcome> = {
  title: "Welcome",
  component: Welcome,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ToStorybook: Story = {};
