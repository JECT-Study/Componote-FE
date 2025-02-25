// 필터 타입 정의
export enum DesignSystemFilterType {
  DEVICE = "DEVICE",
  TECH = "TECH",
  CONTENT = "CONTENT",
  PLATFORM = "PLATFORM",
}

// 디바이스 필터
export enum DeviceFilter {
  DESKTOP = "DESKTOP",
  MOBILE = "MOBILE",
}

// 기술 필터
export enum TechFilter {
  ANGULAR = "ANGULAR",
  CSS = "CSS",
  CSS_IN_JS = "CSS_IN_JS",
  CSS_MODULES = "CSS_MODULES",
  HTML = "HTML",
  REACT = "REACT",
  SASS = "SASS",
  STIMULUS = "STIMULUS",
  SVELTE = "SVELTE",
  TAILWIND_CSS = "TAILWIND_CSS",
  TWIG = "TWIG",
  VANILLA_JS = "VANILLA_JS",
  VUE = "VUE",
  WEB_COMPONENTS = "WEB_COMPONENTS",
  NONE = "NONE",
}

// 콘텐츠 필터
export enum ContentFilter {
  DESIGN_TOKEN = "DESIGN_TOKEN",
  ICON = "ICON",
  OPENSOURCE = "OPENSOURCE",
  EXAMPLE = "EXAMPLE",
  BRAND_PRINCIPLES = "BRAND_PRINCIPLES",
  ACCESSIBILITY_INFORMATION = "ACCESSIBILITY_INFORMATION",
  VOICE_AND_TONE = "VOICE_AND_TONE",
  CODE_EXAMPLE = "CODE_EXAMPLE",
}

// 플랫폼 필터
export enum PlatformFilter {
  GITHUB = "GITHUB",
  FIGMA = "FIGMA",
  STORYBOOK = "STORYBOOK",
  ZEROHEIGHT = "ZEROHEIGHT",
}

// 필터 전부
export type DesignSystemFilter =
  | DeviceFilter
  | TechFilter
  | ContentFilter
  | PlatformFilter;

export enum DesignSystemSortCondition {
  NAME_ASC = "이름 순으로 정렬",
  // VIEW_DESC = "조회 순으로 정렬", → 보류
  RECOMMEND_DESC = "추천 순으로 정렬",
}
