import Divider from "@/components/Divider/Divider";

import { Callout } from "@/components";
import { COMPONENT_DETAIL_PAGE_TEXT } from "@/constants/messages";
import { forwardRef } from "react";
import { IDocumentSection } from "./DocumentSection.types";
import * as S from "./DocumentSection.style";

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
        <S.DocumentArticle ref={refs.explanationRef} data-section="설명">
          <S.TitleText>
            {COMPONENT_DETAIL_PAGE_TEXT.title.description}
          </S.TitleText>
          <S.BodyText>{descriptionText}</S.BodyText>
        </S.DocumentArticle>
        <Divider $stroke="normal" $layout="horizontal" />
        <S.DocumentArticle ref={refs.exampleRef} data-section="간단 용례">
          <S.TitleText>{COMPONENT_DETAIL_PAGE_TEXT.title.useCase}</S.TitleText>
          <S.BodyText>{useCaseText}</S.BodyText>
        </S.DocumentArticle>
        <Divider $stroke="normal" $layout="horizontal" />
        <Callout
          $size="md"
          highlightedText={designReferenceCount}
          titleText={COMPONENT_DETAIL_PAGE_TEXT.callout.title}
          buttonLabelText={COMPONENT_DETAIL_PAGE_TEXT.callout.buttonLabel}
        />
        <S.DocumentArticle
          ref={refs.referenceRef}
          data-section="참고자료 및 문헌"
        >
          <S.TitleText>
            {COMPONENT_DETAIL_PAGE_TEXT.title.reference}
          </S.TitleText>
          <S.BodyText>{COMPONENT_DETAIL_PAGE_TEXT.body.reference}</S.BodyText>
        </S.DocumentArticle>
      </S.DocumentSection>
    </S.DocumentSectionContainer>
  ),
);

DocumentSection.displayName = "DocumentSection";

export default DocumentSection;
