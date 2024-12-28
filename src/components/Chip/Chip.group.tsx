import React, { useState } from "react";

import { Chip } from "@/components";
import { CHIP_GROUP, CHIP_ICONS } from "./chipGroup";
import { IChipGroup } from "./Chip.types";
import ChipGroupContainer from "./Chip.group.style";

export default function ChipGroup({ $variant }: IChipGroup) {
  const chipGroup = CHIP_GROUP[$variant];
  const [selectedChip, setSelectedChip] = useState<number[]>([]);

  const handleChipClick = (index: number) => {
    setSelectedChip((prev) => {
      if (prev.includes(index)) return prev.filter((i) => i !== index);
      return [...prev, index];
    });
  };

  return (
    <ChipGroupContainer>
      {chipGroup.map((chip, index) => (
        <Chip
          key={chip}
          text={chip}
          $size="md"
          IconComponent={$variant === "platform" ? CHIP_ICONS[index] : null}
          $iconVisible={$variant === "platform"}
          $isSelected={selectedChip.includes(index)}
          onClick={() => handleChipClick(index)}
        />
      ))}
    </ChipGroupContainer>
  );
}
