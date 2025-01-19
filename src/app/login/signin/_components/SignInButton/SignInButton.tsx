import { Button } from "@/components";
import { ButtonStyle } from "@/components/Button/Button.types";
import { SIGNIN_TEXT } from "@/constants/messages";
import * as S from "./SignInButton.style";

export default function SignInButton() {
  return (
    <S.SigninButtonContainer>
      <Button
        text={SIGNIN_TEXT.cancelButtonText}
        $size="md"
        $buttonStyle={ButtonStyle.OutlinedSecondary}
      />
      <Button
        text={SIGNIN_TEXT.submitButtonText}
        $size="md"
        $buttonStyle={ButtonStyle.SolidBrand}
      />
    </S.SigninButtonContainer>
  );
}
