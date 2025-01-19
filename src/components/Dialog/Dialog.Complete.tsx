import { DIALOG_TEXT } from "@/constants/messages";
import Image from "next/image";
import sampleImage from "@/assets/images/dialogCompleteSampleImage.png";
import Button from "../Button/Button";
import { ButtonStyle } from "../Button/Button.types";
import * as S from "./Dialog.Complete.style";

export default function DialogComplete() {
  return (
    <S.DialogCompleteWrapper>
      <S.DialogCompleteTitleContainer>
        <S.DialogCompleteTitleText>
          {DIALOG_TEXT.complete.titleText}
        </S.DialogCompleteTitleText>
        <S.DialogCompleteBodyText>
          {DIALOG_TEXT.complete.bodyText}
        </S.DialogCompleteBodyText>
      </S.DialogCompleteTitleContainer>
      <S.DialogCompleteSection>
        <S.DialogCompleteCardWrap>
          <S.DialogCompleteCardContainer>
            {DIALOG_TEXT.complete.cardText}
          </S.DialogCompleteCardContainer>
          <S.DialogCompleteImageContainer>
            <Image src={sampleImage} alt="sampleImage" />
          </S.DialogCompleteImageContainer>
        </S.DialogCompleteCardWrap>
      </S.DialogCompleteSection>
      <S.DialogCompleteButtonContainer>
        <Button
          text={DIALOG_TEXT.complete.confirmButtonText}
          $buttonStyle={ButtonStyle.SolidPrimary}
          $size="md"
        />
      </S.DialogCompleteButtonContainer>
    </S.DialogCompleteWrapper>
  );
}
