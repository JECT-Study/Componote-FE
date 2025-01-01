import DESIGN_SYSTEM from "@/styles/designSystem";
import { DefaultTheme } from "styled-components";
import { InteractionVariant } from "../Interaction/Interaction.types";
import { BadgeLabelFeedback } from "../Badge/Badge.types";

export const CONTEXT_MENU_ITEM_SIZE = {
  sm: {
    labelOnly: {
      width: "6.3125rem",
      height: "5rem",
    },
    checkbox: { width: "7.9375rem", height: "5rem" },
    leftIcon: { width: "7.9375rem", height: "5rem" },
    rightIcon: { width: "7.9375rem", height: "5rem" },
    badge: { width: "10.0625rem", height: "5.125rem" },
    itemLabelText: DESIGN_SYSTEM.typography.label.xs,
    iconSize: DESIGN_SYSTEM.iconSize.xs,
  },
  md: {
    labelOnly: {
      width: "7.4375rem",
      height: "5.6875rem",
    },
    checkbox: { width: "9.3125rem", height: "5.6875rem" },
    leftIcon: { width: "9.3125rem", height: "5.6875rem" },
    rightIcon: { width: "9.3125rem", height: "5.6875rem" },
    badge: { width: "11.1875rem", height: "5.6875rem" },
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
