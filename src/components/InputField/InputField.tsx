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
  $style,
  // input의 value와 onChange를 받아옴
  value,
  onChange,
}: IInputField) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <S.InputFieldContainer $width={$width} style={{ ...$style }}>
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
            value={value}
            placeholder={placeholderText}
            onChange={onChange}
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
            {value.length}/{countLimit}
          </S.CountText>
        </S.HelperContainer>
      )}
    </S.InputFieldContainer>
  );
}
