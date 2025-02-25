import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "../components";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    $src: {
      control: { type: "radio" },
      options: [
        null,
        "https://i.natgeofe.com/n/4cebbf38-5df4-4ed0-864a-4ebeb64d33a4/NationalGeographic_1468962_3x4.jpg",
      ],
    },
    $size: {
      control: { type: "radio" },
      options: ["xs", "sm", "md", "lg", "xl", "2xl"],
    },
    $badgeVisible: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    $size: "md",
  },
};

export const AvatarNoBadge = {
  args: {
    ...Default.args,
    $badgeVisible: false,
  },
};

export const AvatarImage = {
  args: {
    ...Default.args,
    $src: "https://i.natgeofe.com/n/4cebbf38-5df4-4ed0-864a-4ebeb64d33a4/NationalGeographic_1468962_3x4.jpg",
  },
};

export const AvatarXs = {
  args: {
    ...Default.args,
    $size: "xs",
  },
};

export const AvatarSm = {
  args: {
    ...Default.args,
    $size: "sm",
  },
};

export const AvatarMd = {
  args: {
    ...Default.args,
    $size: "md",
  },
};

export const AvatarLg = {
  args: {
    ...Default.args,
    $size: "lg",
  },
};

export const AvatarXl = {
  args: {
    ...Default.args,
    $size: "xl",
  },
};

export const Avatar2xl = {
  args: {
    ...Default.args,
    $size: "2xl",
  },
};
