import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "@/components";

const meta = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    $size: {
      control: { type: "text" },
      defaultValue: "md",
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    $size: "md",
    titleText: "아코디언 텍스트",
    dateText: "YYYY-MM-DD",
    bodyText: "아코디언 세부 내용이 표시됩니다.",
  },
};

export const SmallAccordion: Story = {
  args: {
    ...Default.args,
    $size: "sm",
    titleText: "4개의 대댓글 펼치기",
    children: <>대댓글 컴포넌트</>,
  },
};
