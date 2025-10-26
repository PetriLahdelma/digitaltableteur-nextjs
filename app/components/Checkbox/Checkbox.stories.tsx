import React from "react";
import { Meta, StoryObj } from "@storybook/nextjs-vite";
import Checkbox, { CheckboxProps } from "./Checkbox";
import { useTranslation } from "react-i18next";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    label: { control: "text" },
    checked: { control: "boolean" },
    indeterminate: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const CheckboxWrapper = (args: CheckboxProps & { labelKey?: string }) => {
  const { t } = useTranslation();
  const [checked, setChecked] = React.useState(args.checked || false);

  return (
    <Checkbox
      {...args}
      label={args.labelKey ? t(args.labelKey) : args.label}
      checked={checked}
      onCheckedChange={setChecked}
    />
  );
};

export const Default: Story = {
  render: (args) => <CheckboxWrapper {...args} />,
  args: {
    label: "Default checkbox",
    checked: false,
  },
};

export const Checked: Story = {
  render: (args) => <CheckboxWrapper {...args} />,
  args: {
    label: "Checked checkbox",
    checked: true,
  },
};

export const Indeterminate: Story = {
  render: (args) => <CheckboxWrapper {...args} />,
  args: {
    label: "Indeterminate checkbox",
    checked: false,
    indeterminate: true,
  },
};
