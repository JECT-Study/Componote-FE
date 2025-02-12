export interface ICardComponent {
  $src?: string;
  $isDisabled?: boolean;
}

/* component card에 사용되는 props type입니다. */
export interface IComponentCard {
  $type: "INPUT" | "DISPLAY" | "FEEDBACK" | "NAVIGATION";
  componentName: string;
  descriptionText: string;
  $sampleCount: string;
  $commentCount: string;
  $bookmarkCount: string;
  onClick: () => void;
}

/* card item component에 사용되는 props type입니다. */
export interface ICardItem {
  $icon: React.ElementType;
  text: string;
}

export interface IDesignSystemCard {
  designSystemName: string;
  organizationName: string;
  descriptionText: string;
  deviceLabels: React.ReactNode;
  labels: React.ReactNode;
  platformButtons: React.ReactNode;
  $bookmarkCount: string;
  onClick: () => void;
}
