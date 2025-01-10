import * as S from "./SignInFooter.style";

export default function SignInFooter() {
  return (
    <S.SigninFooterText>
      회원가입 하시면 <S.SigninFooterLinkText>이용 약관</S.SigninFooterLinkText>
      과 <S.SigninFooterLinkText>개인정보 처리방침</S.SigninFooterLinkText>에
      동의하는 것으로 간주돼요.
    </S.SigninFooterText>
  );
}
