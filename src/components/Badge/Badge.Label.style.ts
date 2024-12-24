"use client";

import styled from "styled-components";
import checkLine from "@/assets/icons/check-line.svg";
import DESIGN_SYSTEM from "@/styles/designSystem";

/**
 * Badge/Label 컴포넌트의 styled-component에 기본적으로 필요한 props입니다
 */
interface IBadgeLabelBasicStyle {
  $feedback: keyof FeedbackColorType;
  $style: keyof IStyle;
  $size: keyof typeof sizeMap;
}

/**
 * Badge/Label 컴포넌트의 styled-component에 추가적으로 필요한 props입니다
 */
export interface IBadgeLabelStyle extends IBadgeLabelBasicStyle {
  $variant: "labelOnly" | "rightIcon";
}

interface IColor {
  background: string;
  text: string;
}

interface IStyle {
  solid: IColor;
  transparent: IColor;
  outlined: IColor & { border: string };
}

interface FeedbackColorType {
  none: IStyle;
  negative: IStyle;
  info: IStyle;
  positive: IStyle;
  notification: IStyle;
}

const feedbackColor: FeedbackColorType = {
  none: {
    solid: { background: "fill-hero", text: "object-static-inv-hero" },
    transparent: { background: "fill-trans-subtlest", text: "object-bold" },
    outlined: {
      background: "transparent",
      text: "object-bold",
      border: "border-trans-normal",
    },
  },
  negative: {
    solid: { background: "feedback-negative", text: "object-static-inv-hero" },
    transparent: {
      background: "feedback-trans-negative",
      text: "feedback-negative",
    },
    outlined: {
      background: "transparent",
      text: "feedback-negative",
      border: "feedback-negative",
    },
  },
  info: {
    solid: {
      background: "feedback-information",
      text: "object-static-inv-hero",
    },
    transparent: {
      background: "feedback-trans-information",
      text: "feedback-information",
    },
    outlined: {
      background: "transparent",
      text: "feedback-information",
      border: "feedback-information",
    },
  },
  positive: {
    solid: { background: "feedback-positive", text: "object-static-inv-hero" },
    transparent: {
      background: "feedback-trans-positive",
      text: "feedback-positive",
    },
    outlined: {
      background: "transparent",
      text: "feedback-positive",
      border: "feedback-positive",
    },
  },
  notification: {
    solid: {
      background: "feedback-notification",
      text: "object-static-inv-hero",
    },
    transparent: {
      background: "feedback-trans-notification",
      text: "feedback-notification",
    },
    outlined: {
      background: "transparent",
      text: "feedback-notification",
      border: "feedback-notification",
    },
  },
};

const sizeMap = {
  xs: {
    typography: DESIGN_SYSTEM.typography.body["2xs"],
    iconSize: DESIGN_SYSTEM.iconSize["2xs"],
    padding: {
      labelOnly: `${DESIGN_SYSTEM.gap["6xs"]} ${DESIGN_SYSTEM.gap["2xs"]}`,
      rightIcon: `${DESIGN_SYSTEM.gap["6xs"]} ${DESIGN_SYSTEM.gap["4xs"]} ${DESIGN_SYSTEM.gap["6xs"]} ${DESIGN_SYSTEM.gap["2xs"]}`,
    },
  },
  sm: {
    typography: DESIGN_SYSTEM.typography.label.xs,
    iconSize: DESIGN_SYSTEM.iconSize.xs,
    padding: {
      labelOnly: `${DESIGN_SYSTEM.gap["5xs"]} ${DESIGN_SYSTEM.gap.xs}`,
      rightIcon: `${DESIGN_SYSTEM.gap["5xs"]} ${DESIGN_SYSTEM.gap["3xs"]} ${DESIGN_SYSTEM.gap["5xs"]} ${DESIGN_SYSTEM.gap.xs}`,
    },
  },
  md: {
    typography: DESIGN_SYSTEM.typography.label.sm,
    iconSize: DESIGN_SYSTEM.iconSize.sm,
    padding: {
      labelOnly: `${DESIGN_SYSTEM.gap["4xs"]} ${DESIGN_SYSTEM.gap.sm}`,
      rightIcon: `${DESIGN_SYSTEM.gap["4xs"]} ${DESIGN_SYSTEM.gap["2xs"]} ${DESIGN_SYSTEM.gap["4xs"]} ${DESIGN_SYSTEM.gap.sm}`,
    },
  },
};

export const BadgeLabelContainer = styled.div<IBadgeLabelStyle>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: fit-content;
  height: fit-content;

  gap: ${DESIGN_SYSTEM.gap["6xs"]};
  padding: ${(props) => sizeMap[props.$size].padding[props.$variant]};

  border-radius: ${DESIGN_SYSTEM.radius["2xs"]};
  border: ${(props) => (props.$style === "outlined" ? "solid" : "0")};
  border-width: ${DESIGN_SYSTEM.stroke.normal};

  background-color: ${(props) =>
    props.theme.light[feedbackColor[props.$feedback][props.$style].background]};

  color: ${(props) =>
    props.theme.light[feedbackColor[props.$feedback][props.$style].text]};

  ${(props) => sizeMap[props.$size].typography};
`;

export const BadgeLabelCheckIcon = styled(checkLine)<IBadgeLabelBasicStyle>`
  width: ${(props) => sizeMap[props.$size].iconSize};
  height: ${(props) => sizeMap[props.$size].iconSize};
  path {
    fill: ${(props) =>
      props.theme.light[feedbackColor[props.$feedback][props.$style].text]};
  }
`;
