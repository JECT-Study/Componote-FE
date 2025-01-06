import type { Meta, StoryObj } from "@storybook/react";
import { CalloutInteractive } from "../../components";

const meta = {
  component: CalloutInteractive,
  title: "Components/Callout/Interactive",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    $size: {
      options: ["sm", "md"],
      control: { type: "radio" },
    },
    $disabled: {
      options: [false, true],
      control: { type: "radio" },
    },
  },
} satisfies Meta<typeof CalloutInteractive>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    $size: "md",
    $disabled: false,
    titleText: "콜아웃 타이틀",
    bodyText: "콜아웃 캡션",
  },
};

export const CalloutInteractiveSmall: Story = {
  args: {
    ...Default.args,
    $size: "sm",
  },
};

export const CalloutInteractiveDisabled: Story = {
  args: {
    ...Default.args,
    $disabled: true,
  },
};
