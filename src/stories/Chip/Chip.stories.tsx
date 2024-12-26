import type { Meta, StoryObj } from "@storybook/react";
import { Chip } from "@/components";
import BlankLine from "@/assets/icons/blank-line.svg";

const meta = {
  title: "Components/Chip/Chip",
  component: Chip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    $isInversed: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    $iconVisible: {
      control: { type: "boolean" },
      defaultValue: true,
    },
    $isSelected: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    $isDisabled: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    $size: {
      control: { type: "select" },
      options: ["xl", "lg", "md", "xs"],
      defaultValue: "md",
    },
  },
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "레이블",
    $size: "md",
    IconComponent: BlankLine,
    $iconVisible: true,
    $isSelected: false,
    $isInversed: false,
    $isDisabled: false,
    onClick: () => {},
  },
};

export const Selected: Story = {
  args: {
    ...Default.args,
    $isSelected: true,
  },
};

export const Inversed: Story = {
  args: {
    ...Default.args,
    $isInversed: true,
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    $isDisabled: true,
    $iconVisible: false,
  },
};
