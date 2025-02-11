type TPropsText = string;

/**
 * Banner variant @component @announcement @designSystem @bookmark에 필요한 props입니다
 */
export interface IDefaultBanner {
  titleText: TPropsText;
  descriptionText: TPropsText;
}

/**
 * Banner variant @document에 필요한 props입니다
 */
export interface IDocumentBanner extends IDocumentBannerComponent {
  titleText: TPropsText;
  componentListText: TPropsText;
  bodyText: TPropsText;
  commentCount: TPropsText;
  bookmarkCount: TPropsText;
}

export interface IDocumentBannerComponent {
  $src?: string;
}

/**
 * Banner variant @profile 필요한 props입니다
 */
export interface IProfileBanner {
  $src?: string;
  userJob: string;
  emailAddress: string;
  loginInfo: string;
}
