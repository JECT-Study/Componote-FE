export interface IComponentCardComponent {
  $src?: string;
}

/* component card에 사용되는 props type입니다. */
export interface IComponentCard {
  componentName: string;
  descriptionText: string;
  $sampleCount: string;
  $commentCount: string;
  $bookmarkCount: string;
}

/* card item component에 사용되는 props type입니다. */
export interface ICardItem {
  $icon: React.ElementType;
  text: string;
}
