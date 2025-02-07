import { useState } from "react";
import styled from "styled-components";

import { Chip, Button, ChipGroup } from "@/components";
import arrowDown from "@/assets/icons/arrow-down.svg";
import {
  COMPONENT_CHIPS,
  DESIGN_SYSTEM_CHIP_GROUP,
} from "@/constants/chipGroup";
import useChipStore from "@/store/Component/useChipStore";
import { ButtonStyle } from "../Button/Button.types";

export function ChipList() {
  const { selectedChip, toggleChip } = useChipStore();

  return (
    <>
      {COMPONENT_CHIPS.map((text, index) => (
        <Chip
          key={text}
          $size="md"
          text={text}
          $isSelected={selectedChip.includes(index)}
          onClick={() => toggleChip(index)}
        />
      ))}
    </>
  );
}

type TVariant = null | "platform" | "tech" | "content" | "device";

const ButtonBox = styled.div`
  position: relative;
`;

export function ButtonList() {
  const [activeChipGroup, setActiveChipGroup] = useState<TVariant>(null);

  const handleChipClick = (variant: TVariant) => {
    setActiveChipGroup((prev) => (prev === variant ? null : variant));
  };

  return (
    <>
      <ButtonBox>
        <Button
          onClick={() => handleChipClick("platform")}
          text={DESIGN_SYSTEM_CHIP_GROUP.platform.text}
          $size="xs"
          $buttonType="button"
          $rightIcon={arrowDown}
          $buttonStyle={ButtonStyle.OutlinedSecondary}
        />
        {activeChipGroup === "platform" && (
          <ChipGroup $width="27.5rem" $variant="platform" />
        )}
      </ButtonBox>

      <ButtonBox>
        <Button
          onClick={() => handleChipClick("tech")}
          text={DESIGN_SYSTEM_CHIP_GROUP.tech.text}
          $size="xs"
          $buttonType="button"
          $rightIcon={arrowDown}
          $buttonStyle={ButtonStyle.OutlinedSecondary}
        />
        {activeChipGroup === "tech" && (
          <ChipGroup $width="27.5rem" $variant="tech" />
        )}
      </ButtonBox>

      <ButtonBox>
        <Button
          onClick={() => handleChipClick("content")}
          text={DESIGN_SYSTEM_CHIP_GROUP.content.text}
          $size="xs"
          $buttonType="button"
          $rightIcon={arrowDown}
          $buttonStyle={ButtonStyle.OutlinedSecondary}
        />
        {activeChipGroup === "content" && (
          <ChipGroup $width="27.5rem" $variant="content" />
        )}
      </ButtonBox>

      <ButtonBox>
        <Button
          onClick={() => handleChipClick("device")}
          text={DESIGN_SYSTEM_CHIP_GROUP.device.text}
          $size="xs"
          $buttonType="button"
          $rightIcon={arrowDown}
          $buttonStyle={ButtonStyle.OutlinedSecondary}
        />
        {activeChipGroup === "device" && (
          <ChipGroup $width="12.825rem" $variant="device" />
        )}
      </ButtonBox>
    </>
  );
}
