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
      {chipGroup.contents.map((content, index) => {
        const text = typeof content === "string" ? content : content.text;
        const icon = typeof content === "string" ? null : content.icon;
        return (
          <Chip
            key={text}
            text={text}
            $size="md"
            IconComponent={icon || null}
            $isSelected={selectedChip.includes(index)}
            onClick={() => handleChipClick(index)}
          />
        );
      })}
    </ChipGroupContainer>
  );
}
