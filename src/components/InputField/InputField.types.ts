export interface IIconWrapper extends React.HTMLProps<HTMLElement> {
  IconComponent: React.ElementType | undefined;
}

export interface IInputComponent {
  $size?: "md" | "sm";
  $isNegative?: boolean;
  $isFocused?: boolean;
  $width?: string;
}

export interface IInputField extends IInputComponent {
  $icon?: React.ElementType;
  helperText?: string;
  label?: React.ReactNode;
  countLimit?: string;
  placeholderText: string;
  $labelVisible: boolean;
  $helperVisible: boolean;
}
