import { useState } from "react";
import { Tab } from "@/components";
import * as S from "./ProfileTab.style";

interface IProfileTab {
  onTabSelect: (index: number) => void;
}

export default function ProfileTab({ onTabSelect }: IProfileTab) {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const handleTabSelect = (index: number) => {
    setSelectedTabIndex(index);
    if (onTabSelect) onTabSelect(index);
  };

  return (
    <S.ProfileTabContainer>
      <S.TabBox>
        <Tab
          labelText="알림"
          $isSelected={selectedTabIndex === 0}
          onSelect={() => handleTabSelect(0)}
        />
        <Tab
          labelText="댓글"
          $isSelected={selectedTabIndex === 1}
          onSelect={() => handleTabSelect(1)}
        />
      </S.TabBox>
    </S.ProfileTabContainer>
  );
}
