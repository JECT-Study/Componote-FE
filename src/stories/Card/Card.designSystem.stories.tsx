import type { Meta, StoryObj } from "@storybook/react";
import { BadgeLabel, Button, DesignSystemCard } from "@/components";
import { BadgeLabelFeedback } from "@/components/Badge/Badge.types";
import { ButtonStyle } from "@/components/Button/Button.types";

import githubIcon from "@/assets/icons/github-fill.svg";
import figmaIcon from "@/assets/icons/figma-line.svg";
import storybookIcon from "@/assets/icons/storybook-fill.svg";
import zeroheightIcon from "@/assets/icons/zeroheight-fill.svg";

const meta = {
  title: "Components/Card/DesignSystemCard",
  component: DesignSystemCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    $isDisabled: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof DesignSystemCard>;

export default meta;

type Story = StoryObj<typeof meta>;

const CardContainer = (StoryFn: () => JSX.Element) => {
  return (
    <div
      style={{
        width: "30rem",
        height: "23rem",
        padding: "1.25rem",
      }}
    >
      <StoryFn />
    </div>
  );
};

export const Default: Story = {
  args: {
    $bookmarkCount: "999+",
    designSystemName: "디자인 시스템 명",
    organizationName: "회사/단체 명",
    descriptionText: "설명 내용",
    deviceLabels: (
      <>
        <BadgeLabel
          $variant="labelOnly"
          text="데스크톱"
          $feedback={BadgeLabelFeedback.NONE}
          $style="solid"
          $size="xs"
        />
        <BadgeLabel
          $variant="labelOnly"
          text="모바일"
          $feedback={BadgeLabelFeedback.NONE}
          $style="solid"
          $size="xs"
        />
      </>
    ),
    labels: Array.from({ length: 16 }).map((_, index) => (
      <BadgeLabel
        key={index}
        $variant="labelOnly"
        text="레이블"
        $feedback={BadgeLabelFeedback.NONE}
        $style="transparent"
        $size="xs"
      />
    )),
    platformButtons: (
      <>
        <Button
          $size="md"
          $buttonType="iconButton"
          $leftIcon={githubIcon}
          $buttonStyle={ButtonStyle.OutlinedSecondary}
        />
        <Button
          $size="md"
          $buttonType="iconButton"
          $leftIcon={figmaIcon}
          $buttonStyle={ButtonStyle.OutlinedSecondary}
        />
        <Button
          $size="md"
          $buttonType="iconButton"
          $leftIcon={storybookIcon}
          $buttonStyle={ButtonStyle.OutlinedSecondary}
        />
        <Button
          $size="md"
          $buttonType="iconButton"
          $leftIcon={zeroheightIcon}
          $buttonStyle={ButtonStyle.OutlinedSecondary}
        />
      </>
    ),
  },
  decorators: [CardContainer],
};

export const DisabledCard: Story = {
  args: {
    ...Default.args,
    $isDisabled: true,
  },
  decorators: [CardContainer],
};
