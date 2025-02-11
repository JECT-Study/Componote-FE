import { Logo } from "@/components";
import * as S from "./SignupTitle.style";

export default function SignupTitle({ titleText }: { titleText: string }) {
  return (
    <S.SignupTitleWrapper>
      <Logo />
      <S.SignupTitleText>{titleText}</S.SignupTitleText>
    </S.SignupTitleWrapper>
  );
}
