import { useState } from "react";
import { Button, ButtonList, ChipList, ContextMenu, Tab } from "@/components";
import resetIcon from "@/assets/icons/reset-left-line.svg";
import arrowDown from "@/assets/icons/arrow-down.svg";
import checkLineIcon from "@/assets/icons/check-line.svg";
import useChipStore from "@/store/component/useChipStore";
import useContextMenuStore from "@/store/common/useContextMenuStore";
import useDesignSystemFilterStore from "@/store/designSystem/useDesignSystemFilterStore";
import * as S from "./Toolbar.style";
import { ButtonStyle } from "../Button/Button.types";

interface IToolbar {
  children?: React.ReactNode;
  contextMenuItemLabels?: string[];
  onTabSelect?: (index: number) => void;
}

export default function Toolbar({
  children,
  contextMenuItemLabels,
  onTabSelect,
}: IToolbar) {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const resetChips = useChipStore((state) => state.resetChips);
  const resetFilters = useDesignSystemFilterStore(
    (state) => state.resetFilters,
  );
  const {
    selectedLabel,
    isContextMenuOpen,
    selectContextMenu,
    toggleContextMenu,
  } = useContextMenuStore();

  const handleTabSelect = (index: number) => {
    setSelectedTabIndex(index);
    if (onTabSelect) onTabSelect(index);
  };

  const handleResetClick = () => {
    // 임시로 resetChips, resetFilters를 동시에 호출함 => 논의 필요
    resetChips();
    resetFilters();
  };

  const renderToolList = () => {
    if (children) return children;
    return selectedTabIndex === 0 ? <ChipList /> : <ButtonList />;
  };

  const handleContextMenuSelect = (label: string) => {
    selectContextMenu(label);
    toggleContextMenu();
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
            onClick={handleResetClick}
            $size="sm"
            $buttonType="iconButton"
            $leftIcon={resetIcon}
            $buttonStyle={ButtonStyle.EmptyTertiary}
          />
        </S.ToolBox>
        <S.ButtonBox>
          <Button
            text={selectedLabel}
            $size="xs"
            $buttonType="button"
            $rightIcon={arrowDown}
            $buttonStyle={ButtonStyle.OutlinedSecondary}
            onClick={toggleContextMenu}
          />
          {isContextMenuOpen && (
            <ContextMenu $width="160px">
              {contextMenuItemLabels?.map((label) => (
                <ContextMenu.Item
                  key={label}
                  labelText={label}
                  $variant={selectedLabel === label ? "rightIcon" : "labelOnly"}
                  icon={selectedLabel === label ? checkLineIcon : null}
                  $size="sm"
                  onClick={() => handleContextMenuSelect(label)}
                />
              ))}
            </ContextMenu>
          )}
        </S.ButtonBox>
      </S.ToolContainer>
    </S.ToolbarContainer>
  );
}
