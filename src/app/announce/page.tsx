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
import {
  ANNOUNCE_PAGE_TEXT,
  BANNER_TEXT,
  NAVBAR_ITEM_TEXT,
} from "@/constants/messages";

export default function Announce() {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const getEmptyStateText = () => {
    if (!selectedTabIndex) {
      return `${ANNOUNCE_PAGE_TEXT.emptyState("공지사항")}`;
    }

    return `${ANNOUNCE_PAGE_TEXT.emptyState("자주 묻는 질문")}`;
  };

  return (
    <Layout>
      <NavigationBar
        $isAuthorized
        $isSeparated
        placeholderText={NAVBAR_ITEM_TEXT.inputPlaceholder}
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
