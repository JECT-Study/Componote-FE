import type { Meta, StoryObj } from "@storybook/react";
import { IndexPanel } from "../components";

const meta = {
  component: IndexPanel,
  title: "Components/IndexPanel",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof IndexPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    bannerRef: { current: null } as React.RefObject<HTMLDivElement>,
    explanationRef: { current: null } as React.RefObject<HTMLDivElement>,
    exampleRef: { current: null } as React.RefObject<HTMLDivElement>,
    referenceRef: { current: null } as React.RefObject<HTMLDivElement>,
    // commentsRef: { current: null } as React.RefObject<HTMLDivElement>,
  },
};
