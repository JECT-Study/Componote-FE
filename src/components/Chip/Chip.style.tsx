"use client";

import styled from "styled-components";

import { sizeMap } from "./Chip.theme";
import DESIGN_SYSTEM from "@/styles/designSystem";
import checkLine from "@/assets/icons/check-line.svg";

export interface IChipComponent {
  $isInversed?: boolean;
  $isSelected?: boolean;
  $iconVisible?: boolean;
  $isDisabled?: boolean;
  $size: keyof typeof sizeMap;
}

export interface IIconWrapper {
  IconComponent: React.ElementType;
}

const IconWrapper = ({ IconComponent, ...props }: IIconWrapper) => {
  return <IconComponent {...props} />;
};

export const ChipContainer = styled.div<IChipComponent>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;

  gap: ${DESIGN_SYSTEM.gap["6xs"]};
  padding: ${(props) => {
    return props.$isSelected
      ? sizeMap[props.$size].selectedPadding
      : sizeMap[props.$size].padding;
  }};

  opacity: ${DESIGN_SYSTEM.opacity["visible"]};
  background: ${({ theme, $isSelected, $isInversed, $isDisabled }) => {
    return $isDisabled
      ? theme.light["object-inv-hero"]
      : $isInversed
      ? $isSelected
        ? theme.light["surface-raised"]
        : theme.light["fill-hero"]
      : $isSelected
      ? theme.light["fill-hero"]
      : theme.light["surface-raised"];
  }};

  border-radius: ${DESIGN_SYSTEM.radius["circle"]};
  border: ${({ theme }) =>
    `${DESIGN_SYSTEM.stroke["normal"]} solid ${theme.light["border-trans-subtle"]}`};

  color: ${({ theme, $isSelected, $isInversed, $isDisabled }) => {
    return $isDisabled
      ? theme.light["object-subtlest"]
      : $isInversed
      ? $isSelected
        ? theme.light["object-normal"]
        : theme.light["object-inv-hero"]
      : $isSelected
      ? theme.light["object-inv-hero"]
      : theme.light["object-normal"];
  }};

  ${(props) => sizeMap[props.$size].typo};

  &:focus {
    outline: none;
    ${({ $isDisabled }) => !$isDisabled && DESIGN_SYSTEM.interaction["bold"]}
  }
`;

export const InteractionOverlay = styled.div`
  position: absolute;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  opacity: ${DESIGN_SYSTEM.opacity["invisible"]};

  border-radius: ${DESIGN_SYSTEM.radius["circle"]};
  background-color: ${({ theme }) => theme.light["object-bolder"]};

  &:hover {
    opacity: ${DESIGN_SYSTEM.opacity["visible"]};
    ${DESIGN_SYSTEM.interaction["subtle"]}
  }
`;

const BaseIconImg = styled(IconWrapper)<IChipComponent>`
  width: ${(props) => [sizeMap[props.$size].icon]};
  height: ${(props) => [sizeMap[props.$size].icon]};
`;

export const ChipLeftIconImg = styled(BaseIconImg)`
  path {
    fill: ${({ theme, $isSelected, $isInversed }) => {
      if ($isInversed) {
        return $isSelected
          ? theme.light["object-normal"]
          : theme.light["object-inv-hero"];
      } else {
        return $isSelected
          ? theme.light["object-inv-hero"]
          : theme.light["object-normal"];
      }
    }};
  }
`;

export const ChipLabelText = styled.span``;

export const CheckLineIconImg = styled(BaseIconImg).attrs({ as: checkLine })`
  path {
    fill: ${({ theme, $isInversed }) =>
      $isInversed
        ? theme.light["object-normal"]
        : theme.light["object-inv-hero"]};
  }
`;
