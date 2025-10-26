import React from "react";
import { StoryFn, Meta } from "@storybook/nextjs-vite";
import Avatar from "./Avatar";

export default {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    name: { control: "text" },
    size: { control: "text" },
    clickable: { control: "boolean" },
    destinationUrl: { control: "text" },
    priority: { control: "boolean" },
  },
} as Meta<typeof Avatar>;

const Template: StoryFn<typeof Avatar> = (
  args: React.ComponentProps<typeof Avatar>
) => <Avatar {...args} />;

export const WithImage = Template.bind({});
WithImage.args = {
  imageUrl: "/pete-vault-boy.jpg",
  name: "Petri Lahdelma",
  priority: true,
};

export const WithName = Template.bind({});
WithName.args = {
  name: "John Smith",
};

export const WithInitials = Template.bind({});
WithInitials.args = {
  name: "John Doe",
  size: "60px",
};

export const Clickable = Template.bind({});
Clickable.args = {
  name: "Clickable Avatar",
  clickable: true,
  destinationUrl: "https://example.com",
};
