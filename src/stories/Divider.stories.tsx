import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "../components";

const meta = {
  title: "Components/Divider",
  component: Divider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    stroke: {
      control: { type: "select" },
      options: ["normal", "bold", "bolder", "boldest"],
      defaultValue: "normal",
    },
    layout: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
      defaultValue: "horizontal",
    },
  },
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    stroke: "normal",
    layout: "horizontal",
  },
};

export const BoldHorizontal: Story = {
  args: {
    stroke: "bold",
    layout: "horizontal",
  },
};

export const BolderHorizontal: Story = {
  args: {
    stroke: "bolder",
    layout: "horizontal",
  },
};

export const BoldestHorizontal: Story = {
  args: {
    stroke: "boldest",
    layout: "horizontal",
  },
};

export const NormalVertical: Story = {
  args: {
    stroke: "normal",
    layout: "vertical",
  },
};

export const BoldVertical: Story = {
  args: {
    stroke: "bold",
    layout: "vertical",
  },
};

export const BolderVertical: Story = {
  args: {
    stroke: "bolder",
    layout: "vertical",
  },
};

export const BoldestVertical: Story = {
  args: {
    stroke: "boldest",
    layout: "vertical",
  },
};
