import type { Meta, StoryObj } from "@storybook/react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Dialog } from "../components";

const queryClient = new QueryClient();

const meta = {
  title: "Components/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: <Dialog.Basic />,
    router: {} as AppRouterInstance,
  },
};

export const Login: Story = {
  args: {
    children: <Dialog.Login router={{} as AppRouterInstance} />,
    router: {} as AppRouterInstance,
  },
};

export const Report: Story = {
  args: {
    children: <Dialog.Report />,
    router: {} as AppRouterInstance,
  },
};

export const EmailVerification: Story = {
  args: {
    children: <Dialog.EmailVerification />,
    router: {} as AppRouterInstance,
  },
};

export const Verification: Story = {
  args: {
    children: <Dialog.Verification />,
    router: {} as AppRouterInstance,
  },
};

export const Complete: Story = {
  args: {
    children: <Dialog.Complete />,
    router: {} as AppRouterInstance,
  },
};
