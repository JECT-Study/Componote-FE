export interface IIconWrapper extends React.HTMLProps<HTMLElement> {
  IconComponent: React.ElementType | undefined;
}

export interface IInputComponent {
  $size?: "md" | "sm";
  $isNagative?: boolean;
  $isFocused?: boolean;
}

export interface IInputField extends IInputComponent {
  $icon?: React.ElementType;
  helperText?: string;
  labelText?: string;
  placeholderText: string;
  $iconVisible: boolean;
  $labelVisible: boolean;
  $helperVisible: boolean;
}
