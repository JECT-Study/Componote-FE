import React from "react";
import * as S from "./ContextMenu.style";
import ContextMenuItem from "./ContextMenuItem";
import { IContextMenu } from "./ContextMenu.types";

export default function ContextMenu({ children }: IContextMenu) {
  return (
    <S.ContextMenu>
      <S.ItemContainer>{children}</S.ItemContainer>
    </S.ContextMenu>
  );
}

ContextMenu.Item = ContextMenuItem;
