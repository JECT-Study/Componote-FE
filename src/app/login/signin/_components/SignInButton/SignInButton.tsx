import { Button } from "@/components";
import { ButtonStyle } from "@/components/Button/Button.types";
import * as S from "./SignInButton.style";

export default function SignInButton() {
  return (
    <S.SigninButtonContainer>
      <Button
        text="취소하기"
        $size="md"
        $buttonStyle={ButtonStyle.OutlinedSecondary}
      />
      <Button
        text="회원가입 완료"
        $size="md"
        $buttonStyle={ButtonStyle.SolidBrand}
      />
    </S.SigninButtonContainer>
  );
}
