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
import { Suspense, useEffect } from "react";

// 메인 컨텐츠를 별도 컴포넌트로 분리
function MainContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { socialLoginState, setAuthCode } = useSocialLoginStore();
  const { accessToken, memberId, setAccessToken, setMemberId } =
    useTokenStore();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- TODO : userInfo 사용하게 되면
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
    <>
      <OnboardingBanner />
      <ImageContainer />
    </>
  );
}

// 페이지 컴포넌트
export default function Home() {
  return (
    <Layout>
      <NavigationBar
        $isSeparated={false}
        $isAuthorized={false}
        placeholderText="플레이스 홀더"
      />
      <Suspense fallback={<div>Loading...</div>}>
        <MainContent />
      </Suspense>
      <Footer />
    </Layout>
  );
}
