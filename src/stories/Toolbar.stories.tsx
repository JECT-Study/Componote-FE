import type { Meta, StoryObj } from "@storybook/react";
import { Toolbar, ButtonList, ChipList } from "@/components";

function Layout(StoryFn: () => JSX.Element) {
  return (
    <div
      style={{
        width: "108rem",
        height: "20rem",
        paddingTop: "1.25rem",
      }}
    >
      <StoryFn />
    </div>
  );
}

const meta = {
  title: "Components/Toolbar",
  component: Toolbar,
  tags: ["autodocs"],
  decorators: [Layout],
} satisfies Meta<typeof Toolbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ComponentToolbar: Story = {
  args: {
    children: <ChipList />,
  },
};

export const DesignSystemToolbar: Story = {
  args: {
    children: <ButtonList />,
  },
};

export const WithTabToolbar: Story = {};
