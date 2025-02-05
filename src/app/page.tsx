"use client";

import {
  Footer,
  NavigationBar,
  Layout,
  OnboardingBanner,
  ImageContainer,
} from "@/components";
import { useLoginMutation } from "@/hooks/api/useLoginMutation";
import { useSocialLoginQuery } from "@/hooks/api/useSocialLoginQuery";
import { useUserInfoQuery } from "@/hooks/api/useUserInfoQuery";
import { useSocialLoginStore } from "@/hooks/store/useSocialLoginStore";
import { useTokenStore } from "@/hooks/store/useTokenStore";
import { useUserInfoStore } from "@/hooks/store/useUserInfoStore";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { socialLoginState, setAuthCode } = useSocialLoginStore();
  const { accessToken, memberId, setAccessToken, setMemberId } =
    useTokenStore();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- TODO : userInfo 사용하게 되면 해당 주석 제거
  const { userInfo, setUserInfo } = useUserInfoStore();

  useEffect(() => {
    // URL에서 code 파라미터 가져오기
    const codeParam = searchParams.get("code");
    if (codeParam) {
      setAuthCode(codeParam);
    }
  }, [searchParams, setAuthCode]);

  const { socialLoginData } = useSocialLoginQuery(
    socialLoginState.provider || "",
    socialLoginState.authCode
  );
  const { mutate: login, data: loginData } = useLoginMutation();

  useEffect(() => {
    if (!socialLoginState.authCode) return;
    if (!socialLoginData) return;

    if (!socialLoginData.isRegister) {
      router.push("/login/signin");
      return;
    }

    login({ socialAccountId: socialLoginData.socialAccountId });
    router.push("/");
  }, [socialLoginState.authCode, socialLoginData, login, router]);

  useEffect(() => {
    if (loginData) {
      setAccessToken(loginData.accessToken);
      setMemberId(loginData.memberId);
    }
  }, [accessToken, loginData, setAccessToken, setMemberId]);

  const { userInfoData } = useUserInfoQuery(accessToken, memberId);

  useEffect(() => {
    if (userInfoData) {
      setUserInfo(userInfoData);
    }
  }, [userInfoData, setUserInfo]);

  return (
    <Layout>
      <NavigationBar
        $isSeparated={false}
        $isAuthorized={false}
        placeholderText="플레이스 홀더"
      />
      <OnboardingBanner />
      <ImageContainer />
      <Footer />
    </Layout>
  );
}
