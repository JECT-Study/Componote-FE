import * as S from "./Chip.style";

export interface IChip extends S.IChipComponent {
  text: string;
  IconComponent: React.ElementType;
}

export default function Chip({
  $isInversed = false,
  $iconVisible = false,
  $isSelected = false,
  $isDisabled = false,
  $size,
  text,
  IconComponent,
}: IChip) {
  return (
    <S.ChipContainer
      $size={$size}
      $isSelected={$isSelected}
      $isInversed={$isInversed}
      $isDisabled={$isDisabled}
      tabIndex={0}
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
      {!$isDisabled && <S.InteractionOverlay />}
    </S.ChipContainer>
  );
}
