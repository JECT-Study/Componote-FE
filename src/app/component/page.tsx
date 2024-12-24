"use client";

import { Chip } from "@/components";
import GitHubIcon from "../../assets/icons/github-fill.svg";

export default function Component() {
  return (
    <div>
      <Chip
        text="레이블"
        $size="lg"
        $isSelected={true}
        $iconVisible={true}
        $isInversed={true}
        $isDisabled={false}
        IconComponent={GitHubIcon}
      />
    </div>
  );
}
