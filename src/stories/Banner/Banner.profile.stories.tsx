import type { Meta, StoryObj } from "@storybook/react";
import { ProfileBanner } from "@/components";
import { BANNER_TEXT } from "@/constants/messages";

const meta = {
  title: "Components/Banner/ProfileBanner",
  component: ProfileBanner,
  tags: ["autodocs"],
  argTypes: {
    $src: {
      control: { type: "text" },
    },
    userName: {
      control: { type: "text" },
    },
    userJob: {
      control: { type: "text" },
    },
    emailAddress: {
      control: { type: "text" },
    },
    loginInfo: {
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof ProfileBanner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    userName: "사용자 닉네임",
    userJob: "직군명",
    emailAddress: "componote@componote.com",
    loginInfo: `Google 소셜 ${BANNER_TEXT.profile.loginInfoText}`,
  },
};
