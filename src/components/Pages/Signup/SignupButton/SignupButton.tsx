import { Button } from "@/components";
import { ButtonStyle } from "@/components/Button/Button.types";
import { SIGNUP_TEXT } from "@/constants/messages";
import { useSignupUserStore } from "@/store/user/useSignupUserStore";
import SignupJobs from "@/types/enum/signupJobs";
import { useSignupMutation } from "@/hooks/api/useSignupMutation";
import { useRouter } from "next/navigation";
import validateNickname from "@/utils/validateNickname";
import getJobKey from "@/utils/getJobKey";
import * as S from "./SignupButton.style";

export default function SignupButton() {
  const router = useRouter();
  const { nickname, job, socialAccountToken, cancelSignup } =
    useSignupUserStore();
  const isSubmitDisabled =
    !nickname || job === SignupJobs.NONE || !validateNickname(nickname);

  const { mutate: signupMutate, isPending, isError } = useSignupMutation();

  const handleSignup = () => {
    signupMutate({
      nickname,
      job: getJobKey(job),
      socialAccountToken,
    });
  };

  // 에러 처리
  if (isError) {
    return <div>회원가입 중 오류가 발생했습니다.</div>;
  }

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
        text={isPending ? "로딩중..." : SIGNUP_TEXT.submitButtonText}
        $size="md"
        $buttonStyle={ButtonStyle.SolidBrand}
        $isDisabled={isSubmitDisabled}
        onClick={handleSignup}
      />
    </S.SignupButtonContainer>
  );
}
