import type { Meta, StoryObj } from "@storybook/react";
import { MyCommentFeed } from "@/components";

const meta = {
  title: "Components/Feed/MyCommentFeed",
  component: MyCommentFeed,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof MyCommentFeed>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    $variant: "reply",
    componentName: "컴포넌트 이름",
    dateText: "YYYY-MM-DD HH:MM",
    bodyText: "댓글 내용은 이렇게 표시됩니다.",
    otherPeopleText: "다른 사용자의 댓글 내용이 표시됩니다.",
  },
};

export const CommentFeed: Story = {
  args: {
    ...Default.args,
    $variant: "comment",
  },
};
