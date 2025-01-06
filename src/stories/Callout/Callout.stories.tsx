import type { Meta, StoryObj } from "@storybook/react";
import { Callout } from "../../components";

const meta = {
  component: Callout,
  title: "Components/Callout",
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
  },
} satisfies Meta<typeof Callout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    $size: "md",
    titleText: "콜아웃 타이틀",
    bodyText: "콜아웃 캡션",
  },
};

export const CalloutSmall: Story = {
  args: {
    ...Default.args,
    $size: "sm",
  },
};
