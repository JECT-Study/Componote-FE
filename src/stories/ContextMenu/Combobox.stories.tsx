import type { Meta, StoryObj } from "@storybook/react";
import { Combobox, ContextMenu } from "../../components";

const meta = {
  title: "Components/ContextMenu/Combobox",
  component: Combobox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Combobox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <ContextMenu.Item
          labelText="아이템 레이블"
          subLabelText="서브 레이블"
          $variant="labelOnly"
          $size="md"
        />
        <ContextMenu.Item
          labelText="아이템 레이블"
          subLabelText="서브 레이블"
          $variant="labelOnly"
          $size="md"
        />
        <ContextMenu.Item
          labelText="아이템 레이블"
          subLabelText="서브 레이블"
          $variant="labelOnly"
          $size="md"
        />
        <ContextMenu.Item
          labelText="아이템 레이블"
          subLabelText="서브 레이블"
          $variant="labelOnly"
          $size="md"
        />
        <ContextMenu.Item
          labelText="아이템 레이블"
          subLabelText="서브 레이블"
          $variant="labelOnly"
          $size="md"
        />
        <ContextMenu.Item
          labelText="아이템 레이블"
          subLabelText="서브 레이블"
          $variant="labelOnly"
          $size="md"
        />
        <ContextMenu.Item
          labelText="아이템 레이블"
          subLabelText="서브 레이블"
          $variant="labelOnly"
          $size="md"
        />
        <ContextMenu.Item
          labelText="아이템 레이블"
          subLabelText="서브 레이블"
          $variant="labelOnly"
          $size="md"
        />
        <ContextMenu.Item
          labelText="아이템 레이블"
          subLabelText="서브 레이블"
          $variant="labelOnly"
          $size="md"
        />
        <ContextMenu.Item
          labelText="아이템 레이블"
          subLabelText="서브 레이블"
          $variant="labelOnly"
          $size="md"
        />
      </>
    ),
  },
};
