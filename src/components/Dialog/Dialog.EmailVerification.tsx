import sampleImage from "@/assets/images/sampleImage.png";
import Image from "next/image";
import { DIALOG_TEXT } from "@/constants/messages";
import * as S from "./Dialog.EmailVerification.style";
import Button from "../Button/Button";
import { ButtonStyle } from "../Button/Button.types";

export default function DialogEmailVerification() {
  return (
    <S.DialogEmailVerificationWrapper>
      <S.DialogEmailVerificationTitleContainer>
        <S.DialogEmailVerificationImageContainer>
          <Image src={sampleImage} alt="sampleImage" />
        </S.DialogEmailVerificationImageContainer>
        <S.DialogEmailVerificationTitleWrap>
          <S.DialogEmailVerificationTitleText>
            {DIALOG_TEXT.emailVerification.titleText}
          </S.DialogEmailVerificationTitleText>
          <S.DialogEmailVerificationBodyText>
            {DIALOG_TEXT.emailVerification.bodyText}
          </S.DialogEmailVerificationBodyText>
        </S.DialogEmailVerificationTitleWrap>
      </S.DialogEmailVerificationTitleContainer>
      <S.DialogEmailVerificationButtonContainer>
        <Button
          text={DIALOG_TEXT.emailVerification.cancelButtonText}
          $buttonStyle={ButtonStyle.OutlinedSecondary}
          $size="md"
        />
        <Button
          text={DIALOG_TEXT.emailVerification.confirmButtonText}
          $buttonStyle={ButtonStyle.SolidBrand}
          $size="md"
        />
      </S.DialogEmailVerificationButtonContainer>
    </S.DialogEmailVerificationWrapper>
  );
}
