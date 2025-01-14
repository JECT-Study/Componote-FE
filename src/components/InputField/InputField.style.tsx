import styled from "styled-components";
import DESIGN_SYSTEM from "@/styles/designSystem";
import { IconWrapper } from "@/utils/IconWrapper";
import { IInputComponent } from "./InputField.types";

export const InputFieldContainer = styled.div<IInputComponent>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: ${DESIGN_SYSTEM.gap["5xs"]};
  padding: ${DESIGN_SYSTEM.gap.none};

  width: ${(props) => props.$width || "21.25rem"};
`;

export const LabelContainer = styled.div`
  display: flex;
  align-self: stretch;
  align-items: flex-start;

  gap: ${DESIGN_SYSTEM.gap["6xs"]};
  padding-left: ${DESIGN_SYSTEM.gap["4xs"]};
`;

export const LabelText = styled.span`
  ${DESIGN_SYSTEM.typography.label.xs};
  color: ${({ theme }) => theme.light["object-normal"]};
`;

export const FieldContainer = styled.div<IInputComponent>`
  display: flex;
  align-items: center;
  align-self: stretch;

  position: relative;

  gap: ${DESIGN_SYSTEM.gap["2xs"]};
  padding: ${DESIGN_SYSTEM.gap.xs} ${DESIGN_SYSTEM.gap.lg};

  border-radius: ${DESIGN_SYSTEM.radius.xs};
  border: ${({ theme, $isFocused, $isNegative }) => {
    if ($isNegative) {
      return `${DESIGN_SYSTEM.stroke.bold} solid
          ${theme.light["feedback-negative"]};`;
    }

    if ($isFocused) {
      return `${DESIGN_SYSTEM.stroke.bold} solid ${theme.light["accent-bold"]}`;
    }

    return `${DESIGN_SYSTEM.stroke.normal} solid ${theme.light["border-trans-subtle"]}`;
  }};

  background: ${({ theme }) => theme.light["surface-standard"]};
`;

export const InputFieldIconBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BasicIconImg = styled(IconWrapper)`
  display: flex;
  justify-content: center;
  align-items: center;

  path {
    fill: ${({ theme }) => theme.light["object-subtler"]};
  }
`;

export const InputFieldIcon = styled(BasicIconImg)`
  width: 1.5rem;
  height: 1.5rem;
`;

export const CancelIcon = styled(BasicIconImg)`
  width: 1.5rem;
  height: 1.5rem;

  cursor: pointer;
`;

export const InputBox = styled.div`
  display: flex;
  flex: 1 0 0;
  align-items: flex-start;

  gap: ${DESIGN_SYSTEM.gap["6xs"]};
`;

export const Input = styled.input<IInputComponent>`
  z-index: 999;
  margin-top: 0.063rem;

  width: 100%;

  border: ${DESIGN_SYSTEM.stroke.none};
  color: ${({ theme }) => theme.light["object-subtler"]};

  ${(props) =>
    props.$size === "md"
      ? DESIGN_SYSTEM.typography.body.md
      : DESIGN_SYSTEM.typography.body.sm};
`;

export const HelperContainer = styled.div<IInputComponent>`
  display: flex;
  align-items: flex-start;
  align-self: stretch;

  gap: ${DESIGN_SYSTEM.gap.sm};
  padding: ${DESIGN_SYSTEM.gap.none} ${DESIGN_SYSTEM.gap["4xs"]};

  ${DESIGN_SYSTEM.typography.body.xs};
  color: ${({ theme, $isNegative }) =>
    $isNegative
      ? theme.light["feedback-negative"]
      : theme.light["object-subtle"]};
`;

export const HelperText = styled.span`
  flex: 1 0 0;
`;

export const CountText = styled.span`
  text-align: right;
`;
