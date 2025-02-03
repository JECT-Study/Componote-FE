import React from "react";
import * as S from "./ContextMenu.style";
import ContextMenuItem from "./ContextMenuItem";
import { IContextMenu, IContextMenuStyle } from "./ContextMenu.types";

export default function ContextMenu({
  children,
  $width,
}: IContextMenu & IContextMenuStyle) {
  return (
    <S.ContextMenu $width={$width}>
      <S.ItemContainer>{children}</S.ItemContainer>
    </S.ContextMenu>
  );
}

ContextMenu.Item = ContextMenuItem;
