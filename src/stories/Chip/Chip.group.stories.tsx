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
    $width: "100%",
  },
};

export const Tech: Story = {
  args: {
    $variant: "tech",
    $width: "100%",
  },
};

export const Contents: Story = {
  args: {
    $variant: "contents",
    $width: "100%",
  },
};

export const Device: Story = {
  args: {
    $variant: "device",
    $width: "100%",
  },
};
