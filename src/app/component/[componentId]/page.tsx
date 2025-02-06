"use client";

import {
  Layout,
  NavigationBar,
  DocumentBanner,
  Footer,
  EmptyState,
} from "@/components";
import { useParams } from "next/navigation";
import { DocumentSection } from "@/components/Pages";
import { NAVBAR_ITEM_TEXT } from "@/constants/messages";
import useComponentDetailQuery from "@/hooks/api/componentDetail/useComponentDetailQuery";

export default function ComponentDetail() {
  const params = useParams();
  const componentId = Number(params.componentId);

  const { data, isLoading, isError } = useComponentDetailQuery(componentId);

  if (!data || isError) {
    return <EmptyState text="컴포넌트 세부 내용을 불러올 수 없어요" />;
  }

  return (
    <Layout>
      <NavigationBar
        $isAuthorized
        $isSeparated
        placeholderText={NAVBAR_ITEM_TEXT.inputPlaceholder}
      />
      <DocumentBanner
        $src={data.thumbnailUrl}
        titleText={data.title}
        componentListText={data.mixedNames.join(", ")}
        bodyText={data.introduction}
        commentCount={data.commentCount.toString()}
        bookmarkCount={data.commentCount.toString()}
      />
      <DocumentSection
        designReferenceCount={data.designReferenceCount}
        descriptionText={data.blocks.DESCRIPTION[0].content}
        useCaseText={data.blocks.USE_CASE[0].content}
      />
      {isLoading && <EmptyState text="컴포넌트 세부 내용을 로드 중이에요" />}
      <Footer />
    </Layout>
  );
}
