import React, { useState } from "react";
import { IInputField } from "./InputField.types";
import CloseCircle from "@/assets/icons/close-circle-fill.svg";
import InteractionContainer from "../Interaction/Interaction.style";
import * as S from "./InputField.style";

export default function InputField({
  labelText,
  helperText,
  placeholderText,
  $icon,
  $size,
  $isNagative,
  $labelVisible,
  $iconVisible,
  $helperVisible,
  $countVisible,
}: IInputField) {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newInputValue = event.target.value;
    if (newInputValue.length <= 40) setInputValue(newInputValue);
  };

  return (
    <S.InputFieldContainer>
      {$labelVisible && (
        <S.LabelContainer>
          <S.LabelText>{labelText}</S.LabelText>
        </S.LabelContainer>
      )}
      <S.FieldContainer $isFocused={isFocused} $isNagative={$isNagative}>
        {$iconVisible && (
          <S.InputFieldIconBox>
            <S.InputFieldIcon IconComponent={$icon} />
          </S.InputFieldIconBox>
        )}
        <S.InputBox>
          <S.Input
            id="inputFieldId"
            $size={$size}
            value={inputValue}
            placeholder={placeholderText}
            onChange={handleInputChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <InteractionContainer $variant="default" $density="normal" />
        </S.InputBox>
        {isFocused && <S.InputFieldIcon IconComponent={CloseCircle} />}
      </S.FieldContainer>
      {$helperVisible && (
        <S.HelperContainer $isNagative={$isNagative}>
          <S.HelperText>{helperText}</S.HelperText>
          {$countVisible && <S.CountText>{inputValue.length}/40</S.CountText>}
        </S.HelperContainer>
      )}
    </S.InputFieldContainer>
  );
}
