/** user section component에 사용되는 props type입니다. */
export interface IUserSection extends IUserSectionComponent {
  $src?: string;
  dateText?: string;
  nicknameText: string;
  jobText: string;
}

/** user section component의 style에 사용되는 props type입니다. */
export interface IUserSectionComponent {
  $status: "filled" | "editing";
}
