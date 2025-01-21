import { CALLOUT_INTERACTIVE_SIZE, CALLOUT_SIZE } from "./Callout.theme";

/**
 * Callout 컴포넌트에 필요한 style props입니다
 */
export interface ICalloutStyle {
  $size: keyof typeof CALLOUT_SIZE;
}

/**
 * Callout 컴포넌트에 필요한 props입니다
 */
export interface ICallout extends ICalloutStyle {
  titleText: string;
  bodyText?: string;
  buttonLabelText?: string;
  onClick?: () => void;
}

/**
 * Callout/Interactive 컴포넌트에 필요한 style props입니다
 */
export interface ICalloutInteractiveStyle {
  $size: keyof typeof CALLOUT_INTERACTIVE_SIZE;
  $disabled?: boolean;
}

/**
 * Callout/Interactive 컴포넌트에 필요한 props입니다
 */
export interface ICalloutInteractive extends ICalloutInteractiveStyle {
  titleText: string;
  bodyText?: string;
}
