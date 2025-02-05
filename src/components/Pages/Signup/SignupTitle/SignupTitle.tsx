import { Logo } from "@/components";
import { SIGNUP_TEXT } from "@/constants/messages";
import * as S from "./SignupTitle.style";

export default function SignupTitle() {
  return (
    <S.SignupTitleWrapper>
      <Logo />
      <S.SignupTitleText>{SIGNUP_TEXT.titleText}</S.SignupTitleText>
    </S.SignupTitleWrapper>
  );
}
