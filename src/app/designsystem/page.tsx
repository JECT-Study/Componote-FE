"use client";

import { useRef } from "react";
import {
  Layout,
  NavigationBar,
  DefaultBanner,
  Toolbar,
  ButtonList,
  Footer,
  EmptyState,
} from "@/components";
import {
  BANNER_TEXT,
  DESIGNSYSTEM_PAGE_TEXT,
  NAVBAR_ITEM_TEXT,
} from "@/constants/messages";
import { useTokenStore } from "@/hooks/store/useTokenStore";
import { useDesignSystemInfiniteQuery } from "@/hooks/api/designSystem/useDesignSystemInfiniteQuery";
import { useObserver } from "@/hooks/api/common/useObserver";
import {
  DesignSystemCardContainer,
  DesignSystemCard,
  MainContainer,
} from "@/components/Pages";
import { IDesignSystemData } from "@/types/api/designSystem";
import { COMPONENT_CONTEXT_MENU_ITEM_LABELS } from "@/constants/contextMenuLabels";

export default function DesignSystem() {
  const { accessToken } = useTokenStore();

  const lastElementRef = useRef<HTMLDivElement | null>(null);
  const {
    data: designSystemList,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError,
  } = useDesignSystemInfiniteQuery();

  useObserver({
    target: lastElementRef,
    onIntersect: ([entry]) => {
      if (entry.isIntersecting && hasNextPage) fetchNextPage();
    },
  });

  return (
    <Layout>
      <NavigationBar
        $isAuthorized={!!accessToken}
        $isSeparated
        placeholderText={NAVBAR_ITEM_TEXT.inputPlaceholder}
      />
      <DefaultBanner
        titleText={BANNER_TEXT.designSystem.titleText}
        descriptionText={BANNER_TEXT.designSystem.descriptionText}
      />
      <Toolbar contextMenuItemLabels={COMPONENT_CONTEXT_MENU_ITEM_LABELS}>
        <ButtonList />
      </Toolbar>
      <DesignSystemCardContainer>
        {designSystemList?.pages.map((page) =>
          page.content.map((designSystemData: IDesignSystemData) => (
            <DesignSystemCard
              key={designSystemData.name}
              designSystem={designSystemData}
            />
          )),
        )}
      </DesignSystemCardContainer>
      {isLoading && (
        <MainContainer>
          <EmptyState text={DESIGNSYSTEM_PAGE_TEXT.loading} />
        </MainContainer>
      )}
      {isError && (
        <MainContainer>
          <EmptyState text={DESIGNSYSTEM_PAGE_TEXT.error} />
        </MainContainer>
      )}
      <div ref={lastElementRef} />
      <Footer />
    </Layout>
  );
}
