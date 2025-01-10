import * as S from "./SignInProfile.style";
import SignInProfileImage from "./SignInProfileImage";
import SignInProfileNickname from "./SignInProfileNickname";

export default function SignInProfile() {
  return (
    <S.SigninProfileWrapper>
      <S.SigninProfileTitleContainer>
        사용하실 프로필을 설정해 주세요.
      </S.SigninProfileTitleContainer>
      <S.SigninProfileInputSection>
        <SignInProfileImage />
        <SignInProfileNickname />
      </S.SigninProfileInputSection>
    </S.SigninProfileWrapper>
  );
}
