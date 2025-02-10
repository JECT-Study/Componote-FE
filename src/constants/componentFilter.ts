import {
  ComponentFilterType,
} from "@/types/enum/componentFilter";

export const COMPONENT_FILTER_TYPE: { [key: number]: string } = {
  [ComponentFilterType.ALL]: "",
  [ComponentFilterType.INPUT]: "INPUT",
  [ComponentFilterType.DISPLAY]: "DISPLAY",
  [ComponentFilterType.FEEDBACK]: "FEEDBACK",
  [ComponentFilterType.NAVIGATION]: "NAVIGATION",
};
