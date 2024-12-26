import DESIGN_SYSTEM from "@/styles/designSystem";

const sizeMap = {
  xl: {
    icon: DESIGN_SYSTEM.iconSize.md,
    typo: DESIGN_SYSTEM.typography.label.lg,
    padding: `${DESIGN_SYSTEM.gap["4xs"]} ${DESIGN_SYSTEM.gap.md}`,
    selectedPadding: `${DESIGN_SYSTEM.gap["4xs"]} ${DESIGN_SYSTEM.gap.xs} ${DESIGN_SYSTEM.gap["4xs"]} ${DESIGN_SYSTEM.gap.md}`,
  },
  lg: {
    icon: DESIGN_SYSTEM.iconSize.sm,
    typo: DESIGN_SYSTEM.typography.label.md,
    padding: `${DESIGN_SYSTEM.gap["5xs"]} ${DESIGN_SYSTEM.gap.sm}`,
    selectedPadding: `${DESIGN_SYSTEM.gap["5xs"]} ${DESIGN_SYSTEM.gap["2xs"]} ${DESIGN_SYSTEM.gap["5xs"]} ${DESIGN_SYSTEM.gap.sm}`,
  },
  md: {
    icon: DESIGN_SYSTEM.iconSize.xs,
    typo: DESIGN_SYSTEM.typography.label.xs,
    padding: `${DESIGN_SYSTEM.gap["5xs"]} ${DESIGN_SYSTEM.gap.xs}`,
    selectedPadding: `${DESIGN_SYSTEM.gap["5xs"]} ${DESIGN_SYSTEM.gap["3xs"]} ${DESIGN_SYSTEM.gap["5xs"]} ${DESIGN_SYSTEM.gap.xs}`,
  },
  xs: {
    icon: DESIGN_SYSTEM.iconSize["2xs"],
    typo: DESIGN_SYSTEM.typography.body["2xs"],
    padding: `${DESIGN_SYSTEM.gap["6xs"]} ${DESIGN_SYSTEM.gap["2xs"]}`,
    selectedPadding: `${DESIGN_SYSTEM.gap["6xs"]} ${DESIGN_SYSTEM.gap["4xs"]} ${DESIGN_SYSTEM.gap["6xs"]} ${DESIGN_SYSTEM.gap["2xs"]}`,
  },
};

export default sizeMap;
