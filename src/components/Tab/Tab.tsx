import InteractionContainer from "../Interaction/Interaction.style";
import { InteractionVariant } from "../Interaction/Interaction.types";
import * as S from "./Tab.style";
import { ITab, ITapComponent } from "./Tab.types";

export default function Tab({
  labelText,
  $isDisabled,
  $isSelected,
  onSelect,
}: ITab & ITapComponent) {
  return (
    <S.TabContainer
      onClick={onSelect}
      $isSelected={$isSelected}
      $isDisabled={$isDisabled}
    >
      <S.LabelText $isDisabled={$isDisabled}>{labelText}</S.LabelText>
      <InteractionContainer
        $variant={InteractionVariant.DEFAULT}
        $density="normal"
      />
    </S.TabContainer>
  );
}
