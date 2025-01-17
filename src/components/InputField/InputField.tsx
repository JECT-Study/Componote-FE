import React, { useState } from "react";
import CloseCircle from "@/assets/icons/close-circle-fill.svg";
import InteractionContainer from "../Interaction/Interaction.style";
import * as S from "./InputField.style";
import { IInputField } from "./InputField.types";
import { InteractionVariant } from "../Interaction/Interaction.types";

export default function InputField({
  label,
  helperText,
  placeholderText,
  $icon,
  $size,
  $width,
  countLimit,
  $isNegative,
  $labelVisible,
  $helperVisible,
}: IInputField) {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newInputValue = event.target.value;
    if (newInputValue.length <= 40) setInputValue(newInputValue);
  };

  return (
    <S.InputFieldContainer $width={$width}>
      {$labelVisible && (
        <S.LabelContainer>
          <S.LabelText>{label}</S.LabelText>
        </S.LabelContainer>
      )}
      <S.FieldContainer $isFocused={isFocused} $isNegative={$isNegative}>
        {$icon && (
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
          <InteractionContainer
            $variant={InteractionVariant.DEFAULT}
            $density="normal"
          />
        </S.InputBox>
        {isFocused && <S.InputFieldIcon IconComponent={CloseCircle} />}
      </S.FieldContainer>
      {$helperVisible && (
        <S.HelperContainer $isNegative={$isNegative}>
          <S.HelperText>{helperText}</S.HelperText>
          <S.CountText>
            {inputValue.length}/{countLimit}
          </S.CountText>
        </S.HelperContainer>
      )}
    </S.InputFieldContainer>
  );
}
