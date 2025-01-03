import type { Meta, StoryObj } from "@storybook/react";
import { ContextMenu } from "../../components";

const meta = {
  title: "Components/ContextMenu",
  component: ContextMenu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ContextMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <ContextMenu.Item
          labelText="아이템 레이블"
          $variant="labelOnly"
          $size="sm"
        />
        <ContextMenu.Item
          labelText="아이템 레이블"
          $variant="labelOnly"
          $size="sm"
        />
        <ContextMenu.Item
          labelText="아이템 레이블"
          $variant="labelOnly"
          $size="sm"
        />
        <ContextMenu.Item
          labelText="아이템 레이블"
          $variant="labelOnly"
          $size="sm"
        />
        <ContextMenu.Item
          labelText="아이템 레이블"
          $variant="labelOnly"
          $size="sm"
        />
        <ContextMenu.Item
          labelText="아이템 레이블"
          $variant="labelOnly"
          $size="sm"
        />
        <ContextMenu.Item
          labelText="아이템 레이블"
          $variant="labelOnly"
          $size="sm"
        />
        <ContextMenu.Item
          labelText="아이템 레이블"
          $variant="labelOnly"
          $size="sm"
        />
        <ContextMenu.Item
          labelText="아이템 레이블"
          $variant="labelOnly"
          $size="sm"
        />
      </>
    ),
  },
};
