import styled from "styled-components";
import DESIGN_SYSTEM from "@/styles/designSystem";
import chevronRightLine from "@/assets/icons/chevron-right-line.svg";
import { CALLOUT_INTERACTIVE_SIZE } from "./Callout.theme";
import { ICalloutInteractiveStyle } from "./Callout.types";

export const CalloutInteractiveContainer = styled.div<ICalloutInteractiveStyle>`
  position: relative;
  width: 30rem;
  max-width: 70rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${DESIGN_SYSTEM.gap["3xs"]};

  padding: ${(props) => CALLOUT_INTERACTIVE_SIZE[props.$size].containerPadding};

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
  ${(props) => CALLOUT_INTERACTIVE_SIZE[props.$size].titleText}
  flex: 1 0 0;

  color: ${(props) =>
    props.theme.light[`object-${props.$disabled ? "subtlest" : "hero"}`]};
`;

export const CalloutInteractiveBodyText = styled.span<ICalloutInteractiveStyle>`
  ${(props) => CALLOUT_INTERACTIVE_SIZE[props.$size].bodyText}

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
  width: ${(props) => CALLOUT_INTERACTIVE_SIZE[props.$size].iconSize};
  height: ${(props) => CALLOUT_INTERACTIVE_SIZE[props.$size].iconSize};

  path {
    fill: ${(props) =>
      props.theme.light[`object-${props.$disabled ? "subtlest" : "subtle"}`]};
  }
`;
