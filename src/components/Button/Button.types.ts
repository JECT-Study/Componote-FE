import { BUTTON_SIZE_MAP } from "./Button.theme";

export enum ButtonStyle {
  SolidBrand = "solidBrand",
  SolidPrimary = "solidPrimary",
  SolidSecondary = "solidSecondary",
  SolidTertiary = "solidTertiary",
  OutlinedPrimary = "outlinedPrimary",
  OutlinedSecondary = "outlinedSecondary",
  OutlinedTertiary = "outlinedTertiary",
  EmptyPrimary = "emptyPrimary",
  EmptySecondary = "emptySecondary",
  EmptyTertiary = "emptyTertiary",
}

export interface IButtonComponent {
  $size: keyof typeof BUTTON_SIZE_MAP;
  $buttonStyle: ButtonStyle;
  $buttonType?: "button" | "iconButton";
  $width?: string;
  $isDisabled?: boolean;
}

export interface IButton extends IButtonComponent {
  text?: string;
  $leftIcon?: React.ElementType;
  $rightIcon?: React.ElementType;
  onClick?: () => void;
}
