import * as S from "./Chip.style";
import InteractionContainer from "../Interaction/Interaction.style";
import { IChip, IChipComponent } from "./Chip.types";
import { InteractionVariant } from "../Interaction/Interaction.types";

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
          $isDisabled={$isDisabled}
        />
      )}
      <S.ChipLabelText>{text}</S.ChipLabelText>
      {$isSelected && (
        <S.CheckLineIconImg $size={$size} $isInversed={$isInversed} />
      )}
      {!$isDisabled && (
        <InteractionContainer
          $variant={InteractionVariant.DEFAULT}
          $density="subtle"
        />
      )}
    </S.ChipContainer>
  );
}
