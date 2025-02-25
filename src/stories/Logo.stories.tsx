import type { Meta, StoryObj } from "@storybook/react";
import { Logo } from "../components";

const meta = {
  title: "Components/Logo",
  component: Logo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    $isFooter: false,
  },
};

export const Footer: Story = {
  args: {
    $isFooter: true,
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: "black", padding: "1rem" }}>
        <Story />
      </div>
    ),
  ],
};
