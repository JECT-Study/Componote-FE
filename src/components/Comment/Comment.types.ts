/** user section component에 사용되는 props type입니다. */
export interface IUserSection extends IUserSectionComponent {
  $src?: string;
  dateText?: string;
  nicknameText: string;
  jobText: string;
}

/** user section component의 style에 사용되는 props type입니다. */
export interface IUserSectionComponent {
  $state: "filled" | "editing";
}

export interface IComment extends ICommentComponent {
  $src?: string;
  $isDisabled: boolean;
}

export interface ICommentComponent {
  $state?: "enabled" | "focus" | "disabled";
}

export interface IReplyComment extends IReplyCommentComponent {
  $isIndented: boolean;
  commentText: string;
}

export interface IReplyCommentComponent {
  $commentImgSrc?: string;
  $state?: "filled" | "editing";
}
