import { Button } from "@/components";
import { ButtonStyle } from "@/components/Button/Button.types";
import { SIGNUP_TEXT } from "@/constants/messages";
import { useSignupUserStore } from "@/hooks/store/useSignupUserStore";
import SignupJobs from "@/types/enum/signupJobs";
import * as S from "./SignupButton.style";

export default function SignupButton() {
  const { nickname, job, socialAccountId } = useSignupUserStore();
  const isSubmitDisabled =
    !nickname || job === SignupJobs.NONE || !socialAccountId;

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
        $isDisabled={isSubmitDisabled}
      />
    </S.SignupButtonContainer>
  );
}
