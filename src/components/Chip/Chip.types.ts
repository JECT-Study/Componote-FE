import sizeMap from "./Chip.theme";

export interface IChip {
  text: string;
  IconComponent?: React.ElementType;
  onClick: () => void;
}

export interface IChipComponent {
  $isInversed?: boolean;
  $isSelected?: boolean;
  $isDisabled?: boolean;
  $size: keyof typeof sizeMap;
}

export interface IIconWrapper {
  IconComponent: React.ElementType;
}

export interface IChipGroup {
  $variant: "platform" | "tech" | "contents" | "device";
}
