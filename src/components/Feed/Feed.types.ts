/** my comment feed component에서 사용되는 props type입니다. */
export interface IMyComponentFeed {
  $variant: "reply" | "comment";
  $src?: string;
  otherPeopleText?: string;
  componentName: string;
  dateText: string;
  bodyText: string;
}

/** notification feed component에서 사용되는 props type입니다. */
export interface INotificationFeed {
  $variant: "like" | "reply";
  $src?: string;
  userName: string;
  notificationTime: string;
  componentName: string;
  myCommentText: string;
  replyText: string;
}
