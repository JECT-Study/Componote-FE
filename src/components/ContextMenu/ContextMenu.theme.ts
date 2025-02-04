import DESIGN_SYSTEM from "@/styles/designSystem";
import { DefaultTheme } from "styled-components";
import { InteractionVariant } from "../Interaction/Interaction.types";
import { BadgeLabelFeedback } from "../Badge/Badge.types";

export const CONTEXT_MENU_ITEM_SIZE = {
  sm: {
    paddingY: DESIGN_SYSTEM.gap["3xs"],
    paddingX: DESIGN_SYSTEM.gap.xs,
    itemLabelText: DESIGN_SYSTEM.typography.label.xs,
    iconSize: DESIGN_SYSTEM.iconSize.xs,
  },
  md: {
    paddingY: DESIGN_SYSTEM.gap.xs,
    paddingX: DESIGN_SYSTEM.gap.md,
    itemLabelText: DESIGN_SYSTEM.typography.label.md,
    iconSize: DESIGN_SYSTEM.iconSize.md,
  },
};

export const CONTEXT_MENU_ITEM_FEEDBACK_COLOR = {
  normal: {
    itemLabelTextColor: (theme: DefaultTheme) => theme.light["object-boldest"],
    interaction: InteractionVariant.DEFAULT,
    label: BadgeLabelFeedback.NONE,
  },
  info: {
    itemLabelTextColor: (theme: DefaultTheme) =>
      theme.light["feedback-information"],
    interaction: InteractionVariant.INFO,
    label: BadgeLabelFeedback.INFO,
  },
  negative: {
    itemLabelTextColor: (theme: DefaultTheme) =>
      theme.light["feedback-negative"],
    interaction: InteractionVariant.NEGATIVE,
    label: BadgeLabelFeedback.NEGATIVE,
  },
};
