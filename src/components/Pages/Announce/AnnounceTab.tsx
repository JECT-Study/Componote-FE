import { useState } from "react";
import { Tab } from "@/components";
import * as S from "./AnnounceTab.style";

interface IAnnounceTab {
  onTabSelect: (index: number) => void;
}

export default function AnnounceTab({ onTabSelect }: IAnnounceTab) {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const handleTabSelect = (index: number) => {
    setSelectedTabIndex(index);
    if (onTabSelect) onTabSelect(index);
  };

  return (
    <S.AnnounceTabContainer>
      <S.TabBox>
        <Tab
          labelText="공지 사항"
          $isSelected={selectedTabIndex === 0}
          onSelect={() => handleTabSelect(0)}
        />
        <Tab
          labelText="자주 묻는 질문"
          $isSelected={selectedTabIndex === 1}
          onSelect={() => handleTabSelect(1)}
        />
      </S.TabBox>
    </S.AnnounceTabContainer>
  );
}
