"use client";

import { Footer, NavigationBar, Layout } from "@/components";
import { MainContent } from "@/components/Pages";
import { Suspense } from "react";

export default function Home() {
  return (
    <Layout>
      <NavigationBar
        $isSeparated={false}
        placeholderText="플레이스 홀더"
        // TODO : 유저 이미지 파일 경로가 있으면 주석 해제
        // userProfileSrc={userInfo.profileImageUrl}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <MainContent />
      </Suspense>
      <Footer />
    </Layout>
  );
}
