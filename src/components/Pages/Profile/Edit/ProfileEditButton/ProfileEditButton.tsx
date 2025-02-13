import { Button } from "@/components";
import { ButtonStyle } from "@/components/Button/Button.types";
import { PROFILE_EDIT_TEXT } from "@/constants/messages";
import { useRouter } from "next/navigation";
import { useProfileEditMutation } from "@/hooks/api/profileEdit/useProfileEditMutation";
import { useTokenStore } from "@/store/user/useTokenStore";
import { useProfileEditStore } from "@/store/user/useProfileEditStore";
import { useEffect } from "react";
import { useUserInfoStore } from "@/store/user/useUserInfoStore";
import * as S from "./ProfileEditButton.style";

export default function ProfileEditButton() {
  const router = useRouter();
  const { accessToken } = useTokenStore();
  const {
    profileInfo: { nickname, profileImageObjectKey, job },
    cancelEdit,
    initializeWithUserInfo,
  } = useProfileEditStore();
  const { userInfo } = useUserInfoStore();

  const {
    mutate: profileEditMutate,
    isPending,
    isError,
  } = useProfileEditMutation(accessToken || "");

  useEffect(() => {
    initializeWithUserInfo(userInfo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = () => {
    profileEditMutate({
      nickname,
      profileImageObjectKey,
      job,
    });
  };

  // 에러 처리
  if (isError) {
    return <div>프로필 편집 중 오류가 발생했습니다.</div>;
  }

  const handleCancelClick = () => {
    cancelEdit();
    router.push("/profile");
  };

  return (
    <S.ProfileEditButtonContainer>
      <Button
        text={PROFILE_EDIT_TEXT.cancelButtonText}
        $size="md"
        $buttonStyle={ButtonStyle.OutlinedSecondary}
        onClick={handleCancelClick}
      />
      <Button
        text={isPending ? "로딩중..." : PROFILE_EDIT_TEXT.submitButtonText}
        $size="md"
        $buttonStyle={ButtonStyle.SolidBrand}
        onClick={handleSubmit}
      />
    </S.ProfileEditButtonContainer>
  );
}
