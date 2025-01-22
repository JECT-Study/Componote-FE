import * as S from "./DesignCardContainer.style";

interface IDesignCardContainer {
  children: React.ReactNode;
}

export default function DesignCardContainer({
  children,
}: IDesignCardContainer) {
  return (
    <S.CardContainer>
      <S.CardBox>{children}</S.CardBox>
    </S.CardContainer>
  );
}
