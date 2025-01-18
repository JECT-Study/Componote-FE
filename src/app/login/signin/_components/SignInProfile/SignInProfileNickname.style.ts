"use client";

import DESIGN_SYSTEM from "@/styles/designSystem";
import styled from "styled-components";

export const SigninProfileNicknameInputContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  gap: ${DESIGN_SYSTEM.gap["2xs"]};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const SigninProfileNicknameInputLabel = styled.span`
  color: ${({ theme }) => theme.light["object-normal"]};

  ${DESIGN_SYSTEM.typography.label.xs}
`;

export const SigninProfileNicknameInputLabelStar = styled.span`
  color: ${({ theme }) => theme.light["feedback-notification"]};

  ${DESIGN_SYSTEM.typography.label.xs}
`;
