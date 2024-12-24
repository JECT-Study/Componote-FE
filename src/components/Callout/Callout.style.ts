"use client";

import styled from "styled-components";
import DESIGN_SYSTEM from "@/styles/designSystem";

/**
 * Callout 컴포넌트에 필요한 style props입니다
 */
export interface ICalloutStyle {
  $size: keyof typeof sizeMap;
}

const sizeMap = {
  sm: {
    containerPadding: `${DESIGN_SYSTEM.gap.lg} ${DESIGN_SYSTEM.gap.xl}`,
    titleText: `
    ${DESIGN_SYSTEM.typography.label.bold.lg};
    max-height: 3.375rem;
  `,
    bodyText: `
    ${DESIGN_SYSTEM.typography.label.xs};
    height: 2.625rem;
  `,
  },
  md: {
    containerPadding: `${DESIGN_SYSTEM.gap.xl} ${DESIGN_SYSTEM.gap["2xl"]}`,
    titleText: `
    ${DESIGN_SYSTEM.typography.title[1]};
    max-height: 3.5rem;
  `,
    bodyText: `
    ${DESIGN_SYSTEM.typography.label.md};
    height: 3rem;
  `,
  },
};

export const CalloutContainer = styled.div<ICalloutStyle>`
  width: 30rem;
  max-width: 70rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${DESIGN_SYSTEM.gap["3xs"]};

  padding: ${(props) => sizeMap[props.$size].containerPadding};

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

export const CalloutTitleText = styled.span<ICalloutStyle>`
  ${(props) => sizeMap[props.$size].titleText}
  flex: 1 0 0;

  color: ${({ theme }) => theme.light["object-hero"]};
`;

export const CalloutBodyText = styled.span<ICalloutStyle>`
  ${(props) => sizeMap[props.$size].bodyText}

  align-self: stretch;
  overflow: hidden;

  color: ${({ theme }) => theme.light["object-subtle"]};
  text-overflow: ellipsis;
  white-space: nowrap;
`;
