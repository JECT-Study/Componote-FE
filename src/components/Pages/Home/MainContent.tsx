"use client";

import { OnboardingBanner, ImageContainer } from "@/components";
import { useLoginMutation } from "@/hooks/api/useLoginMutation";
import { useSocialLoginQuery } from "@/hooks/api/useSocialLoginQuery";
import { useUserInfoQuery } from "@/hooks/api/useUserInfoQuery";
import { useSignupUserStore } from "@/hooks/store/useSignupUserStore";
import { useSocialLoginStore } from "@/hooks/store/useSocialLoginStore";
import { useTokenStore } from "@/hooks/store/useTokenStore";
import { useUserInfoStore } from "@/hooks/store/useUserInfoStore";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

// 메인 컨텐츠를 별도 컴포넌트로 분리
export default function MainContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { provider, authCode, setAuthCode } = useSocialLoginStore();
  const { accessToken, memberId } = useTokenStore();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- TODO : userInfo 사용하게 되면
  const { userInfo, setUserInfo } = useUserInfoStore();
  const { setSocialAccountId } = useSignupUserStore();

  useEffect(() => {
    // URL에서 code 파라미터 가져오기
    const codeParam = searchParams.get("code");
    if (codeParam) setAuthCode(codeParam);
  }, [searchParams, setAuthCode]);

  const { socialLoginData } = useSocialLoginQuery(provider || "", authCode);
  const { mutate: loginMutate } = useLoginMutation();

  useEffect(() => {
    if (!authCode) return;
    if (!socialLoginData) return;
    if (accessToken && memberId !== 0) return;

    if (!socialLoginData.isRegister) {
      setSocialAccountId(socialLoginData.socialAccountId);
      router.push("/login/signup");
      return;
    }

    loginMutate({ socialAccountId: socialLoginData.socialAccountId });
    router.push("/");
  }, [
    authCode,
    socialLoginData,
    loginMutate,
    router,
    setSocialAccountId,
    accessToken,
    memberId,
  ]);

  const { userInfoData } = useUserInfoQuery(accessToken || "", memberId);

  useEffect(() => {
    if (userInfoData) {
      setUserInfo(userInfoData);
    }
  }, [userInfoData, setUserInfo]);

  return (
    <>
      <OnboardingBanner />
      <ImageContainer />
    </>
  );
}
