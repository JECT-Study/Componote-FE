import { useState } from "react";
import { Button, ButtonList, ChipList, ContextMenu, Tab } from "@/components";
import resetIcon from "@/assets/icons/reset-left-line.svg";
import arrowDown from "@/assets/icons/arrow-down.svg";
import checkLineIcon from "@/assets/icons/check-line.svg";
import * as S from "./Toolbar.style";
import { ButtonStyle } from "../Button/Button.types";

interface IToolbar {
  children?: React.ReactNode;
  contextMenuItemLabels?: string[];
  defaultItem?: string;
}

export default function Toolbar({
  children,
  contextMenuItemLabels,
  defaultItem,
}: IToolbar) {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [isContextMenuOpen, setIsContextMenuOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string>(defaultItem || "");

  const handleTabSelect = (index: number) => {
    setSelectedTabIndex(index);
  };

  const renderToolList = () => {
    if (children) return children;
    return selectedTabIndex === 0 ? <ChipList /> : <ButtonList />;
  };

  const handleContextMenuSelect = (label: string) => {
    setSelectedItem(label);
    setIsContextMenuOpen(false);
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
            text={selectedItem}
            $size="xs"
            $buttonType="button"
            $rightIcon={arrowDown}
            $buttonStyle={ButtonStyle.OutlinedSecondary}
            onClick={() => setIsContextMenuOpen(!isContextMenuOpen)}
          />
          {isContextMenuOpen && (
            <ContextMenu $width="160px">
              {contextMenuItemLabels?.map((label) => (
                <ContextMenu.Item
                  key={label}
                  labelText={label}
                  $variant={selectedItem === label ? "rightIcon" : "labelOnly"}
                  icon={selectedItem === label ? checkLineIcon : null}
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
