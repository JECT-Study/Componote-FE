import { useState } from "react";
import InteractionContainer from "../Interaction/Interaction.style";
import { InteractionVariant } from "../Interaction/Interaction.types";
import * as S from "./Tab.style";
import { ITab, ITapComponent } from "./Tab.types";

export default function Tab({ labelText, $isDisabled }: ITab & ITapComponent) {
  const [isSelected, setIsSelected] = useState(false);

  const handleTab = () => {
    setIsSelected((prev) => !prev);
  };

  return (
    <S.TabContainer
      onClick={handleTab}
      $isSelected={isSelected}
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
