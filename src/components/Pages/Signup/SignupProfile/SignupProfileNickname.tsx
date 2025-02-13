import { Button, InputField } from "@/components";
import { ButtonStyle } from "@/components/Button/Button.types";
import { useSignupUserStore } from "@/store/user/useSignupUserStore";
import { useState } from "react";
import validateNickname from "@/utils/validateNickname";
import * as S from "./SignupProfileNickname.style";

export default function SignupProfileNickname() {
  const { nickname, setNickname } = useSignupUserStore();
  const [isNickNameValid, setIsNickNameValid] = useState(true);

  function handleNicknameChange(event: React.ChangeEvent<HTMLInputElement>) {
    const input = event.target.value;

    setIsNickNameValid(validateNickname(input));
    setNickname(input);
  }

  return (
    <S.SignupProfileNicknameInputContainer>
      <InputField
        $size="md"
        placeholderText="김노트"
        $labelVisible
        label={
          <S.SignupProfileNicknameInputLabel>
            닉네임
            <S.SignupProfileNicknameInputLabelStar>
              *
            </S.SignupProfileNicknameInputLabelStar>
          </S.SignupProfileNicknameInputLabel>
        }
        $helperVisible
        // TODO: 유효성 검사에 따라 helperText 기획명세에 맞게 변경
        helperText="특수문자, 공백 제외. 한글, 영문, 숫자로 10자 이내만 가능해요."
        countLimit="10"
        $style={{ flex: "1 0 0" }}
        $isNegative={!isNickNameValid}
        value={nickname}
        onChange={(event) => handleNicknameChange(event)}
      />
      <Button
        text="중복 검사"
        $size="md"
        $buttonStyle={ButtonStyle.OutlinedPrimary}
        $isDisabled={!isNickNameValid}
      />
    </S.SignupProfileNicknameInputContainer>
  );
}
