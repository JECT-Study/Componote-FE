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
import {
  COMPONENT_DETAIL_PAGE_TEXT,
  NAVBAR_ITEM_TEXT,
} from "@/constants/messages";
import useComponentDetailQuery from "@/hooks/api/componentDetail/useComponentDetailQuery";

export default function ComponentDetail() {
  const params = useParams();
  const componentId = Number(params.componentId);

  const { data, isLoading, isError } = useComponentDetailQuery(componentId);

  if (!data || isError) {
    return <EmptyState text={COMPONENT_DETAIL_PAGE_TEXT.error} />;
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
      {isLoading && <EmptyState text={COMPONENT_DETAIL_PAGE_TEXT.loading} />}
      <Footer />
    </Layout>
  );
}
