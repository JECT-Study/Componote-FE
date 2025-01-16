import React, { useState } from "react";

import { Chip } from "@/components";
import { CHIP_GROUP, CHIP_ICONS } from "./chipGroup";
import { IChipGroup, IChipGroupComponent } from "./Chip.types";
import ChipGroupContainer from "./Chip.group.style";

export default function ChipGroup({
  $variant,
  $width,
}: IChipGroup & IChipGroupComponent) {
  const chipGroup = CHIP_GROUP[$variant];
  const [selectedChip, setSelectedChip] = useState<number[]>([]);

  const handleChipClick = (index: number) => {
    setSelectedChip((prev) => {
      if (prev.includes(index)) return prev.filter((i) => i !== index);
      return [...prev, index];
    });
  };

  return (
    <ChipGroupContainer $width={$width}>
      {chipGroup.map((chip, index) => (
        <Chip
          key={chip}
          text={chip}
          $size="md"
          IconComponent={$variant === "platform" ? CHIP_ICONS[index] : null}
          $isSelected={selectedChip.includes(index)}
          onClick={() => handleChipClick(index)}
        />
      ))}
    </ChipGroupContainer>
  );
}
