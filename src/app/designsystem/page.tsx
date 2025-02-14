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
  DesignSystemCardContainer,
  DesignSystemCard,
  MainContainer,
} from "@/components/Pages";
import {
  BANNER_TEXT,
  DESIGNSYSTEM_PAGE_TEXT,
  NAVBAR_ITEM_TEXT,
} from "@/constants/messages";
import { DESIGN_SYSTEM_SORT_CONDITION } from "@/constants/designSystemFilterLabel";
import { DESIGN_SYSTEM_CONTEXT_MENU_ITEM_LABELS } from "@/constants/contextMenuLabels";

import { useObserver } from "@/hooks/api/common/useObserver";
import { useDesignSystemInfiniteQuery } from "@/hooks/api/designSystem/useDesignSystemInfiniteQuery";
import useContextMenuStore from "@/store/common/useContextMenuStore";
import { IDesignSystemData } from "@/types/api/designSystem";
import useDesignSystemFilterStore from "@/store/designSystem/useDesignSystemFilterStore";

export default function DesignSystem() {
  const { selectedLabel } = useContextMenuStore();
  const { selectedFilters } = useDesignSystemFilterStore();

  const lastElementRef = useRef<HTMLDivElement | null>(null);
  const {
    data: designSystemList,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError,
  } = useDesignSystemInfiniteQuery({
    filters: selectedFilters.join(","),
    sort: DESIGN_SYSTEM_SORT_CONDITION[selectedLabel],
  });

  useObserver({
    target: lastElementRef,
    onIntersect: ([entry]) => {
      if (entry.isIntersecting && hasNextPage) fetchNextPage();
    },
  });

  return (
    <Layout>
      <NavigationBar
        $isSeparated
        placeholderText={NAVBAR_ITEM_TEXT.inputPlaceholder}
      />
      <DefaultBanner
        titleText={BANNER_TEXT.designSystem.titleText}
        descriptionText={BANNER_TEXT.designSystem.descriptionText}
      />
      <Toolbar contextMenuItemLabels={DESIGN_SYSTEM_CONTEXT_MENU_ITEM_LABELS}>
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
