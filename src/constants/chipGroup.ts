import GitHubIcon from "@/assets/icons/github-fill.svg";
import ZeroHeightIcon from "@/assets/icons/zeroheight-fill.svg";
import FigmaIcon from "@/assets/icons/figma-line.svg";
import StorybookIcon from "@/assets/icons/storybook-fill.svg";
import {
  DesignSystemFilterType,
  PlatformFilter,
} from "@/types/enum/designSystemFilters";
import {
  contentFilterLabels,
  DesignSystemFilterTypeLabels,
  deviceFilterLabels,
  platformFilterLabels,
  techFilterLabels,
} from "./designSystemFilterLabel";

export const COMPONENT_CHIPS = [
  "전체",
  "Input 입력",
  "Display 표시",
  "Feedback 반응",
  "Navigation 안내",
];

type ChipContent = {
  text: string;
  icon?: React.ElementType;
  responseName: string;
};

type ChipGroup = {
  text: string;
  contents: ChipContent[];
};

export const DESIGN_SYSTEM_CHIP_GROUP: Record<
  Lowercase<keyof typeof DesignSystemFilterType>,
  ChipGroup
> = {
  platform: {
    text: DesignSystemFilterTypeLabels[DesignSystemFilterType.PLATFORM],
    contents: [
      {
        text: platformFilterLabels[PlatformFilter.GITHUB],
        icon: GitHubIcon,
        responseName: PlatformFilter.GITHUB,
      },
      {
        text: platformFilterLabels[PlatformFilter.FIGMA],
        icon: FigmaIcon,
        responseName: PlatformFilter.FIGMA,
      },
      {
        text: platformFilterLabels[PlatformFilter.STORYBOOK],
        icon: StorybookIcon,
        responseName: PlatformFilter.STORYBOOK,
      },
      {
        text: platformFilterLabels[PlatformFilter.ZEROHEIGHT],
        icon: ZeroHeightIcon,
        responseName: PlatformFilter.ZEROHEIGHT,
      },
    ],
  },
  tech: {
    text: DesignSystemFilterTypeLabels[DesignSystemFilterType.TECH],
    contents: Object.entries(techFilterLabels).map(([key, text]) => ({
      text,
      responseName: key,
    })),
  },
  content: {
    text: DesignSystemFilterTypeLabels[DesignSystemFilterType.CONTENT],
    contents: Object.entries(contentFilterLabels).map(([key, text]) => ({
      text,
      responseName: key,
    })),
  },
  device: {
    text: DesignSystemFilterTypeLabels[DesignSystemFilterType.DEVICE],
    contents: Object.entries(deviceFilterLabels).map(([key, text]) => ({
      text,
      responseName: key,
    })),
  },
};
