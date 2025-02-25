"use client";

import { useRef } from "react";
import { useParams } from "next/navigation";
import {
  Layout,
  NavigationBar,
  DocumentBanner,
  Footer,
  EmptyState,
} from "@/components";
import {
  BannerContainer,
  DocumentSection,
  IndexPanelContainer,
} from "@/components/Pages";
import {
  COMPONENT_DETAIL_PAGE_TEXT,
  NAVBAR_ITEM_TEXT,
} from "@/constants/messages";
import useComponentDetailQuery from "@/hooks/api/componentDetail/useComponentDetailQuery";

export default function ComponentDetail() {
  const params = useParams();
  const componentId = Number(params.componentId);

  const bannerRef = useRef<HTMLDivElement>(null);
  const explanationRef = useRef<HTMLDivElement>(null);
  const exampleRef = useRef<HTMLDivElement>(null);
  const referenceRef = useRef<HTMLDivElement>(null);

  const refs = {
    explanationRef,
    exampleRef,
    referenceRef,
  };

  const { data, isLoading, isError } = useComponentDetailQuery(componentId);

  if (!data || isError) {
    return <EmptyState text={COMPONENT_DETAIL_PAGE_TEXT.error} />;
  }

  return (
    <Layout>
      <NavigationBar
        $isSeparated
        placeholderText={NAVBAR_ITEM_TEXT.inputPlaceholder}
      />
      <BannerContainer>
        <DocumentBanner
          ref={bannerRef}
          $src={data.thumbnailUrl}
          titleText={data.title}
          componentListText={data.mixedNames.join(", ")}
          bodyText={data.introduction}
          commentCount={data.commentCount.toString()}
          bookmarkCount={data.commentCount.toString()}
        />
        <IndexPanelContainer
          bannerRef={bannerRef}
          explanationRef={explanationRef}
          exampleRef={exampleRef}
          referenceRef={referenceRef}
        />
      </BannerContainer>
      <DocumentSection
        refs={refs}
        designReferenceCount={data.designReferenceCount}
        descriptionText={data.blocks.DESCRIPTION[0].content}
        useCaseText={data.blocks.USE_CASE[0].content}
      />
      {isLoading && <EmptyState text={COMPONENT_DETAIL_PAGE_TEXT.loading} />}
      <Footer />
    </Layout>
  );
}
