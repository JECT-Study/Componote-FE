import * as S from "./BannerContainer.style";

interface IBannerContainer {
  children: React.ReactNode;
}

export default function BannerContainer({ children }: IBannerContainer) {
  return (
    <S.BannerContainer>
      <S.BannerBox>{children}</S.BannerBox>
    </S.BannerContainer>
  );
}
