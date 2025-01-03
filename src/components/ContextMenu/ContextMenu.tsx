import React from "react";
import * as S from "./ContextMenu.style";
import ContextMenuItem from "./ContextMenuItem";

export default function ContextMenu({
  children,
}: {
  children: React.ReactNode;
}) {
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
