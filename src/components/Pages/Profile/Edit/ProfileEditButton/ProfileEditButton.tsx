import { Button } from "@/components";
import { ButtonStyle } from "@/components/Button/Button.types";
import { PROFILE_EDIT_TEXT } from "@/constants/messages";
import * as S from "./ProfileEditButton.style";
// import { useSignupUserStore } from "@/hooks/store/useSignupUserStore";
// import SignupJobs from "@/types/enum/signupJobs";
// import { useSignupMutation } from "@/hooks/api/useSignupMutation";
// import { useRouter } from "next/navigation";
// import validateNickname from "@/utils/validateNickname";

export default function ProfileEditButton() {
  // const router = useRouter();
  // const { nickname, job, socialAccountToken, cancelSignup } =
  //   useSignupUserStore();
  // const isSubmitDisabled =
  //   !nickname || job === SignupJobs.NONE || !validateNickname(nickname);

  // const { mutate: signupMutate, isPending, isError } = useSignupMutation();

  // // job 변환 (ex. "개발자" -> "DEVELOPER")
  // const getJobKey = (jobValue: string) =>
  //   (Object.entries(SignupJobs).find(
  //     // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //     ([_, value]) => value === jobValue
  //   )?.[0] as keyof typeof SignupJobs) || "";

  // const handleSignup = () => {
  //   signupMutate({
  //     nickname,
  //     job: getJobKey(job),
  //     socialAccountToken,
  //   });
  // };

  // // 에러 처리
  // if (isError) {
  //   return <div>회원가입 중 오류가 발생했습니다.</div>;
  // }

  // const handleCancelClick = () => {
  //   cancelSignup();
  //   router.push("/");
  // };

  return (
    <S.ProfileEditButtonContainer>
      <Button
        text={PROFILE_EDIT_TEXT.cancelButtonText}
        $size="md"
        $buttonStyle={ButtonStyle.OutlinedSecondary}
        // onClick={handleCancelClick}
      />
      <Button
        text={PROFILE_EDIT_TEXT.submitButtonText}
        $size="md"
        $buttonStyle={ButtonStyle.SolidBrand}
        // $isDisabled={isSubmitDisabled}
        // onClick={handleSignup}
      />
    </S.ProfileEditButtonContainer>
  );
}
