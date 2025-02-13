import React from "react";

import { Chip } from "@/components";
import useDesignSystemFilterStore from "@/store/designSystem/useDesignSystemFilterStore";
import { DesignSystemFilter } from "@/types/enum/designSystemFilters";
import { DESIGN_SYSTEM_CHIP_GROUP } from "../../constants/chipGroup";
import { IChipGroup, IChipGroupComponent } from "./Chip.types";
import ChipGroupContainer from "./Chip.group.style";

export default function ChipGroup({
  $variant,
  $width,
}: IChipGroup & IChipGroupComponent) {
  const chipGroup = DESIGN_SYSTEM_CHIP_GROUP[$variant];
  const { selectedFilters, toggleFilterChip } = useDesignSystemFilterStore();

  return (
    <ChipGroupContainer $width={$width}>
      {chipGroup.contents.map((content) => {
        const text = typeof content === "string" ? content : content.text;
        const icon = typeof content === "string" ? undefined : content.icon;
        return (
          <Chip
            key={text}
            text={text}
            $size="md"
            IconComponent={icon}
            $isSelected={selectedFilters.includes(
              content.responseName as DesignSystemFilter,
            )}
            onClick={() =>
              toggleFilterChip(content.responseName as DesignSystemFilter)
            }
          />
        );
      })}
    </ChipGroupContainer>
  );
}
