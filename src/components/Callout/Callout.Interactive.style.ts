import styled from "styled-components";
import DESIGN_SYSTEM from "@/styles/designSystem";
import chevronRightLine from "@/assets/icons/chevron-right-line.svg";

/**
 * Callout/Interactive 컴포넌트에 필요한 style props입니다
 */
export interface ICalloutInteractiveStyle {
  $size: keyof typeof sizeMap;
  $disabled?: boolean;
}

const sizeMap = {
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

export const CalloutInteractiveContainer = styled.div<ICalloutInteractiveStyle>`
  position: relative;
  width: 30rem;
  max-width: 70rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${DESIGN_SYSTEM.gap["3xs"]};

  padding: ${(props) => sizeMap[props.$size].containerPadding};

  border-radius: ${DESIGN_SYSTEM.radius.xs};
  border: ${(props) =>
    `${DESIGN_SYSTEM.stroke.normal} solid ${
      props.theme.light[
        `border-trans-${props.$disabled ? "subtler" : "normal"}`
      ]
    }`};
  opacity: ${DESIGN_SYSTEM.opacity.visible};
  background: ${({ theme }) => theme.light["surface-raised"]};

  &:hover,
  &:focus-visible {
    box-shadow: ${DESIGN_SYSTEM.shadow.raised};
  }
`;

export const CalloutInteractiveTitleContainer = styled.div`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  gap: ${DESIGN_SYSTEM.gap.xs};
  padding: ${DESIGN_SYSTEM.gap.none};

  border-radius: ${DESIGN_SYSTEM.radius.none};
  opacity: ${DESIGN_SYSTEM.opacity.visible};
`;

export const CalloutInteractiveTitleText = styled.span<ICalloutInteractiveStyle>`
  ${(props) => sizeMap[props.$size].titleText}
  flex: 1 0 0;

  color: ${(props) =>
    props.theme.light[`object-${props.$disabled ? "subtlest" : "hero"}`]};
`;

export const CalloutInteractiveBodyText = styled.span<ICalloutInteractiveStyle>`
  ${(props) => sizeMap[props.$size].bodyText}

  align-self: stretch;
  overflow: hidden;

  color: ${(props) =>
    props.theme.light[`object-${props.$disabled ? "subtlest" : "subtle"}`]};
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const CalloutInteractiveIcon = styled(
  chevronRightLine
)<ICalloutInteractiveStyle>`
  width: ${(props) => sizeMap[props.$size].iconSize};
  height: ${(props) => sizeMap[props.$size].iconSize};

  path {
    fill: ${(props) =>
      props.theme.light[`object-${props.$disabled ? "subtlest" : "subtle"}`]};
  }
`;
