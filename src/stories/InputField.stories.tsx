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
    $isNagative: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    $iconVisible: {
      control: { type: "boolean" },
      defaultValue: true,
    },
    $labelVisible: {
      control: { type: "boolean" },
      defaultValue: true,
    },
    $helperVisible: {
      control: { type: "boolean" },
      defaultValue: true,
    },
  },
} satisfies Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    labelText: "필드 레이블",
    helperText: "헬퍼 메시지",
    placeholderText: "플레이스 홀더",
    $size: "md",
    $icon: BlankLine,
    $isNagative: false,
    $iconVisible: true,
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

export const isNagative: Story = {
  args: {
    ...Default.args,
    $isNagative: true,
  },
};
