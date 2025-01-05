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
      defaultValue: "레이블",
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
      defaultValue: ButtonStyle.SolidBrand,
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
    text: "레이블",
    $size: "md",
    $buttonStyle: ButtonStyle.SolidBrand,
    $buttonType: "button",
    $leftIcon: BlankLine,
    $rightIcon: BlankLine,
    $isLeftIconVisible: true,
    $isRightIconVisible: true,
  },
};

export const ButtonSolidPrimary: Story = {
  args: {
    ...Default.args,
    $buttonStyle: ButtonStyle.SolidPrimary,
  },
};

export const ButtonSolidSecondary: Story = {
  args: {
    ...Default.args,
    $buttonStyle: ButtonStyle.SolidSecondary,
  },
};

export const ButtonSolidTertiary: Story = {
  args: {
    ...Default.args,
    $buttonStyle: ButtonStyle.SolidTertiary,
  },
};

export const ButtonOutlinedPrimary: Story = {
  args: {
    ...Default.args,
    $buttonStyle: ButtonStyle.OutlinedPrimary,
  },
};

export const ButtonOutlinedSecondary: Story = {
  args: {
    ...Default.args,
    $buttonStyle: ButtonStyle.OutlinedSecondary,
  },
};

export const ButtonOutlinedTertiary: Story = {
  args: {
    ...Default.args,
    $buttonStyle: ButtonStyle.OutlinedTertiary,
  },
};

export const ButtonEmptyPrimary: Story = {
  args: {
    ...Default.args,
    $buttonStyle: ButtonStyle.EmptyPrimary,
  },
};

export const ButtonEmptySecondary: Story = {
  args: {
    ...Default.args,
    $buttonStyle: ButtonStyle.EmptySecondary,
  },
};

export const ButtonEmptyTertiary: Story = {
  args: {
    ...Default.args,
    $buttonStyle: ButtonStyle.EmptyTertiary,
  },
};

export const IsLeftIconVisible: Story = {
  args: {
    ...Default.args,
    $isRightIconVisible: false,
    $leftIcon: BlankLine,
  },
};

export const IsRightIconVisible: Story = {
  args: {
    ...Default.args,
    $isLeftIconVisible: false,
    $rightIcon: BlankLine,
  },
};

export const IsIconInvisible: Story = {
  args: {
    ...Default.args,
    $isLeftIconVisible: false,
    $isRightIconVisible: false,
  },
};

export const IcBtn: Story = {
  args: {
    $size: "md",
    $buttonStyle: ButtonStyle.SolidBrand,
    $buttonType: "iconButton",
    $leftIcon: BlankLine,
    $isLeftIconVisible: true,
    $isRightIconVisible: false,
  },
};
