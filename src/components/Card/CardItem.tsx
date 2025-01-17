import { ICardItem } from "./Card.types";
import * as S from "./CardItem.style";

export default function CardItem({ $icon, text }: ICardItem) {
  return (
    <S.SampleCommentContainer>
      <S.SampleCommentIcon IconComponent={$icon} />
      <S.SampleCommentText>{text}</S.SampleCommentText>
    </S.SampleCommentContainer>
  );
}
