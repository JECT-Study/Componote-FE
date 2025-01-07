import type { Meta, StoryObj } from "@storybook/react";
import { DocumentBanner } from "@/components";
import { BANNER_TEXT } from "@/constants/messages";

const meta = {
  title: "Components/Banner/DocumentBanner",
  component: DocumentBanner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    titleText: {
      control: { type: "text" },
    },
    componentListText: {
      control: { type: "text" },
    },
    bodyText: {
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof DocumentBanner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    titleText: "컴포넌트 명",
    componentListText: "혼용되는 컴포넌트 이름 목록",
    bodyText: "컴포넌트에 대한 설명",
  },
};
