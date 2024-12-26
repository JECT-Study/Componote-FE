import * as S from "./Chip.style";
import InteractionContainer from "../Interaction/Interaction.style";
import { IChip, IChipComponent } from "./Chip.types";

export default function Chip({
  $isInversed = false,
  $iconVisible = false,
  $isSelected = false,
  $isDisabled = false,
  $size,
  text,
  IconComponent,
  onClick,
}: IChip & IChipComponent) {
  return (
    <S.ChipContainer
      $size={$size}
      $isSelected={$isSelected}
      $isInversed={$isInversed}
      $isDisabled={$isDisabled}
      onClick={onClick}
    >
      {$iconVisible && (
        <S.ChipLeftIconImg
          $size={$size}
          IconComponent={IconComponent}
          $isSelected={$isSelected}
          $isInversed={$isInversed}
        />
      )}
      <S.ChipLabelText>{text}</S.ChipLabelText>
      {$isSelected && (
        <S.CheckLineIconImg $size={$size} $isInversed={$isInversed} />
      )}
      {!$isDisabled && (
        <InteractionContainer $variant="default" $density="subtle" />
      )}
    </S.ChipContainer>
  );
}
