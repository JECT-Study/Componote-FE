import DESIGN_SYSTEM from "@/styles/designSystem";
import styled from "styled-components";
import checkboxBlankLine from "@/assets/icons/checkbox-blank-line.svg";
import blankLine from "@/assets/icons/blank-line.svg";
import {
  CONTEXT_MENU_ITEM_FEEDBACK_COLOR,
  CONTEXT_MENU_ITEM_SIZE,
} from "./ContextMenu.theme";
import { IContextMenuItemStyle } from "./ContextMenu.types";

export const ContextMenuItem = styled.div<IContextMenuItemStyle>`
  position: relative;

  width: 100%;
  height: fit-content;

  display: inline-flex;
  align-items: center;
  gap: ${DESIGN_SYSTEM.gap["2xs"]};
  padding: ${DESIGN_SYSTEM.gap.xs} ${DESIGN_SYSTEM.gap.md};

  border-radius: ${DESIGN_SYSTEM.radius.xs};
  opacity: ${DESIGN_SYSTEM.opacity.visible};
`;

export const ContextMenuCheckboxIcon = styled(
  checkboxBlankLine
)<IContextMenuItemStyle>`
  width: ${({ $size }) => CONTEXT_MENU_ITEM_SIZE[$size].iconSize};
  height: ${({ $size }) => CONTEXT_MENU_ITEM_SIZE[$size].iconSize};

  path {
    fill: ${({ theme }) => theme.light["object-subtle"]};
  }
`;

export const ContextMenuBlankLine = styled(blankLine)<IContextMenuItemStyle>`
  width: ${({ $size }) => CONTEXT_MENU_ITEM_SIZE[$size].iconSize};
  height: ${({ $size }) => CONTEXT_MENU_ITEM_SIZE[$size].iconSize};

  path {
    fill: ${({ theme }) => theme.light["object-subtle"]};
  }
`;

export const ContextMenuItemSection = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${DESIGN_SYSTEM.gap["6xs"]};
  padding: ${DESIGN_SYSTEM.gap.none};

  border-radius: ${DESIGN_SYSTEM.radius.none};
  opacity: ${DESIGN_SYSTEM.opacity.visible};
`;

export const ContextMenuItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${DESIGN_SYSTEM.gap["7xs"]};
  padding: ${DESIGN_SYSTEM.gap.none};

  border-radius: ${DESIGN_SYSTEM.radius.none};
  opacity: ${DESIGN_SYSTEM.opacity.visible};
`;

export const ContextMenuItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${DESIGN_SYSTEM.gap["3xs"]};
  padding: ${DESIGN_SYSTEM.gap.none};

  border-radius: ${DESIGN_SYSTEM.radius.none};
  opacity: ${DESIGN_SYSTEM.opacity.visible};
`;

export const ContextMenuItemLabelContainer = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${DESIGN_SYSTEM.gap.none};
  gap: ${DESIGN_SYSTEM.gap["7xs"]};

  border-radius: ${DESIGN_SYSTEM.radius.none};
  opacity: ${DESIGN_SYSTEM.opacity.visible};
`;

export const ContextMenuItemItemLabelText = styled.span<IContextMenuItemStyle>`
  color: ${({ $feedback, theme }) =>
    $feedback &&
    CONTEXT_MENU_ITEM_FEEDBACK_COLOR[$feedback].itemLabelTextColor(theme)};

  ${({ $size }) => CONTEXT_MENU_ITEM_SIZE[$size].itemLabelText};
`;

export const ContextMenuItemSubLabelText = styled.span`
  color: ${({ theme }) => theme.light["object-normal"]};
  ${DESIGN_SYSTEM.typography.body.xs};
`;

export const ContextMenuItemCaptionText = styled.span`
  color: ${({ theme }) => theme.light["object-subtler"]};
  ${DESIGN_SYSTEM.typography.body["2xs"]};
`;
