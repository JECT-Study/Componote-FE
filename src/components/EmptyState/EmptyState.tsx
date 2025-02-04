import * as S from "./EmptyState.style";
import IEmptyState from "./EmptyState.type";

export default function EmptyState({ text }: IEmptyState) {
  return (
    <S.EmptyStateContainer>
      <S.EmptyStateText>{text}</S.EmptyStateText>
    </S.EmptyStateContainer>
  );
}
