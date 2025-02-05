import styled from "styled-components";
import DESIGN_SYSTEM from "@/styles/designSystem";
import { CALLOUT_SIZE } from "./Callout.theme";
import { ICalloutStyle } from "./Callout.types";

export const CalloutContainer = styled.div<ICalloutStyle>`
  width: 30rem;
  max-width: 70rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${DESIGN_SYSTEM.gap["3xs"]};

  padding: ${(props) => CALLOUT_SIZE[props.$size].containerPadding};

  border-radius: ${DESIGN_SYSTEM.radius.xs};
  border: ${({ theme }) =>
    `${DESIGN_SYSTEM.stroke.normal} solid ${theme.light["border-trans-normal"]}`};
  opacity: ${DESIGN_SYSTEM.opacity.visible};
  background: ${({ theme }) => theme.light["surface-raised"]};

  cursor: pointer;
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
  ${(props) => CALLOUT_SIZE[props.$size].titleText};
  ${(props) => CALLOUT_SIZE[props.$size].maxHeight};

  flex: 1 0 0;

  color: ${({ theme }) => theme.light["object-hero"]};
`;

export const CalloutBodyText = styled.span<ICalloutStyle>`
  ${(props) => CALLOUT_SIZE[props.$size].bodyText}
  ${(props) => CALLOUT_SIZE[props.$size].height};

  align-self: stretch;
  overflow: hidden;

  color: ${({ theme }) => theme.light["object-subtle"]};
  text-overflow: ellipsis;
  white-space: nowrap;
`;
