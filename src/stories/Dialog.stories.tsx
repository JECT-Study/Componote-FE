import type { Meta, StoryObj } from "@storybook/react";
import { Dialog } from "../components";

const meta = {
  title: "Components/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: <Dialog.Basic />,
  },
};

export const Login: Story = {
  args: {
    children: <Dialog.Login />,
  },
};

export const Report: Story = {
  args: {
    children: <Dialog.Report />,
  },
};

export const EmailVerification: Story = {
  args: {
    children: <Dialog.EmailVerification />,
  },
};

export const Verification: Story = {
  args: {
    children: <Dialog.Verification />,
  },
};
