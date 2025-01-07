import Button from "../Button/Button";
import { ButtonStyle } from "../Button/Button.types";
import Divider from "../Divider/Divider";
import SocialAuthButton from "../SocialAuth/SocialAuthButton";
import * as S from "./Dialog.Login.style";

export default function DialogLogin() {
  return (
    <S.DialogLoginWrapper>
      <S.DialogLoginSection>
        <S.DialogLoginWrap>
          <S.DialogLoginTitleContainer>
            <S.DialogLoginTitleText>로그인/회원가입</S.DialogLoginTitleText>
            <Button
              text="닫기"
              $buttonStyle={ButtonStyle.EmptySecondary}
              $size="sm"
              $isLeftIconVisible={false}
              $isRightIconVisible={false}
            />
          </S.DialogLoginTitleContainer>
          <S.DialogLoginBodyText>
            컴포노트에 로그인하면, 사람들과 컴포넌트에 대해 소통할 수 있어요.
          </S.DialogLoginBodyText>
        </S.DialogLoginWrap>
        <S.DialogLoginButtonContainer>
          <SocialAuthButton variant="google" labelText="Google 로 시작하기" />
          <SocialAuthButton variant="github" labelText="GitHub 으로 시작하기" />
        </S.DialogLoginButtonContainer>
      </S.DialogLoginSection>
      <Divider $layout="horizontal" $stroke="normal" />
      <S.DialogLoginCaptionText>
        로그인하시면{" "}
        <S.DialogLoginCaptionLinkText>이용 약관</S.DialogLoginCaptionLinkText>과{" "}
        <S.DialogLoginCaptionLinkText>
          개인정보 처리방침
        </S.DialogLoginCaptionLinkText>
        에 동의하는 것으로 간주돼요.
      </S.DialogLoginCaptionText>
    </S.DialogLoginWrapper>
  );
}
