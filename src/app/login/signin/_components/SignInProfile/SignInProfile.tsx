import { SIGNIN_TEXT } from "@/constants/messages";
import * as S from "./SignInProfile.style";
import SignInProfileImage from "./SignInProfileImage";
import SignInProfileNickname from "./SignInProfileNickname";

export default function SignInProfile() {
  return (
    <S.SigninProfileWrapper>
      <S.SigninProfileTitleContainer>
        {SIGNIN_TEXT.profileText}
      </S.SigninProfileTitleContainer>
      <S.SigninProfileInputSection>
        <SignInProfileImage />
        <SignInProfileNickname />
      </S.SigninProfileInputSection>
    </S.SigninProfileWrapper>
  );
}
