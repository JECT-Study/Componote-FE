"use client";

import { useState } from "react";
import {
  Layout,
  NavigationBar,
  Footer,
  EmptyState,
  ProfileBanner,
} from "@/components";
import { NAVBAR_ITEM_TEXT } from "@/constants/messages";
import { ProfileContainer, ProfileTab } from "@/components/Pages";
import { useTokenStore } from "@/hooks/store/useTokenStore";

export default function Profile() {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const { accessToken } = useTokenStore();

  const getEmptyStateText = () => {
    if (!selectedTabIndex) return `아직 알림이 없어요`;
    return `아직 작성한 댓글이 없어요`;
  };

  return (
    <Layout>
      <NavigationBar
        $isAuthorized={!!accessToken}
        $isSeparated
        placeholderText={NAVBAR_ITEM_TEXT.inputPlaceholder}
      />
      <ProfileBanner
        emailAddress="아직 인증된 이메일 주소가 없어요."
        loginInfo="Google 소셜"
      />
      <ProfileTab onTabSelect={setSelectedTabIndex} />
      <ProfileContainer>
        <EmptyState text={getEmptyStateText()} />
      </ProfileContainer>
      <Footer />
    </Layout>
  );
}
