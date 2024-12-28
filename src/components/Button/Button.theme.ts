import DESIGN_SYSTEM from "@/styles/designSystem";
import { DefaultTheme, css } from "styled-components";

export const BUTTON_SIZE_MAP = {
  lg: {
    icon: DESIGN_SYSTEM.iconSize.md,
    typo: DESIGN_SYSTEM.typography.label.lg,
    padding: `${DESIGN_SYSTEM.gap.xs} ${DESIGN_SYSTEM.gap.md}`,
    icBtnPadding: DESIGN_SYSTEM.gap.xs,
    icBtnIcon: DESIGN_SYSTEM.iconSize["2xl"],
  },
  md: {
    icon: DESIGN_SYSTEM.iconSize.sm,
    typo: DESIGN_SYSTEM.typography.label.md,
    padding: `${DESIGN_SYSTEM.gap["2xs"]} ${DESIGN_SYSTEM.gap.sm}`,
    icBtnPadding: DESIGN_SYSTEM.gap["3xs"],
    icBtnIcon: DESIGN_SYSTEM.iconSize.lg,
  },
  sm: {
    icon: DESIGN_SYSTEM.iconSize.xs,
    typo: DESIGN_SYSTEM.typography.label.sm,
    padding: `${DESIGN_SYSTEM.gap["3xs"]} ${DESIGN_SYSTEM.gap.xs}`,
    icBtnPadding: DESIGN_SYSTEM.gap["4xs"],
    icBtnIcon: DESIGN_SYSTEM.iconSize.sm,
  },
  xs: {
    icon: DESIGN_SYSTEM.iconSize["2xs"],
    typo: DESIGN_SYSTEM.typography.label.xs,
    padding: `${DESIGN_SYSTEM.gap["4xs"]} ${DESIGN_SYSTEM.gap["2xs"]}`,
    icBtnPadding: DESIGN_SYSTEM.gap["5xs"],
    icBtnIcon: DESIGN_SYSTEM.iconSize["2xs"],
  },
};

export const BUTTON_STYLES = {
  solidBrand: (theme: DefaultTheme) => css`
    color: ${theme.light["object-static-boldest"]};
    background-color: ${theme.light["accent-bold"]};
  `,
  solidPrimary: (theme: DefaultTheme) => css`
    color: ${theme.light["object-inv-hero"]};
    background-color: ${theme.light["object-hero"]};
  `,
  solidSecondary: (theme: DefaultTheme) => css`
    color: ${theme.light["object-static-inv-hero"]};
    background-color: ${theme.light["fill-trans-bolder"]};
  `,
  solidTertiary: (theme: DefaultTheme) => css`
    color: ${theme.light["object-bold"]};
    background-color: ${theme.light["fill-trans-subtler"]};
  `,
  outlinedPrimary: (theme: DefaultTheme) => css`
    border: ${DESIGN_SYSTEM.stroke.normal} solid
      ${theme.light["border-trans-normal"]};
    color: ${theme.light["object-hero"]};
  `,
  outlinedSecondary: (theme: DefaultTheme) => css`
    border: ${DESIGN_SYSTEM.stroke.normal} solid
      ${theme.light["border-trans-subtle"]};
    color: ${theme.light["object-normal"]};
  `,
  outlinedTertiary: (theme: DefaultTheme) => css`
    border: ${DESIGN_SYSTEM.stroke.normal} solid
      ${theme.light["border-trans-subtle"]};
    color: ${theme.light["object-subtle"]};
  `,
  emptyPrimary: (theme: DefaultTheme) => css`
    color: ${theme.light["object-hero"]};
  `,
  emptySecondary: (theme: DefaultTheme) => css`
    color: ${theme.light["object-normal"]};
  `,
  emptyTertiary: (theme: DefaultTheme) => css`
    color: ${theme.light["object-subtle"]};
  `,
};
