"use client";

import styled from "styled-components";
import DESIGN_SYSTEM from "@/styles/designSystem";

/**
 * Callout 컴포넌트에 필요한 style props입니다
 */
export interface ICalloutStyle {
  $size: "sm" | "md";
}

// TODO: size에 따라 text, padding 값 등 조절
// const sizeMap = {
//   sm: {
//     titleTypo: (theme: DefaultTheme) => theme.typo?.label.bold.lg,
//     bodyTypo: (theme: DefaultTheme) => theme.typo?.label.xs,
//   },
//   md: {},
// };

export const CalloutContainer = styled.div<ICalloutStyle>`
  width: 30rem;
  max-width: 70rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${DESIGN_SYSTEM.gap.xl} ${DESIGN_SYSTEM.gap["2xl"]};

  padding: ${DESIGN_SYSTEM.gap["4xs"]};

  border-radius: ${DESIGN_SYSTEM.radius.xs};
  border: ${({ theme }) =>
    `${DESIGN_SYSTEM.stroke.normal} solid ${theme.light["border-trans-normal"]}`};
  opacity: ${DESIGN_SYSTEM.opacity.visible};
  background: ${({ theme }) => theme.light["surface-raised"]};
`;

export const CalloutTitleContainer = styled.div`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  gap: ${DESIGN_SYSTEM.gap.xs};
  padding: ${DESIGN_SYSTEM.gap.none};

  border-radius: ${DESIGN_SYSTEM.radius.none};
  opacity: ${DESIGN_SYSTEM.opacity.visible};
`;

export const CalloutTitleText = styled.span`
  max-height: 3.5rem
  flex: 1 0 0;

  ${DESIGN_SYSTEM.typography.title[1]};
  color: ${({ theme }) => theme.light["object-hero"]};
`;

export const CalloutBodyText = styled.div`
  height: 3rem;
  align-self: stretch;
  overflow: hidden;

  ${DESIGN_SYSTEM.typography.label.md};
  color: ${({ theme }) => theme.light["object-subtle"]};
  text-overflow: ellipsis;
  white-space: nowrap;
`;
