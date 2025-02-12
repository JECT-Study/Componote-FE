import { PROFILE_EDIT_TEXT } from "@/constants/messages";
import * as S from "./ProfileEditProfile.style";
import ProfileEditProfileImage from "./ProfileEditProfileImage";
import ProfileEditProfileNickname from "./ProfileEditProfileNickname";

export default function ProfileEditProfile() {
  return (
    <S.ProfileEditProfileWrapper>
      <S.ProfileEditProfileTitleContainer>
        {PROFILE_EDIT_TEXT.profileText}
      </S.ProfileEditProfileTitleContainer>
      <S.ProfileEditProfileInputSection>
        <ProfileEditProfileImage />
        <ProfileEditProfileNickname />
      </S.ProfileEditProfileInputSection>
    </S.ProfileEditProfileWrapper>
  );
}
