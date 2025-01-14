import type { Meta, StoryObj } from "@storybook/react";
import { InputField } from "@/components";
import BlankLine from "@/assets/icons/blank-line.svg";

const meta = {
  title: "Components/InputField",
  component: InputField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    $size: {
      control: { type: "select" },
      options: ["md", "sm"],
      defaultValue: "md",
    },
    $isNegative: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    $labelVisible: {
      control: { type: "boolean" },
      defaultValue: true,
    },
    $helperVisible: {
      control: { type: "boolean" },
      defaultValue: true,
    },
    countLimit: {
      control: { type: "text" },
      defaultValue: 40,
    },
  },
} satisfies Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: (
      <span>
        필드 레이블<span style={{ color: "orange" }}>*</span>
      </span>
    ),
    helperText: "헬퍼 메시지",
    placeholderText: "플레이스 홀더",
    countLimit: "10",
    $size: "md",
    $icon: BlankLine,
    $isNegative: false,
    $labelVisible: true,
    $helperVisible: true,
  },
};

export const LabelInvisible: Story = {
  args: {
    ...Default.args,
    $labelVisible: false,
  },
};

export const HelperInvisible: Story = {
  args: {
    ...Default.args,
    $helperVisible: false,
  },
};

export const SmallInputField: Story = {
  args: {
    ...Default.args,
    $size: "sm",
  },
};

export const isNegative: Story = {
  args: {
    ...Default.args,
    $isNegative: true,
  },
};
