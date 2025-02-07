import * as S from "./DocumentSection.style";
import { IDocumentArticle } from "./ComponentDetail.types";

export default function DocumentArticle({
  titleText,
  bodyText,
  documentSection,
  ref,
}: IDocumentArticle) {
  return (
    <S.DocumentArticle ref={ref} document-section={documentSection}>
      <S.TitleText>{titleText}</S.TitleText>
      <S.BodyText>{bodyText}</S.BodyText>
    </S.DocumentArticle>
  );
}
