import type { Meta, StoryObj } from "@storybook/react";
import { BadgeLabelFeedback } from "@/components/Badge/Badge.types";
import { BadgeLabel } from "../../components";

const meta = {
  component: BadgeLabel,
  title: "Components/Badge/Label",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    $variant: {
      options: ["labelOnly", "rightIcon"],
      control: { type: "radio" },
    },
    $feedback: {
      options: ["none", "negative", "info", "positive", "notification"],
      control: { type: "radio" },
    },
    $style: {
      options: ["solid", "transparent", "outlined"],
      control: { type: "radio" },
    },
    $size: {
      options: ["xs", "sm", "md"],
      control: { type: "radio" },
    },
  },
} satisfies Meta<typeof BadgeLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    $variant: "labelOnly",
    text: "레이블",
    $feedback: BadgeLabelFeedback.NONE,
    $style: "solid",
    $size: "md",
  },
};

export const IconNoneSolid: Story = {
  args: {
    ...Default.args,
    $variant: "rightIcon",
  },
};

export const LabelNoneTransparent: Story = {
  args: {
    ...Default.args,
    $style: "transparent",
  },
};

export const IconNoneTransparent: Story = {
  args: {
    ...Default.args,
    $style: "transparent",
    $variant: "rightIcon",
  },
};

export const LabelNoneOutlined: Story = {
  args: {
    ...Default.args,
    $style: "outlined",
  },
};

export const IconNoneOutlined: Story = {
  args: {
    ...Default.args,
    $style: "outlined",
    $variant: "rightIcon",
  },
};

export const LabelNegativeSolid: Story = {
  args: {
    ...Default.args,
    $feedback: BadgeLabelFeedback.NEGATIVE,
  },
};

export const IconNegativeSolid: Story = {
  args: {
    ...Default.args,
    $feedback: BadgeLabelFeedback.NEGATIVE,
    $variant: "rightIcon",
  },
};

export const LabelNegativeTransparent: Story = {
  args: {
    ...Default.args,
    $feedback: BadgeLabelFeedback.NEGATIVE,
    $style: "transparent",
  },
};

export const IconNegativeTransparent: Story = {
  args: {
    ...Default.args,
    $feedback: BadgeLabelFeedback.NEGATIVE,
    $style: "transparent",
    $variant: "rightIcon",
  },
};

export const LabelNegativeOutlined: Story = {
  args: {
    ...Default.args,
    $feedback: BadgeLabelFeedback.NEGATIVE,
    $style: "outlined",
  },
};

export const IconNegativeOutlined: Story = {
  args: {
    ...Default.args,
    $feedback: BadgeLabelFeedback.NEGATIVE,
    $style: "outlined",
    $variant: "rightIcon",
  },
};
