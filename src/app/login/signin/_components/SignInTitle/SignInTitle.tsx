import { Logo } from "@/components";
import * as S from "./SignInTitle.style";

export default function SignInTitle() {
  return (
    <S.SigninTitleWrapper>
      <Logo />
      <S.SigninTitleText>회원가입</S.SigninTitleText>
    </S.SigninTitleWrapper>
  );
}
