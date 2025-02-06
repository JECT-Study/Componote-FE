"use client";

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
import { BANNER_TEXT, NAVBAR_ITEM_TEXT } from "@/constants/messages";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { useObserver } from "@/hooks/api/common/useObserver";
import { COMPONENT_CONTEXT_MENU_ITEM_LABELS } from "@/constants/contextMenuLabels";
import { useComponentList } from "@/hooks/api/component/useComponentList";
import { IComponentData } from "@/types/component";

export default function Component() {
  const router = useRouter();
  const lastElementRef = useRef<HTMLDivElement | null>(null);
  const { data, fetchNextPage, hasNextPage, isLoading, isError } =
    useComponentList();

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
      <Toolbar
        contextMenuItemLabels={COMPONENT_CONTEXT_MENU_ITEM_LABELS}
        defaultItem={COMPONENT_CONTEXT_MENU_ITEM_LABELS[0]}
      >
        <ChipList />
      </Toolbar>
      <CardContainer>
        {data?.pages.map((page) =>
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
          )),
        )}
      </CardContainer>
      {isLoading && <EmptyState text="컴포넌트 목록을 로드 중이에요" />}
      {isError && <EmptyState text="컴포넌트 목록을 로드할 수 없어요" />}
      <div ref={lastElementRef} />
      <Footer />
    </Layout>
  );
}
