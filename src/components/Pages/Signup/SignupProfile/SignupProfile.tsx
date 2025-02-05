import { SIGNUP_TEXT } from "@/constants/messages";
import * as S from "./SignupProfile.style";
import SignupProfileImage from "./SignupProfileImage";
import SignupProfileNickname from "./SignupProfileNickname";

export default function SignupProfile() {
  return (
    <S.SignupProfileWrapper>
      <S.SignupProfileTitleContainer>
        {SIGNUP_TEXT.profileText}
      </S.SignupProfileTitleContainer>
      <S.SignupProfileInputSection>
        <SignupProfileImage />
        <SignupProfileNickname />
      </S.SignupProfileInputSection>
    </S.SignupProfileWrapper>
  );
}
