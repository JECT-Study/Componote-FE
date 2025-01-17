"use client";

import { useState } from "react";
import styled from "styled-components";
import { Chip, Button, ChipGroup } from "@/components";
import { ButtonStyle } from "../Button/Button.types";
import arrowDown from "@/assets/icons/arrow-down.svg";

export function ChipList() {
  const [selectedChip, setSelectedChip] = useState<number[]>([]);

  const handleChipClick = (index: number) => {
    setSelectedChip((prev) => {
      if (prev.includes(index)) return prev.filter((i) => i !== index);
      return [...prev, index];
    });
  };

  const chips = [
    "전체",
    "Input 입력",
    "Display 표시",
    "Feedback 반응",
    "Navigation 안내",
  ];

  return (
    <>
      {chips.map((text, index) => (
        <Chip
          key={text}
          $size="md"
          text={text}
          $isSelected={selectedChip.includes(index)}
          onClick={() => handleChipClick(index)}
        />
      ))}
    </>
  );
}

export type TVariant = null | "platform" | "tech" | "contents" | "device";

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
          text="플랫폼 필터"
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
          text="기술 필터"
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
          onClick={() => handleChipClick("contents")}
          text="콘텐츠 필터"
          $size="xs"
          $buttonType="button"
          $rightIcon={arrowDown}
          $buttonStyle={ButtonStyle.OutlinedSecondary}
        />
        {activeChipGroup === "contents" && (
          <ChipGroup $width="27.5rem" $variant="contents" />
        )}
      </ButtonBox>

      <ButtonBox>
        <Button
          onClick={() => handleChipClick("device")}
          text="디바이스 필터"
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
