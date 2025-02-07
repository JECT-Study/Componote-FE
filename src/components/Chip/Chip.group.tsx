import React, { useState } from "react";

import { Chip } from "@/components";
import { DESIGN_SYSTEM_CHIP_GROUP } from "../../constants/chipGroup";
import { IChipGroup, IChipGroupComponent } from "./Chip.types";
import ChipGroupContainer from "./Chip.group.style";

export default function ChipGroup({
  $variant,
  $width,
}: IChipGroup & IChipGroupComponent) {
  const chipGroup = DESIGN_SYSTEM_CHIP_GROUP[$variant];
  const [selectedChip, setSelectedChip] = useState<number[]>([]);

  const handleChipClick = (index: number) => {
    setSelectedChip((prev) => {
      if (prev.includes(index)) return prev.filter((i) => i !== index);
      return [...prev, index];
    });
  };

  return (
    <ChipGroupContainer $width={$width}>
      {chipGroup.contents.map((chip, index) => (
        <Chip
          key={chip}
          text={chip}
          $size="md"
          IconComponent={
            $variant === "platform"
              ? DESIGN_SYSTEM_CHIP_GROUP.platform.icons[index]
              : null
          }
          $isSelected={selectedChip.includes(index)}
          onClick={() => handleChipClick(index)}
        />
      ))}
    </ChipGroupContainer>
  );
}
