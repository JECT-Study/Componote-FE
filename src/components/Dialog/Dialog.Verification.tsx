import { DIALOG_TEXT } from "@/constants/messages";
import Button from "../Button/Button";
import { ButtonStyle } from "../Button/Button.types";
import SocialAuthButton from "../SocialAuth/SocialAuthButton";
import * as S from "./Dialog.Verification.style";

export default function DialogVerification() {
  return (
    <S.DialogVerificationWrapper>
      <S.DialogVerificationSection>
        <S.DialogVerificationWrap>
          <S.DialogVerificationTitleContainer>
            <S.DialogVerificationTitleText>
              {DIALOG_TEXT.verification.titleText}
            </S.DialogVerificationTitleText>
            <Button
              text={DIALOG_TEXT.close}
              $buttonStyle={ButtonStyle.EmptySecondary}
              $size="sm"
            />
          </S.DialogVerificationTitleContainer>
          <S.DialogVerificationBodyText>
            {DIALOG_TEXT.verification.bodyText}
          </S.DialogVerificationBodyText>
        </S.DialogVerificationWrap>
        <S.DialogVerificationButtonContainer>
          <SocialAuthButton
            variant="google"
            labelText={DIALOG_TEXT.verification.socialGoogle}
          />
        </S.DialogVerificationButtonContainer>
      </S.DialogVerificationSection>
    </S.DialogVerificationWrapper>
  );
}
