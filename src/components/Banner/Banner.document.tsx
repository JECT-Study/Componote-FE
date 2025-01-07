import { Button } from "@/components";
import * as S from "./Banner.document.style";
import { IDocumentBanner } from "./Banner.types";
import { ButtonStyle } from "../Button/Button.types";
import chatIcon from "@/assets/icons/chat-line.svg";
import bookmarkIcon from "@/assets/icons/bookmark-line.svg";

export default function DocumentBanner({
  titleText,
  componentListText,
  bodyText,
}: IDocumentBanner) {
  return (
    <S.BannerContainer>
      <S.ContentContainer>
        <S.TitleSection>
          <S.DisplayContainer>
            <S.DisplayBox>
              <S.TitleText>{titleText}</S.TitleText>
              <S.ComponentListText>{componentListText}</S.ComponentListText>
            </S.DisplayBox>
            <S.BodyText>{bodyText}</S.BodyText>
          </S.DisplayContainer>
          <S.ButtonContainer>
            <Button
              $isLeftIconVisible
              $isRightIconVisible={false}
              $leftIcon={chatIcon}
              text="댓글 보기"
              $size="lg"
              $buttonType="button"
              $buttonStyle={ButtonStyle.OutlinedSecondary}
            />
            <Button
              $isLeftIconVisible
              $isRightIconVisible={false}
              $leftIcon={bookmarkIcon}
              text="북마크 하기"
              $size="lg"
              $buttonType="button"
              $buttonStyle={ButtonStyle.OutlinedSecondary}
            />
          </S.ButtonContainer>
        </S.TitleSection>
        <S.ImageBox />
      </S.ContentContainer>
    </S.BannerContainer>
  );
}
