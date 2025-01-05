import type { Meta, StoryObj } from "@storybook/react";
import { NavigationBar } from "@/components";

const meta = {
  title: "Components/NavigationBar",
  component: NavigationBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    $isAuthorized: {
      control: { type: "boolean" },
    },
    $isSeparated: {
      control: { type: "boolean" },
    },
    placeholderText: {
      control: { type: "text" },
      defaultValue: "플레이스 홀더",
    },
  },
} satisfies Meta<typeof NavigationBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    $isAuthorized: false,
    $isSeparated: false,
    placeholderText: "플레이스 홀더",
  },
};

export const IsAuthorized: Story = {
  args: {
    ...Default.args,
    $isAuthorized: true,
  },
};

export const IsSeparated: Story = {
  args: {
    ...Default.args,
    $isSeparated: true,
  },
};
