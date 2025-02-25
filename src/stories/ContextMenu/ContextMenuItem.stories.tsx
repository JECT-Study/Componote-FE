import type { Meta, StoryObj } from "@storybook/react";
import { ContextMenu } from "../../components";

const meta = {
  title: "Components/ContextMenu/Item",
  component: ContextMenu.Item,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    $variant: {
      control: { type: "radio" },
      options: ["labelOnly", "checkbox", "leftIcon", "rightIcon", "badge"],
    },
    $size: {
      control: { type: "radio" },
      options: ["md", "sm"],
    },
    $feedback: {
      control: { type: "radio" },
      options: ["normal", "info", "negative"],
    },
  },
} satisfies Meta<typeof ContextMenu.Item>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    $variant: "labelOnly",
    $size: "md",
    labelText: "아이템 레이블",
    subLabelText: "서브 레이블",
    captionText: "캡션 텍스트",
  },
};

export const Checkbox: Story = {
  args: {
    ...Default.args,
    $variant: "checkbox",
  },
};

export const LeftIcon: Story = {
  args: {
    ...Default.args,
    $variant: "leftIcon",
  },
};

export const RightIcon: Story = {
  args: {
    ...Default.args,
    $variant: "rightIcon",
  },
};

export const Badge: Story = {
  args: {
    ...Default.args,
    $variant: "badge",
    badgeLabelText: "레이블",
  },
};
