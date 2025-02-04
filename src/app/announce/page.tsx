"use client";

import { useState } from "react";
import {
  Layout,
  NavigationBar,
  DefaultBanner,
  Footer,
  EmptyState,
} from "@/components";
import { AnnouncTab, AnnounceContainer } from "@/components/Pages";
import { BANNER_TEXT } from "@/constants/messages";

export default function Announce() {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const getEmptyStateText = () => {
    if (!selectedTabIndex) return "아직 공지사항이 없어요";
    return "아직 자주 묻는 질문이 없어요";
  };

  return (
    <Layout>
      <NavigationBar
        $isAuthorized
        $isSeparated
        placeholderText="컴포넌트나 디자인 시스템을 검색해 보세요..."
      />
      <DefaultBanner
        titleText={BANNER_TEXT.announcement.titleText}
        descriptionText={BANNER_TEXT.announcement.descriptionText}
      />
      <AnnouncTab onTabSelect={setSelectedTabIndex} />
      <AnnounceContainer>
        <EmptyState text={getEmptyStateText()} />
      </AnnounceContainer>
      <Footer />
    </Layout>
  );
}
