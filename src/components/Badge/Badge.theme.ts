import DESIGN_SYSTEM from "@/styles/designSystem";
import { IBadgeLabelFeedbackColor } from "./Badge.types";

export const BADGE_LABEL_FEEDBACK_COLOR: IBadgeLabelFeedbackColor = {
  none: {
    solid: { background: "fill-hero", text: "object-static-inv-hero" },
    transparent: { background: "fill-trans-subtlest", text: "object-bold" },
    outlined: {
      background: "transparent",
      text: "object-bold",
      border: "border-trans-normal",
    },
  },
  negative: {
    solid: { background: "feedback-negative", text: "object-static-inv-hero" },
    transparent: {
      background: "feedback-trans-negative",
      text: "feedback-negative",
    },
    outlined: {
      background: "transparent",
      text: "feedback-negative",
      border: "feedback-negative",
    },
  },
  info: {
    solid: {
      background: "feedback-information",
      text: "object-static-inv-hero",
    },
    transparent: {
      background: "feedback-trans-information",
      text: "feedback-information",
    },
    outlined: {
      background: "transparent",
      text: "feedback-information",
      border: "feedback-information",
    },
  },
  positive: {
    solid: { background: "feedback-positive", text: "object-static-inv-hero" },
    transparent: {
      background: "feedback-trans-positive",
      text: "feedback-positive",
    },
    outlined: {
      background: "transparent",
      text: "feedback-positive",
      border: "feedback-positive",
    },
  },
  notification: {
    solid: {
      background: "feedback-notification",
      text: "object-static-inv-hero",
    },
    transparent: {
      background: "feedback-trans-notification",
      text: "feedback-notification",
    },
    outlined: {
      background: "transparent",
      text: "feedback-notification",
      border: "feedback-notification",
    },
  },
};

export const BADGE_LABEL_SIZE = {
  xs: {
    typography: DESIGN_SYSTEM.typography.body["2xs"],
    iconSize: DESIGN_SYSTEM.iconSize["2xs"],
    padding: {
      labelOnly: `${DESIGN_SYSTEM.gap["6xs"]} ${DESIGN_SYSTEM.gap["2xs"]}`,
      rightIcon: `${DESIGN_SYSTEM.gap["6xs"]} ${DESIGN_SYSTEM.gap["4xs"]} ${DESIGN_SYSTEM.gap["6xs"]} ${DESIGN_SYSTEM.gap["2xs"]}`,
    },
  },
  sm: {
    typography: DESIGN_SYSTEM.typography.label.xs,
    iconSize: DESIGN_SYSTEM.iconSize.xs,
    padding: {
      labelOnly: `${DESIGN_SYSTEM.gap["5xs"]} ${DESIGN_SYSTEM.gap.xs}`,
      rightIcon: `${DESIGN_SYSTEM.gap["5xs"]} ${DESIGN_SYSTEM.gap["3xs"]} ${DESIGN_SYSTEM.gap["5xs"]} ${DESIGN_SYSTEM.gap.xs}`,
    },
  },
  md: {
    typography: DESIGN_SYSTEM.typography.label.sm,
    iconSize: DESIGN_SYSTEM.iconSize.sm,
    padding: {
      labelOnly: `${DESIGN_SYSTEM.gap["4xs"]} ${DESIGN_SYSTEM.gap.sm}`,
      rightIcon: `${DESIGN_SYSTEM.gap["4xs"]} ${DESIGN_SYSTEM.gap["2xs"]} ${DESIGN_SYSTEM.gap["4xs"]} ${DESIGN_SYSTEM.gap.sm}`,
    },
  },
};

export const BADGE_COMPONENT_TYPE_COLOR = {
  INPUT: "cyan",
  DISPLAY: "violet",
  FEEDBACK: "rose",
  NAVIGATION: "lime",
};

export const BADGE_COMPONENT_TYPE_SIZE = {
  xs: {
    typography: DESIGN_SYSTEM.typography.body["2xs"],
    gap: DESIGN_SYSTEM.gap["6xs"],
    padding: `${DESIGN_SYSTEM.gap["6xs"]} ${DESIGN_SYSTEM.gap["2xs"]}`,
  },
  sm: {
    typography: DESIGN_SYSTEM.typography.label.xs,
    gap: DESIGN_SYSTEM.gap["5xs"],
    padding: `${DESIGN_SYSTEM.gap["5xs"]} ${DESIGN_SYSTEM.gap.xs}`,
  },
  md: {
    typography: DESIGN_SYSTEM.typography.label.sm,
    gap: DESIGN_SYSTEM.gap["4xs"],
    padding: `${DESIGN_SYSTEM.gap["4xs"]} ${DESIGN_SYSTEM.gap.sm}`,
  },
};
