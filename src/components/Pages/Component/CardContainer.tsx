"use client";

import * as S from "./CardContainer.style";

interface ICardContainer {
  children: React.ReactNode;
  $content: boolean;
}

export default function CardContainer({ children, $content }: ICardContainer) {
  return (
    <S.CardContainer $content={$content}>
      <S.CardBox $content={$content}>{children}</S.CardBox>
    </S.CardContainer>
  );
}
