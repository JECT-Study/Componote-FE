import type { Meta, StoryObj } from "@storybook/react";
import { BadgeComponentType } from "../../components";

const meta = {
  component: BadgeComponentType,
  title: "Components/Badge/ComponentType",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  argTypes: {
    $type: {
      options: ["input", "display", "feedback", "navigation"],
      control: { type: "radio" },
    },
    $style: {
      options: ["solid", "transparent"],
      control: { type: "radio" },
    },
    $size: {
      options: ["xs", "sm", "md"],
      control: { type: "radio" },
    },
  },
} satisfies Meta<typeof BadgeComponentType>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    $type: "input",
    $style: "solid",
    $size: "md",
  },
};

export const InputTransparent: Story = {
  args: {
    ...Default.args,
    $style: "transparent",
  },
};

export const DisplaySolid: Story = {
  args: {
    ...Default.args,
    $type: "display",
  },
};

export const DisplayTransparent: Story = {
  args: {
    ...DisplaySolid.args,
    $style: "transparent",
  },
};

export const FeedbackSolid: Story = {
  args: {
    ...Default.args,
    $type: "feedback",
  },
};

export const FeedbackTransparent: Story = {
  args: {
    ...FeedbackSolid.args,
    $style: "transparent",
  },
};

export const NavigationSolid: Story = {
  args: {
    ...Default.args,
    $type: "navigation",
  },
};

export const NavigationTransparent: Story = {
  args: {
    ...NavigationSolid.args,
    $style: "transparent",
  },
};
