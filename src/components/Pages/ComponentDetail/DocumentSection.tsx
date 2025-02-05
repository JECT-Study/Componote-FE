import Divider from "@/components/Divider/Divider";
import { Callout } from "@/components";
import { COMPONENT_DETAIL_PAGE_TEXT } from "@/constants/messages";
import { IDocumentSection } from "./DocumentSection.types";
import * as S from "./DocumentSection.style";

export default function DocumentSection({
  descriptionText,
  useCaseText,
  designReferenceCount,
}: IDocumentSection) {
  return (
    <S.DocumentSectionContainer>
      <S.DocumentSection>
        <S.DocumentArticle>
          <S.TitleText>
            {COMPONENT_DETAIL_PAGE_TEXT.title.description}
          </S.TitleText>
          <S.BodyText>{descriptionText}</S.BodyText>
        </S.DocumentArticle>
        <Divider $stroke="normal" $layout="horizontal" />
        <S.DocumentArticle>
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
        <S.DocumentArticle>
          <S.TitleText>
            {COMPONENT_DETAIL_PAGE_TEXT.title.reference}
          </S.TitleText>
          <S.BodyText>{COMPONENT_DETAIL_PAGE_TEXT.body.reference}</S.BodyText>
        </S.DocumentArticle>
      </S.DocumentSection>
    </S.DocumentSectionContainer>
  );
}
