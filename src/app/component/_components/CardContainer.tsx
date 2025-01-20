import * as S from "./CardContainer.style";

interface ICardContainer {
  children: React.ReactNode;
}

export default function CardContainer({ children }: ICardContainer) {
  return (
    <S.CardContainer>
      <S.CardBox>{children}</S.CardBox>
    </S.CardContainer>
  );
}
