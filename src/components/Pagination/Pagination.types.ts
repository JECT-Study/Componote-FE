/** pagination item component에 사용되는 props type입니다. */
export interface IPaginationItem extends IPaginationItemComponent {
  label: string;
  onClick: () => void;
}

/** pagination item style에 사용되는 props type입니다. */
export interface IPaginationItemComponent {
  $isActivated: boolean;
}

/** pagination component에 사용되는 props type입니다. */
export interface IPagination {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

/** pagination button에 사용되는 props type입니다. */
export interface IPaginationButton {
  onClick: () => void;
  icon: React.ElementType;
}
