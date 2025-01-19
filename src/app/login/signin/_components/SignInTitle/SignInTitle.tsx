import { Logo } from "@/components";
import { SIGNIN_TEXT } from "@/constants/messages";
import * as S from "./SignInTitle.style";

export default function SignInTitle() {
  return (
    <S.SigninTitleWrapper>
      <Logo />
      <S.SigninTitleText>{SIGNIN_TEXT.titleText}</S.SigninTitleText>
    </S.SigninTitleWrapper>
  );
}
