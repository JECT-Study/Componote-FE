import type { Meta, StoryObj } from "@storybook/react";
import { ComponentCard } from "@/components";

const meta = {
  title: "Components/Card/ComponentCard",
  component: ComponentCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    $isDisabled: {
      control: { type: "boolean" },
    },
    componentName: {
      control: { type: "text" },
    },
    descriptionText: {
      control: { type: "text" },
    },
    $sampleCount: {
      control: { type: "text" },
    },
    $commentCount: {
      control: { type: "text" },
    },
    $bookmarkCount: {
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof ComponentCard>;

export default meta;

type Story = StoryObj<typeof meta>;

const CardContainer = (StoryFn: () => JSX.Element) => {
  return (
    <div
      style={{
        width: "30rem",
        height: "23rem",
        padding: "1.25rem",
      }}
    >
      <StoryFn />
    </div>
  );
};

export const Default: Story = {
  args: {
    $isDisabled: false,
    componentName: "컴포넌트 명",
    descriptionText: "설명 내용",
    $sampleCount: "999+",
    $commentCount: "999+",
    $bookmarkCount: "999+",
  },
  decorators: [CardContainer],
};

export const DisabledCard: Story = {
  args: {
    ...Default.args,
    $isDisabled: true,
  },
  decorators: [CardContainer],
};
