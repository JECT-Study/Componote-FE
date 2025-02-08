import {
  ContentFilter,
  DeviceFilter,
  DesignSystemFilterType,
  PlatformFilter,
  TechFilter,
} from "@/types/enum/designSystemFilters";

// 필터 타입별 레이블
export const DesignSystemFilterTypeLabels: {
  [key in DesignSystemFilterType]: string;
} = {
  [DesignSystemFilterType.DEVICE]: "디바이스 필터",
  [DesignSystemFilterType.TECH]: "기술 필터",
  [DesignSystemFilterType.CONTENT]: "콘텐츠 필터",
  [DesignSystemFilterType.PLATFORM]: "플랫폼 필터",
};

// 디바이스 필터 레이블
export const deviceFilterLabels: { [key in DeviceFilter]: string } = {
  [DeviceFilter.DESKTOP]: "데스크톱",
  [DeviceFilter.MOBILE]: "모바일",
};

// 기술 필터 레이블
export const techFilterLabels: { [key in TechFilter]: string } = {
  [TechFilter.ANGULAR]: "Angular",
  [TechFilter.CSS]: "CSS",
  [TechFilter.CSS_IN_JS]: "CSS in JS",
  [TechFilter.CSS_MODULES]: "CSS Modules",
  [TechFilter.HTML]: "HTML",
  [TechFilter.REACT]: "React",
  [TechFilter.SASS]: "Sass",
  [TechFilter.STIMULUS]: "Svelte",
  [TechFilter.SVELTE]: "Svelte",
  [TechFilter.TAILWIND_CSS]: "Tailwind CSS",
  [TechFilter.TWIG]: "Twig",
  [TechFilter.VANILLA_JS]: "Vanilla JS",
  [TechFilter.VUE]: "Vue",
  [TechFilter.WEB_COMPONENTS]: "Web Components",
  [TechFilter.NONE]: "알 수 없음",
};

// 콘텐츠 필터 레이블
export const contentFilterLabels: { [key in ContentFilter]: string } = {
  [ContentFilter.DESIGN_TOKEN]: "디자인 토큰",
  [ContentFilter.ICON]: "아이콘",
  [ContentFilter.OPENSOURCE]: "오픈소스",
  [ContentFilter.EXAMPLE]: "용례",
  [ContentFilter.BRAND_PRINCIPLES]: "브랜드 원칙",
  [ContentFilter.ACCESSIBILITY_INFORMATION]: "접근성 안내",
  [ContentFilter.VOICE_AND_TONE]: "보이스와 톤",
  [ContentFilter.CODE_EXAMPLE]: "코드 예제",
};

// 플랫폼 필터 레이블
export const platformFilterLabels: { [key in PlatformFilter]: string } = {
  [PlatformFilter.GITHUB]: "Github",
  [PlatformFilter.FIGMA]: "Figma",
  [PlatformFilter.STORYBOOK]: "Storybook",
  [PlatformFilter.ZEROHEIGHT]: "ZeroHeight",
};
