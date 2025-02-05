import { Button } from "@/components";
import { ButtonStyle } from "@/components/Button/Button.types";
import { SIGNUP_TEXT } from "@/constants/messages";
import * as S from "./SignupButton.style";

export default function SignupButton() {
  return (
    <S.SignupButtonContainer>
      <Button
        text={SIGNUP_TEXT.cancelButtonText}
        $size="md"
        $buttonStyle={ButtonStyle.OutlinedSecondary}
      />
      <Button
        text={SIGNUP_TEXT.submitButtonText}
        $size="md"
        $buttonStyle={ButtonStyle.SolidBrand}
      />
    </S.SignupButtonContainer>
  );
}
