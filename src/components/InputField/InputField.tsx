import React, { useState } from "react";
import CloseCircle from "@/assets/icons/close-circle-fill.svg";
import useSearchStore from "@/store/common/useSearchStore";
import useComboBoxStore from "@/store/common/useComboBoxStore";

import { IInputField } from "./InputField.types";
import * as S from "./InputField.style";

// import InteractionContainer from "../Interaction/Interaction.style";
// import { InteractionVariant } from "../Interaction/Interaction.types";

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
  value,
  onChange,
  onBlur,
}: IInputField) {
  const [isFocused, setIsFocused] = useState(false);

  const { toggleComboBox } = useComboBoxStore();
  const { setSearchValue } = useSearchStore();

  const handleCancelButton = () => {
    setSearchValue("");
    toggleComboBox();
  };

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
            onBlur={(event) => {
              setIsFocused(false);
              if (onBlur) {
                onBlur(event);
              }
            }}
          />
          {/* TODO : PR 78번 확인, 논의 후 수정 예정 */}
          {/* <InteractionContainer
            $variant={InteractionVariant.DEFAULT}
            $density="normal"
          /> */}
        </S.InputBox>
        {value.length > 1 && (
          <S.InputFieldIcon
            onClick={handleCancelButton}
            IconComponent={CloseCircle}
          />
        )}
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
