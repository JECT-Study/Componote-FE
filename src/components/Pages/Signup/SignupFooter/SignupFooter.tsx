import * as S from "./SignupFooter.style";

export default function SignupFooter() {
  return (
    <S.SignupFooterText>
      회원가입 하시면 <S.SignupFooterLinkText>이용 약관</S.SignupFooterLinkText>
      과 <S.SignupFooterLinkText>개인정보 처리방침</S.SignupFooterLinkText>에
      동의하는 것으로 간주돼요.
    </S.SignupFooterText>
  );
}
