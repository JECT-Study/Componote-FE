import { Button, InputField } from "@/components";
import { ButtonStyle } from "@/components/Button/Button.types";
import * as S from "./SignInProfileNickname.style";

export default function SignInProfileNickname() {
  return (
    <S.SigninProfileNicknameInputContainer>
      <InputField
        $size="md"
        placeholderText="김노트"
        $labelVisible
        label={
          <S.SigninProfileNicknameInputLabel>
            닉네임
            <S.SigninProfileNicknameInputLabelStar>
              *
            </S.SigninProfileNicknameInputLabelStar>
          </S.SigninProfileNicknameInputLabel>
        }
        $helperVisible
        helperText="특수문자, 공백 제외. 한글, 영문, 숫자로 10자 이내만 가능해요."
        countLimit="10"
        $width="100%"
      />
      <Button
        text="중복 검사"
        $size="md"
        $buttonStyle={ButtonStyle.OutlinedPrimary}
      />
    </S.SigninProfileNicknameInputContainer>
  );
}
