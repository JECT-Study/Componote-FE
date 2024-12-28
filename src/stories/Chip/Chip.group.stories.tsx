import type { Meta, StoryObj } from "@storybook/react";
import { ChipGroup } from "@/components";

const meta = {
  title: "Components/Chip/ChipGroup",
  component: ChipGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    $variant: {
      control: { type: "select" },
      options: ["platform", "tech", "contents", "device"],
      defaultValue: "platform",
    },
  },
} satisfies Meta<typeof ChipGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Platform: Story = {
  args: {
    $variant: "platform",
  },
};

export const Tech: Story = {
  args: {
    $variant: "tech",
  },
};

export const Contents: Story = {
  args: {
    $variant: "contents",
  },
};

export const Device: Story = {
  args: {
    $variant: "device",
  },
};
