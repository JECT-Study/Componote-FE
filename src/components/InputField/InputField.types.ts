export interface IIconWrapper extends React.HTMLProps<HTMLElement> {
  IconComponent: React.ElementType | undefined;
}

export interface IInputComponent {
  $size?: "md" | "sm";
  $isNegative?: boolean;
  $isFocused?: boolean;
}

export interface IInputField extends IInputComponent {
  $icon?: React.ElementType;
  helperText?: string;
  label?: React.ReactNode;
  placeholderText: string;
  $labelVisible: boolean;
  $helperVisible: boolean;
}
