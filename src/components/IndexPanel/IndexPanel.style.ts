"use client";

import styled from "styled-components";
import DESIGN_SYSTEM from "@/styles/designSystem";

/**
 * IndexPanel/Item 컴포넌트에 필요한 style props입니다
 */
export interface IIndexPanelItemStyle {
  $isSelected?: boolean;
  $isDisabled?: boolean;
}

export const IndexPanelItem = styled.div<IIndexPanelItemStyle>`
  position: relative;

  display: inline-flex;
  padding: ${DESIGN_SYSTEM.gap["6xs"]} ${DESIGN_SYSTEM.gap["4xs"]};
  align-items: center;
  gap: ${DESIGN_SYSTEM.gap["4xs"]};

  width: 100%;
  height: fit-content;

  border-radius: ${DESIGN_SYSTEM.radius["2xs"]};

  ${(props) =>
    props.$isSelected &&
    `background-color: ${props.theme.light["object-hero"]}`};
`;

export const IndexPanelItemLabelText = styled.span<IIndexPanelItemStyle>`
  color: ${(props) =>
    props.$isSelected
      ? props.theme.light["object-hero"]
      : props.theme.light["object-subtle"]};

  &:hover,
  &:focus-visible {
    color: ${({ theme }) => theme.light["object-hero"]};
  }

  ${(props) =>
    props.$isDisabled && `color: ${props.theme.light["object-subtlest"]};`}

  ${DESIGN_SYSTEM.typography.label.xs}
`;

export const IndexPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${DESIGN_SYSTEM.gap.xs};
  padding: ${DESIGN_SYSTEM.gap.xs} ${DESIGN_SYSTEM.gap["2xs"]};

  width: 12.5rem;

  border-radius: ${DESIGN_SYSTEM.radius.sm};
  border: ${DESIGN_SYSTEM.stroke.normal} solid
    ${({ theme }) => theme.light["border-trans-subtler"]};

  opacity: ${DESIGN_SYSTEM.opacity.visible};
  background: ${({ theme }) => theme.light["surface-standard"]};

  box-shadow: ${DESIGN_SYSTEM.shadow.embossed};
`;

export const IndexPanelItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: ${DESIGN_SYSTEM.gap.sm};
  padding: ${DESIGN_SYSTEM.gap.none} ${DESIGN_SYSTEM.gap["5xs"]};
`;
