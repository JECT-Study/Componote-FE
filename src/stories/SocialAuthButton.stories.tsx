import type { Meta, StoryObj } from "@storybook/react";
import { SocialAuthButton } from "../components";

const meta = {
  title: "Components/SocialAuthButton",
  component: SocialAuthButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["google", "github"],
    },
  },
} satisfies Meta<typeof SocialAuthButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "google",
    labelText: "Google",
  },
};

export const Github: Story = {
  args: {
    variant: "github",
    labelText: "Github",
  },
};
