"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import {
  Layout,
  NavigationBar,
  DefaultBanner,
  Toolbar,
  ChipList,
  ComponentCard,
  CardContainer,
  Footer,
  EmptyState,
} from "@/components";
import {
  BANNER_TEXT,
  COMPONENT_PAGE_TEXT,
  NAVBAR_ITEM_TEXT,
} from "@/constants/messages";
import { MainContainer } from "@/components/Pages";
import { useObserver } from "@/hooks/api/common/useObserver";
import { COMPONENT_CONTEXT_MENU_ITEM_LABELS } from "@/constants/contextMenuLabels";
import { useComponentListInfiniteQuery } from "@/hooks/api/component/useComponentListInfiniteQuery";
import useChipStore from "@/store/component/useChipStore";
import { DISPLAY_TYPE } from "@/constants/componentChip";
import { IComponentData } from "@/types/api/component";

export default function Component() {
  const router = useRouter();
  const { selectedChips } = useChipStore();
  const lastElementRef = useRef<HTMLDivElement | null>(null);

  const selectedChipNames = selectedChips
    .map((chipIndex) => DISPLAY_TYPE[chipIndex])
    .join(", ");

  const { data, fetchNextPage, hasNextPage, isLoading, isError } =
    useComponentListInfiniteQuery(selectedChipNames, selectedChips);

  useObserver({
    target: lastElementRef,
    onIntersect: ([entry]) => {
      if (entry.isIntersecting && hasNextPage) fetchNextPage();
    },
  });

  return (
    <Layout>
      <NavigationBar
        $isAuthorized
        $isSeparated
        placeholderText={NAVBAR_ITEM_TEXT.inputPlaceholder}
      />
      <DefaultBanner
        titleText={BANNER_TEXT.component.titleText}
        descriptionText={BANNER_TEXT.component.descriptionText}
      />
      <Toolbar contextMenuItemLabels={COMPONENT_CONTEXT_MENU_ITEM_LABELS}>
        <ChipList />
      </Toolbar>
      <CardContainer $content={!data?.pages[0].totalElements}>
        {data?.pages.map((page) =>
          page.content.length ? (
            page.content.map((component: IComponentData) => (
              <ComponentCard
                key={component.id}
                onClick={() => router.push(`/component/${component.id}`)}
                $src={component.thumbnailUrl}
                $type={component.type}
                componentName={component.title}
                descriptionText={component.introduction}
                $sampleCount={component.designReferenceCount.toString()}
                $commentCount={component.commentCount.toString()}
                $bookmarkCount={component.bookmarkCount.toString()}
              />
            ))
          ) : (
            <EmptyState
              key="empty state"
              text={COMPONENT_PAGE_TEXT.noConditions}
            />
          ),
        )}
      </CardContainer>
      {isLoading && (
        <MainContainer>
          <EmptyState text={COMPONENT_PAGE_TEXT.loading} />
        </MainContainer>
      )}
      {isError && (
        <MainContainer>
          <EmptyState text={COMPONENT_PAGE_TEXT.error} />
        </MainContainer>
      )}
      <div ref={lastElementRef} />
      <Footer />
    </Layout>
  );
}
