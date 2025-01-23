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
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [code, setCode] = useState<string | null>(null);

  useEffect(() => {
    // URL에서 code 파라미터 가져오기
    const codeParam = searchParams.get("code");
    if (codeParam) {
      setCode(codeParam);
    }
  }, [searchParams]);

  // TODO : 소셜 로그인 어떤 소셜인지 넣어주기! (현재 임시로 naver)
  const { socialLoginData } = useSocialLoginQuery("naver", code);
  const { mutate: login } = useLoginMutation();

  useEffect(() => {
    if (!code) return;
    if (!socialLoginData) return;
    if (!socialLoginData.isRegister) {
      router.push("/login/signin");
      return;
    }
    login({ socialAccountId: socialLoginData.socialAccountId });
    router.push("/");
  }, [code, socialLoginData, login, router]);

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
