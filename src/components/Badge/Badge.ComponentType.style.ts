"use client";

import styled from "styled-components";
import DESIGN_SYSTEM from "@/styles/designSystem";

/**
 * Badge/componentType 컴포넌트에 필요한 props입니다
 */
export interface IBadgeComponentType {
  $type: keyof typeof typeColor;
  $style: "solid" | "transparent";
  $size: "xs" | "sm" | "md";
}

const typeColor = {
  input: "cyan",
  display: "violet",
  feedback: "rose",
  navigation: "lime",
};

const sizeMap = {
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

// 스타일드 컴포넌트 정의
export const BadgeComponentTypeContainer = styled.div<IBadgeComponentType>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${(props) => sizeMap[props.$size].gap};

  width: fit-content;
  height: fit-content;
  padding: ${(props) => sizeMap[props.$size].padding};

  border-radius: ${DESIGN_SYSTEM.radius["2xs"]};

  background-color: ${(props) =>
    props.$style === "solid"
      ? props.theme.light[`custom-${typeColor[props.$type]}`]
      : props.theme.light[`custom-trans-${typeColor[props.$type]}`]};

  color: ${(props) =>
    props.$style === "solid"
      ? props.theme.light["object-static-inv-hero"]
      : props.theme.light[`custom-${typeColor[props.$type]}`]};

  ${(props) => sizeMap[props.$size].typography}
`;
