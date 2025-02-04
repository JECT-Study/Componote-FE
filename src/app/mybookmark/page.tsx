"use client";

import { useState } from "react";
import {
  Layout,
  NavigationBar,
  DefaultBanner,
  Toolbar,
  Footer,
  EmptyState,
} from "@/components";
import { MainContainer } from "@/components/Pages";
import { BOOKMARK_CONTEXT_MENU_ITEM_LABELS } from "@/constants/contextMenuLabels";
import {
  BANNER_TEXT,
  BOOKMARK_PAGE_TEXT,
  NAVBAR_ITEM_TEXT,
} from "@/constants/messages";

export default function MyBookMark() {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const getEmptyStateText = () => {
    if (!selectedTabIndex) return BOOKMARK_PAGE_TEXT.emptyState("컴포넌트가");
    return BOOKMARK_PAGE_TEXT.emptyState("디자인 시스템이");
  };

  return (
    <Layout>
      <NavigationBar
        $isAuthorized
        $isSeparated
        placeholderText={NAVBAR_ITEM_TEXT.inputPlaceholder}
      />
      <DefaultBanner
        titleText={BANNER_TEXT.bookmark.titleText}
        descriptionText={BANNER_TEXT.bookmark.descriptionText}
      />
      <Toolbar
        contextMenuItemLabels={BOOKMARK_CONTEXT_MENU_ITEM_LABELS}
        defaultItem={BOOKMARK_CONTEXT_MENU_ITEM_LABELS[0]}
        onTabSelect={setSelectedTabIndex}
      />
      <MainContainer>
        <EmptyState text={getEmptyStateText()} />
      </MainContainer>
      <Footer />
    </Layout>
  );
}
