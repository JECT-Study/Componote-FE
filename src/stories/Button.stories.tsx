import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components";
import BlankLine from "@/assets/icons/blank-line.svg";
import { ButtonStyle } from "@/components/Button/Button.types";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: { type: "text" },
      defaultValue: "버튼",
    },
    $leftIcon: {
      defaultValue: BlankLine,
    },
    $rightIcon: {
      defaultValue: BlankLine,
    },
    $size: {
      control: { type: "select" },
      options: ["lg", "md", "sm", "xs"],
      defaultValue: "md",
    },
    $buttonStyle: {
      control: { type: "select" },
      options: [
        ButtonStyle.SolidBrand,
        ButtonStyle.SolidPrimary,
        ButtonStyle.SolidSecondary,
        ButtonStyle.SolidTertiary,
        ButtonStyle.OutlinedPrimary,
        ButtonStyle.OutlinedSecondary,
        ButtonStyle.OutlinedTertiary,
        ButtonStyle.EmptyPrimary,
        ButtonStyle.EmptySecondary,
        ButtonStyle.EmptyTertiary,
      ],
      defaultValue: ButtonStyle.SolidPrimary,
    },
    $buttonType: {
      control: { type: "select" },
      options: ["button", "iconButton"],
      defaultValue: "button",
    },
    $isLeftIconVisible: {
      control: { type: "boolean" },
      defaultValue: true,
    },
    $isRightIconVisible: {
      control: { type: "boolean" },
      defaultValue: true,
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "버튼",
    $size: "md",
    $buttonStyle: ButtonStyle.SolidPrimary,
    $buttonType: "button",
    $leftIcon: BlankLine,
    $rightIcon: BlankLine,
    $isLeftIconVisible: true,
    $isRightIconVisible: true,
  },
};

export const WithLeftIcon: Story = {
  args: {
    ...Default.args,
    $leftIcon: BlankLine,
  },
};

export const WithRightIcon: Story = {
  args: {
    ...Default.args,
    $rightIcon: BlankLine,
  },
};

export const IconButton: Story = {
  args: {
    $size: "lg",
    $buttonStyle: ButtonStyle.SolidPrimary,
    $buttonType: "iconButton",
    $leftIcon: BlankLine,
    $isLeftIconVisible: true,
    $isRightIconVisible: false,
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    $isLeftIconVisible: false,
    $isRightIconVisible: false,
  },
};
