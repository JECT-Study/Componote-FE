export const FOOTER_TEXT = {
  termsText: "이용약관",
  policyText: "개인정보 처리방침",
  reservedText: "© 2024 Componote. All rights reserved.",
};

export const BADGE_COMPONENT_TYPE_TEXT = {
  input: "Input 입력",
  display: "Display 표시",
  feedback: "Feedback 반응",
  navigation: "Navigation 안내",
};

export const NAVBAR_ITEM_TEXT = {
  component: "컴포넌트",
  designSystem: "디자인 시스템",
  serviceInfo: "서비스 안내",
  login: "로그인",
  inputPlaceholder: "컴포넌트나 디자인 시스템을 검색해 보세요...",
};

export const BANNER_TEXT = {
  component: {
    titleText: "컴포넌트",
    descriptionText:
      "UI 컴포넌트는 사용자 인터페이스를 구성하는 재사용 가능한 독립적인 요소입니다.",
  },
  designSystem: {
    titleText: "디자인 시스템",
    descriptionText:
      "디자인 시스템은 사용자 인터페이스를 일관성 있게 구축하기 위한 원칙, 가이드라인, 컴포넌트, 도구들의 체계적인 집합입니다.",
  },
  announcement: {
    titleText: "서비스 안내",
    descriptionText: "컴포노트를 이용하는 방법에 대해 안내해 드려요.",
  },
  bookmark: {
    titleText: "내 북마크",
    descriptionText: "북마크한 컴포넌트와 디자인 시스템들을 살펴보세요.",
  },
  onboarding: {
    subTitleText: "사용자 인터페이스를 위한",
    titleText: "컴포넌트 저장소",
    descriptionText: `컴포노트는 UI를 디자인하고 개발하는 데에 사용되는 컴포넌트에 대한 정보를 소개합니다.\n여러 직군들이 컴포넌트를 어떻게 디자인하고 개발하는지 경험을 나눌 수 있어요.`,
    buttonText: "컴포넌트 목록 보러가기",
    calloutTitleText1: "컴포노트가 처음이신가요?",
    calloutBodyText1: "간단한 서비스 이용 안내를 도와드릴게요",
    calloutTitleText2: "컴포넌트가 무엇인가요?",
    calloutBodyText2: "사용자 인터페이스를 구성하는 컴포넌트에 대해 알려드려요",
  },
  profile: {
    loginInfoText: "로그인으로 가입했어요",
    emailButtonText: "이메일 인증하기",
    editButtonText: "프로필 편집하기",
  },
};

export const DIALOG_TEXT = {
  close: "닫기",
  login: {
    titleText: "로그인/회원가입",
    bodyText:
      "컴포노트에 로그인하면, 사람들과 컴포넌트에 대해 소통할 수 있어요.",
    socialGoogle: "Google 로 시작하기",
    socialGitHub: "GitHub 으로 시작하기",
  },
  report: {
    titleText: "댓글 신고하기",
    bodyText:
      "신고 사유가 적합하지 않다고 판단될 경우, 해당 신고는 처리되지 않아요.",
    placeholderText: "신고 사유를 선택해주세요...",
    cancelButtonText: "취소하기",
    submitButtonText: "신고하기",
  },
  emailVerification: {
    titleText: "컴포노트의 다양한 소식을 받아보세요!",
    bodyText: "컴포노트의 다양한 소식을 이메일로 빠르게 알려드려요.",
    cancelButtonText: "나중에 할게요",
    confirmButtonText: "이메일 인증하기",
  },
  verification: {
    titleText: "이메일 인증하기",
    bodyText:
      "이메일 정보를 추가하고, 컴포노트에서 일어나는 다양한 일들을 알아보세요.",
    socialGoogle: "Google 이메일 인증하기",
  },
  complete: {
    titleText: "이메일 인증 완료",
    bodyText: "앞으로 아래와 같은 알림들을 이메일로 받아 보실 수 있어요.",
    buttonText: "시작하기",
    cardText: "내가 작성한 댓글 좋아요, 대댓글 알림",
    confirmButtonText: "확인",
  },
};

export const SIGNIN_TEXT = {
  titleText: "회원가입",
  profileText: "사용하실 프로필을 설정해 주세요.",
  job: {
    titleText: "직군을 선택해 주세요.",
    bodyText: "여러 직군을 겸하고 계신다면, 가장 가까운 직군을 골라주세요.",
  },
  cancelButtonText: "취소하기",
  submitButtonText: "회원가입 완료",
};

export const STAR_ICON = "*";


export const ANNOUNCE_PAGE_TEXT = {
  emptyState: (tabLabel: string) => `아직 ${tabLabel}이 없어요`,

export const BOOKMARK_PAGE_TEXT = {
  emptyState: (tabLabel: string) => `아직 북마크한 ${tabLabel} 없어요`,
};
