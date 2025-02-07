import { forwardRef } from "react";
import { Callout, Divider } from "@/components";
import { COMPONENT_DETAIL_PAGE_TEXT } from "@/constants/messages";
import { IDocumentSection } from "./ComponentDetail.types";

import * as S from "./DocumentSection.style";
import DocumentArticle from "./DocumentArticle";

const DocumentSection = forwardRef(
  (
    {
      descriptionText,
      useCaseText,
      designReferenceCount,
      refs,
    }: IDocumentSection,
    ref,
  ) => (
    <S.DocumentSectionContainer ref={ref}>
      <S.DocumentSection>
        <DocumentArticle
          ref={refs.explanationRef}
          documentSection="설명"
          titleText={COMPONENT_DETAIL_PAGE_TEXT.title.description}
          bodyText={descriptionText}
        />
        <Divider $stroke="normal" $layout="horizontal" />
        <DocumentArticle
          ref={refs.exampleRef}
          documentSection="간단 용례"
          titleText={COMPONENT_DETAIL_PAGE_TEXT.title.useCase}
          bodyText={useCaseText}
        />
        <Divider $stroke="normal" $layout="horizontal" />
        <Callout
          $size="md"
          highlightedText={designReferenceCount}
          titleText={COMPONENT_DETAIL_PAGE_TEXT.callout.title}
          buttonLabelText={COMPONENT_DETAIL_PAGE_TEXT.callout.buttonLabel}
        />
        <DocumentArticle
          ref={refs.referenceRef}
          documentSection="참고자료 및 문헌"
          titleText={COMPONENT_DETAIL_PAGE_TEXT.title.reference}
          bodyText={COMPONENT_DETAIL_PAGE_TEXT.body.reference}
        />
      </S.DocumentSection>
    </S.DocumentSectionContainer>
  ),
);

DocumentSection.displayName = "DocumentSection";

export default DocumentSection;
