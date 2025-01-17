import type { Meta, StoryObj } from "@storybook/react";
import { DefaultBanner } from "@/components";
import { BANNER_TEXT } from "@/constants/messages";

const meta = {
  title: "Components/Banner/DefaultBanner",
  component: DefaultBanner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    titleText: {
      control: { type: "text" },
      defaultValue: BANNER_TEXT.component.titleText,
    },
    descriptionText: {
      control: { type: "text" },
      defaultValue: BANNER_TEXT.component.descriptionText,
    },
  },
} satisfies Meta<typeof DefaultBanner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    titleText: BANNER_TEXT.component.titleText,
    descriptionText: BANNER_TEXT.component.descriptionText,
  },
};

export const Announcement: Story = {
  args: {
    titleText: BANNER_TEXT.announcement.titleText,
    descriptionText: BANNER_TEXT.announcement.descriptionText,
  },
};

export const DesignSystem: Story = {
  args: {
    titleText: BANNER_TEXT.designSystem.titleText,
    descriptionText: BANNER_TEXT.designSystem.descriptionText,
  },
};

export const Bookmark: Story = {
  args: {
    titleText: BANNER_TEXT.bookmark.titleText,
    descriptionText: BANNER_TEXT.bookmark.descriptionText,
  },
};
