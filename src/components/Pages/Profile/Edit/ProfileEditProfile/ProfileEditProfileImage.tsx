import { Avatar, Button } from "@/components";
import { ButtonStyle } from "@/components/Button/Button.types";
import * as S from "./ProfileEditProfileImage.style";

export default function ProfileEditProfileImage() {
  return (
    <S.ProfileEditProfileImageUploadWrapper>
      <S.ProfileEditProfileImageLabel>
        프로필 이미지
      </S.ProfileEditProfileImageLabel>
      <Avatar $size="2xl" $badgeVisible={false} />
      <Button
        text="이미지 업로드"
        $size="md"
        $buttonStyle={ButtonStyle.OutlinedSecondary}
      />
      <S.ProfileEditProfileImageHelperCaption>
        jpg, png 이미지 파일을 업로드 할 수 있어요.
      </S.ProfileEditProfileImageHelperCaption>
    </S.ProfileEditProfileImageUploadWrapper>
  );
}
