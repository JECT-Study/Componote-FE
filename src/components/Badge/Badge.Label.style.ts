"use client";

import styled, { DefaultTheme } from "styled-components";
import checkLine from "@/assets/icons/check-line.svg";

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
    typo: (theme: DefaultTheme) => theme.typography?.body["2xs"],
    icon: "2xs",
    padding: {
      labelOnly: (theme: DefaultTheme) =>
        `${theme.gap?.["6xs"]} ${theme.gap?.["2xs"]}`,
      rightIcon: (theme: DefaultTheme) =>
        `${theme.gap?.["6xs"]} ${theme.gap?.["4xs"]} ${theme.gap?.["6xs"]} ${theme.gap?.["2xs"]}`,
    },
  },
  sm: {
    typo: (theme: DefaultTheme) => theme.typography?.label.xs,
    icon: "xs",
    padding: {
      labelOnly: (theme: DefaultTheme) =>
        `${theme.gap?.["5xs"]} ${theme.gap?.xs}`,
      rightIcon: (theme: DefaultTheme) =>
        `${theme.gap?.["5xs"]} ${theme.gap?.["3xs"]} ${theme.gap?.["5xs"]} ${theme.gap?.xs}`,
    },
  },
  md: {
    typo: (theme: DefaultTheme) => theme.typography?.label.sm,
    icon: "sm",
    padding: {
      labelOnly: (theme: DefaultTheme) =>
        `${theme.gap?.["4xs"]} ${theme.gap?.sm}`,
      rightIcon: (theme: DefaultTheme) =>
        `${theme.gap?.["4xs"]} ${theme.gap?.["2xs"]} ${theme.gap?.["4xs"]} ${theme.gap?.sm}`,
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

  gap: ${({ theme }) => theme.gap?.["6xs"]};
  padding: ${(props) =>
    sizeMap[props.$size].padding[props.$variant](props.theme)};

  border-radius: ${({ theme }) => theme.radius?.["2xs"]};
  border: ${(props) => (props.$style === "outlined" ? "solid" : "0")};
  border-width: ${({ theme }) => theme.stroke?.normal};

  background-color: ${(props) =>
    props.theme.colors?.light[
      feedbackColor[props.$feedback][props.$style].background
    ]};

  color: ${(props) =>
    props.theme.colors?.light[
      feedbackColor[props.$feedback][props.$style].text
    ]};

  ${(props) => sizeMap[props.$size].typo(props.theme)};
`;

export const BadgeLabelCheckIcon = styled(checkLine)<IBadgeLabelBasicStyle>`
  width: ${(props) => props.theme.iconSize?.[sizeMap[props.$size].icon]};
  height: ${(props) => props.theme.iconSize?.[sizeMap[props.$size].icon]};
  path {
    fill: ${(props) =>
      props.theme.colors?.light[
        feedbackColor[props.$feedback][props.$style].text
      ]};
  }
`;
