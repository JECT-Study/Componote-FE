import { Button } from "@/components";
import chatIcon from "@/assets/icons/chat-line.svg";
import bookmarkIcon from "@/assets/icons/bookmark-line.svg";
import * as S from "./Banner.document.style";

import { IDocumentBanner } from "./Banner.types";
import { ButtonStyle } from "../Button/Button.types";

export default function DocumentBanner({
  $src,
  titleText,
  componentListText,
  bodyText,
  commentCount,
  bookmarkCount,
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
              text={commentCount}
              $size="lg"
              $buttonType="button"
              $leftIcon={chatIcon}
              $buttonStyle={ButtonStyle.OutlinedSecondary}
            />
            <Button
              text={bookmarkCount}
              $size="lg"
              $buttonType="button"
              $leftIcon={bookmarkIcon}
              $buttonStyle={ButtonStyle.OutlinedSecondary}
            />
          </S.ButtonContainer>
        </S.TitleSection>
        <S.ImageBox $src={$src} />
      </S.ContentContainer>
    </S.BannerContainer>
  );
}
