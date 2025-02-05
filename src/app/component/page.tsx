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
} from "@/components";
import { BANNER_TEXT } from "@/constants/messages";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { searchComponent } from "@/api/component";
import { useObserver } from "@/hooks/api/common/useObserver";
import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import { COMPONENT_CONTEXT_MENU_ITEM_LABELS } from "@/constants/contextMenuLabels";

interface ComponentData {
  id: number;
  title: string;
  thumbnailUrl: string;
  type: "input" | "display" | "feedback" | "navigation";
  introduction: string;
  designReferenceCount: number;
  commentCount: number;
  bookmarkCount: number;
}

interface PageData {
  content: ComponentData[];
  pageSize: number;
  hasNext: boolean;
  pageNumber: number;
  totalPages: number;
  totalElements: number;
}
export default function Component() {
  const router = useRouter();
  const lastElementRef = useRef<HTMLDivElement | null>(null);

  const fetchComponents = async ({ pageParam = 0 }): Promise<PageData> => {
    const data = await searchComponent(pageParam, 10);
    return data;
  };

  const { data, fetchNextPage, isLoading, isError } = useInfiniteQuery<
    PageData,
    Error,
    InfiniteData<PageData, unknown>
  >({
    queryKey: ["components"],
    queryFn: fetchComponents,
    getNextPageParam: (lastPage) =>
      lastPage.hasNext ? lastPage.pageNumber + 1 : undefined,
  });

  useObserver({
    target: lastElementRef,
    onIntersect: () => fetchNextPage(),
  });
  return (
    <Layout>
      <NavigationBar
        $isAuthorized
        $isSeparated
        placeholderText="컴포넌트나 디자인 시스템을 검색해 보세요..."
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
          page.content.map((component: ComponentData) => (
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
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error loading components.</p>}
      <div ref={lastElementRef} />
      <Footer />
    </Layout>
  );
}
