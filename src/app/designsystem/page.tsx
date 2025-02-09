"use client";

import {
  Layout,
  NavigationBar,
  DefaultBanner,
  Toolbar,
  ButtonList,
  Footer,
  EmptyState,
} from "@/components";
import { BANNER_TEXT, DESIGNSYSTEM_PAGE_TEXT } from "@/constants/messages";
import { useTokenStore } from "@/hooks/store/useTokenStore";
import { useDesignSystemInfiniteQuery } from "@/hooks/api/designSystem/useDesignSystemInfiniteQuery";
import { useRef } from "react";
import { useObserver } from "@/hooks/api/common/useObserver";
import {
  DesignSystemCardContainer,
  DesignSystemCard,
} from "@/components/Pages";
import { IDesignSystemData } from "@/types/api/designSystem";

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
        placeholderText="컴포넌트나 디자인 시스템을 검색해 보세요..."
      />
      <DefaultBanner
        titleText={BANNER_TEXT.designSystem.titleText}
        descriptionText={BANNER_TEXT.designSystem.descriptionText}
      />
      <Toolbar>
        <ButtonList />
      </Toolbar>
      <DesignSystemCardContainer>
        {designSystemList?.pages.map((page) =>
          page.content.map((designSystemData: IDesignSystemData) => (
            <DesignSystemCard
              key={designSystemData.name}
              designSystem={designSystemData}
            />
          ))
        )}
      </DesignSystemCardContainer>
      {isLoading && <EmptyState text={DESIGNSYSTEM_PAGE_TEXT.loading} />}
      {isError && <EmptyState text={DESIGNSYSTEM_PAGE_TEXT.error} />}
      <div ref={lastElementRef} />
      <Footer />
    </Layout>
  );
}
