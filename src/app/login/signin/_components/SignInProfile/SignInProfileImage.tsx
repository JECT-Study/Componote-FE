import { Avatar, Button } from "@/components";
import { ButtonStyle } from "@/components/Button/Button.types";
import * as S from "./SignInProfileImage.style";

export default function SignInProfileImage() {
  return (
    <S.SigninProfileImageUploadWrapper>
      <S.SigninProfileImageLabel>프로필 이미지</S.SigninProfileImageLabel>
      <Avatar $size="2xl" $badgeVisible={false} />
      <Button
        text="이미지 업로드"
        $size="md"
        $buttonStyle={ButtonStyle.OutlinedSecondary}
      />
      <S.SigninProfileImageHelperCaption>
        jpg, png 이미지 파일을 업로드 할 수 있어요.
      </S.SigninProfileImageHelperCaption>
    </S.SigninProfileImageUploadWrapper>
  );
}
