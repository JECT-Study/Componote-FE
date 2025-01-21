import { useState } from "react";
import { Button, ButtonList, ChipList, Tab } from "@/components";
import resetIcon from "@/assets/icons/reset-left-line.svg";
import arrowDown from "@/assets/icons/arrow-down.svg";
import * as S from "./Toolbar.style";
import { ButtonStyle } from "../Button/Button.types";

interface IToolbar {
  children?: React.ReactNode;
}

export default function Toolbar({ children }: IToolbar) {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const handleTabSelect = (index: number) => {
    setSelectedTabIndex(index);
  };

  const renderToolList = () => {
    if (children) return children;
    return selectedTabIndex === 0 ? <ChipList /> : <ButtonList />;
  };

  return (
    <S.ToolbarContainer>
      {!children && (
        <S.TabContainer>
          <Tab
            labelText="컴포넌트"
            $isSelected={selectedTabIndex === 0}
            onSelect={() => handleTabSelect(0)}
          />
          <Tab
            labelText="디자인 시스템"
            $isSelected={selectedTabIndex === 1}
            onSelect={() => handleTabSelect(1)}
          />
        </S.TabContainer>
      )}
      <S.ToolContainer>
        <S.ToolBox>
          <S.FilterIcon />
          {renderToolList()}
          <Button
            $size="sm"
            $buttonType="iconButton"
            $leftIcon={resetIcon}
            $buttonStyle={ButtonStyle.EmptyTertiary}
          />
        </S.ToolBox>
        <S.ButtonBox>
          <Button
            text="이름 순으로 정렬"
            $size="xs"
            $buttonType="button"
            $rightIcon={arrowDown}
            $buttonStyle={ButtonStyle.OutlinedSecondary}
          />
        </S.ButtonBox>
      </S.ToolContainer>
    </S.ToolbarContainer>
  );
}
