import type { Meta, StoryObj } from "@storybook/react";
import { OnboardingBanner } from "@/components";
import { BANNER_TEXT } from "@/constants/messages";

const meta = {
  title: "Components/Banner/OnboardingBanner",
  component: OnboardingBanner,
  tags: ["autodocs"],
  argTypes: {
    subTitleText: {
      control: { type: "text" },
      defaultValue: BANNER_TEXT.onboarding.subTitleText,
    },
    titleText: {
      control: { type: "text" },
      defaultValue: BANNER_TEXT.onboarding.titleText,
    },
    descriptionText: {
      control: { type: "text" },
      defaultValue: BANNER_TEXT.onboarding.descriptionText,
    },
  },
} satisfies Meta<typeof OnboardingBanner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    subTitleText: BANNER_TEXT.onboarding.subTitleText,
    titleText: BANNER_TEXT.onboarding.titleText,
    descriptionText: BANNER_TEXT.onboarding.descriptionText,
  },
};
