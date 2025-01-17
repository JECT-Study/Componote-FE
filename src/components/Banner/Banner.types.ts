type TPropsText = string;

/**
 * Banner variant @component @announcement @designSystem @bookmark에 필요한 props입니다
 */
export interface IDefaultBanner {
  titleText: TPropsText;
  descriptionText: TPropsText;
}

/**
 * Banner variant @onboarding에 필요한 props입니다
 */
export interface IOnboardingBanner {
  subTitleText: TPropsText;
  titleText: TPropsText;
  descriptionText: TPropsText;
}

/**
 * Banner variant @document에 필요한 props입니다
 */
export interface IDocumentBanner {
  titleText: TPropsText;
  componentListText: TPropsText;
  bodyText: TPropsText;
}

/**
 * Banner variant @profile 필요한 props입니다
 */
export interface IProfileBanner {
  $src?: string;
  userName: string;
  userJob: string;
  emailAddress: string;
  loginInfo: string;
}
