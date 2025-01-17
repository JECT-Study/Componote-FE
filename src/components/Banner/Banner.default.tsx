import * as S from "./Banner.default.style";
import { IDefaultBanner } from "./Banner.types";

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
