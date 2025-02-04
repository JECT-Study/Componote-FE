import { DIALOG_TEXT } from "@/constants/messages";
import { useRouter } from "next/navigation";
import {
  useGithubAuthUrlQuery,
  useGoogleAuthUrlQuery,
  // useNaverAuthUrlQuery,
} from "@/hooks/api/useAuthUrlQuery";
import { useSocialLoginStore } from "@/hooks/store/useSocialLoginStore";
import Button from "../Button/Button";
import { ButtonStyle } from "../Button/Button.types";
import Divider from "../Divider/Divider";
import SocialAuthButton from "../SocialAuth/SocialAuthButton";
import * as S from "./Dialog.Login.style";

export default function DialogLogin({
  router,
}: {
  router: ReturnType<typeof useRouter>;
}) {
  const { authUrl: googleUrl } = useGoogleAuthUrlQuery();
  const { authUrl: githubUrl } = useGithubAuthUrlQuery();
  // test를 위한 임시 코드입니다.
  // const { authUrl: naverUrl } = useNaverAuthUrlQuery();
  const setProvider = useSocialLoginStore((state) => state.setProvider);

  const handleGoogleClick = () => {
    if (googleUrl) {
      setProvider("google");
      router.replace(googleUrl.url);
    }
  };

  const handleGithubClick = () => {
    if (githubUrl) {
      setProvider("gitHub");
      router.replace(githubUrl.url);
    }
  };

  // test를 위한 임시 코드입니다.
  // const handleNaverClick = () => {
  //   if (naverUrl) {
  //     setProvider("naver");
  //     router.replace(naverUrl.url);
  //   }
  // };

  return (
    <S.DialogLoginWrapper>
      <S.DialogLoginSection>
        <S.DialogLoginWrap>
          <S.DialogLoginTitleContainer>
            <S.DialogLoginTitleText>
              {DIALOG_TEXT.login.titleText}
            </S.DialogLoginTitleText>
            <Button
              text={DIALOG_TEXT.close}
              $buttonStyle={ButtonStyle.EmptySecondary}
              $size="sm"
              onClick={() => router.back()}
            />
          </S.DialogLoginTitleContainer>
          <S.DialogLoginBodyText>
            {DIALOG_TEXT.login.bodyText}
          </S.DialogLoginBodyText>
        </S.DialogLoginWrap>
        <S.DialogLoginButtonContainer>
          <SocialAuthButton
            variant="google"
            labelText={DIALOG_TEXT.login.socialGoogle}
            onClick={handleGoogleClick}
          />
          <SocialAuthButton
            variant="github"
            labelText={DIALOG_TEXT.login.socialGitHub}
            onClick={handleGithubClick}
          />
          {/* 테스트를 위한 임시 코드입니다. */}
          {/* <SocialAuthButton
            variant="github"
            labelText="네이버로 로그인(임시)"
            onClick={handleNaverClick}
          /> */}
        </S.DialogLoginButtonContainer>
      </S.DialogLoginSection>
      <Divider $layout="horizontal" $stroke="normal" />
      <S.DialogLoginCaptionText>
        로그인하시면{" "}
        <S.DialogLoginCaptionLinkText>이용 약관</S.DialogLoginCaptionLinkText>과{" "}
        <S.DialogLoginCaptionLinkText>
          개인정보 처리방침
        </S.DialogLoginCaptionLinkText>
        에 동의하는 것으로 간주돼요.
      </S.DialogLoginCaptionText>
    </S.DialogLoginWrapper>
  );
}
