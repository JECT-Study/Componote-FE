import GitHubIcon from "@/assets/icons/github-fill.svg";
import ZeroHeightIcon from "@/assets/icons/zeroheight-fill.svg";
import FigmaIcon from "@/assets/icons/figma-line.svg";
import StorybookIcon from "@/assets/icons/storybook-fill.svg";

export const COMPONENT_CHIPS = [
  "전체",
  "Input 입력",
  "Display 표시",
  "Feedback 반응",
  "Navigation 안내",
];

export const DESIGN_SYSTEM_CHIP_GROUP = {
  platform: {
    text: "플랫폼 필터",
    contents: ["GitHub", "Figma", "Storybook", "ZeroHeight"],
    icons: [GitHubIcon, FigmaIcon, StorybookIcon, ZeroHeightIcon],
  },
  tech: {
    text: "기술 필터",
    contents: [
      "Angular",
      "CSS",
      "CSS Modules",
      "CSS-in-JS",
      "HTML",
      "React",
      "Sass",
      "Stimulus",
      "Svelte",
      "Tailwind CSS",
      "Twig",
      "Vanilla JS",
      "Vue",
      "Web Components",
      "알 수 없음",
    ],
  },
  contents: {
    text: "콘텐츠 필터",
    contents: [
      "디자인 토큰",
      "보이스와 톤",
      "브랜드 원칙",
      "아이콘",
      "오픈소스",
      "용례",
      "코드 예제",
      "접근성 안내",
    ],
  },
  device: { text: "디바이스 필터", contents: ["데스크톱", "모바일"] },
};
