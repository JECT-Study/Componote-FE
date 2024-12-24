import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "../components";

const meta = {
  title: "Components/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    toastText: "토스트 메시지",
  },
};
