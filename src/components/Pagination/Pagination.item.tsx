import * as S from "./Pagination.item.style";
import { IPaginationItem } from "./Pagination.types";
import InteractionContainer from "../Interaction/Interaction.style";
import { InteractionVariant } from "../Interaction/Interaction.types";

export default function PaginationItem({
  label,
  onClick,
  $isActivated,
}: IPaginationItem) {
  return (
    <S.PaginationItemContainer onClick={onClick} $isActivated={$isActivated}>
      <S.LabelText>{label}</S.LabelText>
      <InteractionContainer
        $variant={InteractionVariant.DEFAULT}
        $density="normal"
      />
    </S.PaginationItemContainer>
  );
}
