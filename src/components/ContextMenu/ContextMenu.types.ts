import {
  CONTEXT_MENU_ITEM_FEEDBACK_COLOR,
  CONTEXT_MENU_ITEM_SIZE,
} from "./ContextMenu.theme";

export interface IContextMenuItemStyle {
  $variant: "labelOnly" | "checkbox" | "leftIcon" | "rightIcon" | "badge";
  $size: keyof typeof CONTEXT_MENU_ITEM_SIZE;
  $feedback?: keyof typeof CONTEXT_MENU_ITEM_FEEDBACK_COLOR;
}

export interface IContextMenuItem extends IContextMenuItemStyle {
  labelText: string;
  subLabelText?: string;
  captionText?: string;
  badgeLabelText?: string;
}

export interface IContextMenu {
  children: React.ReactNode;
}
