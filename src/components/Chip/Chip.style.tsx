"use client";

import styled from "styled-components";

import DESIGN_SYSTEM from "@/styles/designSystem";
import checkLine from "@/assets/icons/check-line.svg";
import { IIconWrapper, IChipComponent } from "./Chip.types";
import CHIP_SIZE_MAP from "./Chip.theme";

function IconWrapper({ IconComponent, ...props }: IIconWrapper) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <IconComponent {...props} />;
}

export const ChipContainer = styled.div<IChipComponent>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;

  gap: ${DESIGN_SYSTEM.gap["6xs"]};
  padding: ${(props) =>
    props.$isSelected
      ? CHIP_SIZE_MAP[props.$size].selectedPadding
      : CHIP_SIZE_MAP[props.$size].padding};

  opacity: ${DESIGN_SYSTEM.opacity.visible};
  background: ${({ theme, $isSelected, $isInversed, $isDisabled }) => {
    if ($isDisabled) return theme.light["object-inv-hero"];
    if ($isInversed) {
      return $isSelected
        ? theme.light["surface-raised"]
        : theme.light["fill-hero"];
    }

    return $isSelected
      ? theme.light["fill-hero"]
      : theme.light["surface-raised"];
  }};

  border-radius: ${DESIGN_SYSTEM.radius.circle};
  border: ${({ theme }) =>
    `${DESIGN_SYSTEM.stroke.normal} solid ${theme.light["border-trans-subtle"]}`};

  color: ${({ theme, $isSelected, $isInversed, $isDisabled }) => {
    if ($isDisabled) return theme.light["object-subtlest"];
    if ($isInversed) {
      return $isSelected
        ? theme.light["object-normal"]
        : theme.light["object-inv-hero"];
    }

    return $isSelected
      ? theme.light["object-inv-hero"]
      : theme.light["object-normal"];
  }};

  ${(props) => CHIP_SIZE_MAP[props.$size].typo};
`;

export const InteractionOverlay = styled.div`
  position: absolute;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  opacity: ${DESIGN_SYSTEM.opacity.invisible};

  border-radius: ${DESIGN_SYSTEM.radius.circle};
  background-color: ${({ theme }) => theme.light["object-bolder"]};
`;

const BaseIconImg = styled(IconWrapper)<IChipComponent>`
  width: ${(props) => CHIP_SIZE_MAP[props.$size].icon};
  height: ${(props) => CHIP_SIZE_MAP[props.$size].icon};
`;

export const ChipLeftIconImg = styled(BaseIconImg)`
  path {
    fill: ${({ theme, $isSelected, $isInversed }) => {
      if ($isInversed) {
        return $isSelected
          ? theme.light["object-normal"]
          : theme.light["object-inv-hero"];
      }

      return $isSelected
        ? theme.light["object-inv-hero"]
        : theme.light["object-normal"];
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
