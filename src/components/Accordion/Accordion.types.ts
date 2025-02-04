/** accordion component 컴포넌트에 사용되는 props type입니다. */
export interface IAccordion extends IAccordionComponent {
  titleText: string;
  dateText: string;
  bodyText: string;
  children?: React.ReactNode;
}

export interface IAccordionComponent {
  $size: "sm" | "md";
}

export interface IAccordionIcon extends IAccordionComponent {
  onClick: () => void;
}
