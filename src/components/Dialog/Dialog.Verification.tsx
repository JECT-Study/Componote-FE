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
              이메일 인증하기
            </S.DialogVerificationTitleText>
            <Button
              text="닫기"
              $buttonStyle={ButtonStyle.EmptySecondary}
              $size="sm"
            />
          </S.DialogVerificationTitleContainer>
          <S.DialogVerificationBodyText>
            이메일 정보를 추가하고, 컴포노트에서 일어나는 다양한 일들을
            알아보세요.
          </S.DialogVerificationBodyText>
        </S.DialogVerificationWrap>
        <S.DialogVerificationButtonContainer>
          <SocialAuthButton
            variant="google"
            labelText="Google 이메일 인증하기"
          />
        </S.DialogVerificationButtonContainer>
      </S.DialogVerificationSection>
    </S.DialogVerificationWrapper>
  );
}
