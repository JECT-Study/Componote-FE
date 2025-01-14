import DESIGN_SYSTEM from "@/styles/designSystem";
import styled from "styled-components";
import { ITapComponent } from "./Tab.types";

export const TabContainer = styled.div<ITapComponent>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  position: relative;

  gap: ${DESIGN_SYSTEM.gap.none};
  padding: ${DESIGN_SYSTEM.gap.xs} ${DESIGN_SYSTEM.gap.xl};

  &:focus-visible {
    ${({ theme }) => DESIGN_SYSTEM.focus(theme)}
  }

  border-bottom: ${({ theme, $isSelected, $isDisabled }) => {
    if ($isDisabled) {
      return `${DESIGN_SYSTEM.stroke.bolder} solid ${theme.light["accent-subtlest"]}`;
    }

    if ($isSelected) {
      return `${DESIGN_SYSTEM.stroke.bolder} solid ${theme.light["accent-bold"]}`;
    }

    return `${DESIGN_SYSTEM.stroke.none}`;
  }};
`;

export const LabelText = styled.span<ITapComponent>`
  ${DESIGN_SYSTEM.typography.label.bold.md};
  color: ${({ theme, $isDisabled }) =>
    $isDisabled
      ? theme.light["object-subtlest"]
      : theme.light["object-subtle"]};
`;
