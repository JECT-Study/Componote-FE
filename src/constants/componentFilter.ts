import {
  ComponentFilterType,
  ComponentSortCondition,
} from "@/types/enum/componentFilter";

export const COMPONENT_FILTER_TYPE: { [key: number]: string } = {
  [ComponentFilterType.ALL]: "",
  [ComponentFilterType.INPUT]: "INPUT",
  [ComponentFilterType.DISPLAY]: "DISPLAY",
  [ComponentFilterType.FEEDBACK]: "FEEDBACK",
  [ComponentFilterType.NAVIGATION]: "NAVIGATION",
};

export const COMPONENT_SORT_CONDITION: { [key: string]: string } = {
  [ComponentSortCondition.NAME_ASC]: "asc",
  [ComponentSortCondition.VIEW_DESC]: "viewCount,desc",
  [ComponentSortCondition.COMMENT_DESC]: "commentCount,desc",
};
