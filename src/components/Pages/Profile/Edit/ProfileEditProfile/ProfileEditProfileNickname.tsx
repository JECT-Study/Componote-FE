import { Button, InputField } from "@/components";
import { ButtonStyle } from "@/components/Button/Button.types";
import { useState } from "react";
import validateNickname from "@/utils/validateNickname";
import { useProfileEditStore } from "@/store/user/useProfileEditStore";
import { useUserInfoStore } from "@/store/user/useUserInfoStore";
import * as S from "./ProfileEditProfileNickname.style";

export default function ProfileEditProfileNickname() {
  const { userInfo } = useUserInfoStore();
  const { profileInfo, setProfileInfo } = useProfileEditStore();
  const [isNickNameValid, setIsNickNameValid] = useState(true);
  const [nickname, setNickname] = useState(userInfo.nickname);

  function handleNicknameBlur() {
    setIsNickNameValid(validateNickname(nickname));
    setProfileInfo({ ...profileInfo, nickname });
  }

  return (
    <S.ProfileEditProfileNicknameInputContainer>
      <InputField
        $size="md"
        placeholderText="김노트"
        $labelVisible
        label={
          <S.ProfileEditProfileNicknameInputLabel>
            닉네임
            <S.ProfileEditProfileNicknameInputLabelStar>
              *
            </S.ProfileEditProfileNicknameInputLabelStar>
          </S.ProfileEditProfileNicknameInputLabel>
        }
        $helperVisible
        // TODO: 유효성 검사에 따라 helperText 기획명세에 맞게 변경
        helperText="특수문자, 공백 제외. 한글, 영문, 숫자로 10자 이내만 가능해요."
        countLimit="10"
        $style={{ flex: "1 0 0" }}
        $isNegative={!isNickNameValid}
        value={nickname}
        onChange={(event) => setNickname(event.target.value)}
        onBlur={() => handleNicknameBlur()}
      />
      <Button
        text="중복 검사"
        $size="md"
        $buttonStyle={ButtonStyle.OutlinedPrimary}
        $isDisabled={!isNickNameValid}
      />
    </S.ProfileEditProfileNicknameInputContainer>
  );
}
