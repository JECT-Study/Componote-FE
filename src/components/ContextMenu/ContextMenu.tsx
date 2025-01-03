import React from "react";
import * as S from "./ContextMenu.style";
import ContextMenuItem from "./ContextMenuItem";
import { IContextMenu } from "./ContextMenu.types";

export default function ContextMenu({ children }: IContextMenu) {
  return (
    <S.ContextMenu>
      <S.ItemContainer>
        {children}
        {/* TODO: Fade 컴포넌트 구현 후 추가하기 */}
      </S.ItemContainer>
    </S.ContextMenu>
  );
}

ContextMenu.Item = ContextMenuItem;
