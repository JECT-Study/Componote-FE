import type { Meta, StoryObj } from "@storybook/react";
import { NotificationFeed } from "@/components";

const meta = {
  title: "Components/Feed/NotificationFeed",
  component: NotificationFeed,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof NotificationFeed>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    $variant: "like",
    userName: "OOO",
    notificationTime: "n분",
    componentName: "컴포넌트 이름",
    myCommentText: "내 댓글 내용이 표시됩니다.",
    replyText: "대댓글 내용은 이렇게 표시됩니다.",
  },
};

export const ReplyFeed: Story = {
  args: {
    ...Default.args,
    $variant: "reply",
  },
};
