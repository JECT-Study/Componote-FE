import type { Meta, StoryObj } from "@storybook/react";
import { Tab } from "@/components";

const meta = {
  title: "Components/Tab",
  component: Tab,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    labelText: {
      control: { type: "text" },
    },
    $isDisabled: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof Tab>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    labelText: "탭 레이블",
  },
};

export const DisabledTab: Story = {
  args: {
    ...Default.args,
    $isDisabled: true,
  },
};
