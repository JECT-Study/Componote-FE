import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../../components";

const meta = {
  component: Badge,
  title: "Components/Badge",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  argTypes: {
    $variant: {
      options: ["dot", "new", "count"],
      control: { type: "radio" },
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Dot: Story = {
  args: {
    $variant: "dot",
  },
};

export const New: Story = {
  args: {
    $variant: "new",
  },
};

export const Count: Story = {
  args: {
    $variant: "count",
    text: "1",
  },
};
