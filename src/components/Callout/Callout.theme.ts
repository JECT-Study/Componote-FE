import DESIGN_SYSTEM from "@/styles/designSystem";

export const CALLOUT_SIZE = {
  sm: {
    containerPadding: `${DESIGN_SYSTEM.gap.lg} ${DESIGN_SYSTEM.gap.xl}`,
    titleText: DESIGN_SYSTEM.typography.label.bold.lg,
    maxHeight: "3.375rem",
    bodyText: DESIGN_SYSTEM.typography.label.xs,
    height: " 2.625rem",
  },
  md: {
    containerPadding: `${DESIGN_SYSTEM.gap.xl} ${DESIGN_SYSTEM.gap["2xl"]}`,
    titleText: DESIGN_SYSTEM.typography.title[1],
    maxHeight: "3.5rem",
    bodyText: DESIGN_SYSTEM.typography.label.md,
    height: "3rem",
  },
};

export const CALLOUT_INTERACTIVE_SIZE = {
  sm: {
    containerPadding: `${DESIGN_SYSTEM.gap.lg} ${DESIGN_SYSTEM.gap.xl}`,
    iconSize: DESIGN_SYSTEM.iconSize.lg,
    titleText: `
    ${DESIGN_SYSTEM.typography.label.bold.lg};
    height: 1.6875rem;
    max-height: 3.375rem;
  `,
    bodyText: `
    ${DESIGN_SYSTEM.typography.label.xs};
    height: 2.625rem;
  `,
  },
  md: {
    containerPadding: `${DESIGN_SYSTEM.gap.xl} ${DESIGN_SYSTEM.gap["2xl"]}`,
    iconSize: DESIGN_SYSTEM.iconSize.xl,
    titleText: `
    ${DESIGN_SYSTEM.typography.title[1]};
    height: 1.75rem;
    max-height: 3.5rem;
  `,
    bodyText: `
    ${DESIGN_SYSTEM.typography.label.md};
    height: 3rem;
  `,
  },
};
