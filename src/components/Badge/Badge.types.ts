import {
  BADGE_COMPONENT_TYPE_COLOR,
  BADGE_COMPONENT_TYPE_SIZE,
  BADGE_LABEL_SIZE,
} from "./Badge.theme";

/**
 * Badge 컴포넌트에 필요한 style props입니다
 */
export interface IBadgeStyle {
  $variant: "dot" | "new" | "count";
}

/**
 * Badge 컴포넌트에 필요한 props입니다
 */
export interface IBadge extends IBadgeStyle {
  text?: string;
}

interface IColor {
  background: string;
  text: string;
}

export interface IStyle {
  solid: IColor;
  transparent: IColor;
  outlined: IColor & { border: string };
}

export interface IBadgeLabelFeedbackColor {
  none: IStyle;
  negative: IStyle;
  info: IStyle;
  positive: IStyle;
  notification: IStyle;
}

/**
 * Badge/Label 컴포넌트의 styled-component에 기본적으로 필요한 props입니다
 */
export interface IBadgeLabelBasicStyle {
  $feedback: keyof IBadgeLabelFeedbackColor;
  $style: keyof IStyle;
  $size: keyof typeof BADGE_LABEL_SIZE;
}

/**
 * Badge/Label 컴포넌트의 styled-component에 추가적으로 필요한 props입니다
 */
export interface IBadgeLabelStyle extends IBadgeLabelBasicStyle {
  $variant: "labelOnly" | "rightIcon";
}

/**
 * Badge/Label 컴포넌트의 styled-component에 필요한 props입니다
 */
export interface IBadgeLabel extends IBadgeLabelStyle {
  text: string;
}

/**
 * Badge/componentType 컴포넌트에 필요한 props입니다
 */
export interface IBadgeComponentType {
  $type: keyof typeof BADGE_COMPONENT_TYPE_COLOR;
  $style: "solid" | "transparent";
  $size: keyof typeof BADGE_COMPONENT_TYPE_SIZE;
}
