import Divider from "@/components/Divider/Divider";
import * as S from "./DocumentSection.style";
import { Callout } from "@/components";
import { IDocumentSection } from "./DocumentSection.types";

export default function DocumentSection({
  descriptionText,
  useCaseText,
  designReferenceCount,
}: IDocumentSection) {
  return (
    <S.DocumentSectionContainer>
      <S.DocumentSection>
        <S.DocumentArticle>
          <S.TitleText>설명</S.TitleText>
          <S.BodyText>{descriptionText}</S.BodyText>
        </S.DocumentArticle>
        <Divider $stroke="normal" $layout="horizontal" />
        <S.DocumentArticle>
          <S.TitleText>간단 용례</S.TitleText>
          <S.BodyText>{useCaseText}</S.BodyText>
        </S.DocumentArticle>
        <Divider $stroke="normal" $layout="horizontal" />
        <Callout
          $size="md"
          highlightedText={designReferenceCount}
          titleText="개의 디자인 시스템에서 이 컴포넌트를 사용하고 있어요"
          buttonLabelText="보러 가기"
        />
        <S.DocumentArticle>
          <S.TitleText>참고자료 및 문헌</S.TitleText>
          <S.BodyText>컴포넌트에 대한 참고자료 및 문헌</S.BodyText>
        </S.DocumentArticle>
      </S.DocumentSection>
    </S.DocumentSectionContainer>
  );
}
