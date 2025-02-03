import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Pagination } from "@/components";

const meta = {
  title: "Components/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    totalPages: {
      control: { type: "number" },
      defaultValue: 20,
    },
    currentPage: {
      control: { type: "number" },
      defaultValue: 1,
    },
    onPageChange: {
      action: "pageChanged",
    },
  },
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage);

    const handlePageChange = (page: number) => {
      setCurrentPage(page);
      args.onPageChange(page);
    };

    return (
      <Pagination
        totalPages={args.totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    );
  },
  args: {
    totalPages: 20,
    currentPage: 1,
    onPageChange: () => 1,
  },
};
