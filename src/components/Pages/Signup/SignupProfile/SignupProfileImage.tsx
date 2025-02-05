import { Avatar, Button } from "@/components";
import { ButtonStyle } from "@/components/Button/Button.types";
import * as S from "./SignupProfileImage.style";

export default function SignupProfileImage() {
  return (
    <S.SignupProfileImageUploadWrapper>
      <S.SignupProfileImageLabel>프로필 이미지</S.SignupProfileImageLabel>
      <Avatar $size="2xl" $badgeVisible={false} />
      <Button
        text="이미지 업로드"
        $size="md"
        $buttonStyle={ButtonStyle.OutlinedSecondary}
      />
      <S.SignupProfileImageHelperCaption>
        jpg, png 이미지 파일을 업로드 할 수 있어요.
      </S.SignupProfileImageHelperCaption>
    </S.SignupProfileImageUploadWrapper>
  );
}
