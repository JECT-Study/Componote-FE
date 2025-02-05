import { Button } from "@/components";
import { ButtonStyle } from "@/components/Button/Button.types";
import { SIGNUP_TEXT } from "@/constants/messages";
import { useSignupUserStore } from "@/hooks/store/useSignupUserStore";
import SignupJobs from "@/types/enum/signupJobs";
import { useRouter } from "next/navigation";
import * as S from "./SignupButton.style";

export default function SignupButton() {
  const router = useRouter();
  const { nickname, job, socialAccountId, cancelSignup } = useSignupUserStore();
  const isSubmitDisabled =
    !nickname || job === SignupJobs.NONE || !socialAccountId;

  const handleCancelClick = () => {
    cancelSignup();
    router.push("/");
  };

  return (
    <S.SignupButtonContainer>
      <Button
        text={SIGNUP_TEXT.cancelButtonText}
        $size="md"
        $buttonStyle={ButtonStyle.OutlinedSecondary}
        onClick={handleCancelClick}
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
