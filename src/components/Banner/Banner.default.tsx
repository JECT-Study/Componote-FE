import * as S from "./Banner.style";

export interface IDefaultBanner {
  titleText: string;
  descriptionText: string;
}

export default function DefaultBanner({
  titleText,
  descriptionText,
}: IDefaultBanner) {
  return (
    <S.BannerContainer>
      <S.BannerTextBox>
        <S.TitleText>{titleText}</S.TitleText>
        <S.DescriptionText>{descriptionText}</S.DescriptionText>
      </S.BannerTextBox>
    </S.BannerContainer>
  );
}
