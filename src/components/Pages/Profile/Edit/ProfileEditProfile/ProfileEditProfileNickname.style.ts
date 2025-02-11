"use client";

import DESIGN_SYSTEM from "@/styles/designSystem";
import styled from "styled-components";

export const ProfileEditProfileNicknameInputContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  gap: ${DESIGN_SYSTEM.gap["2xs"]};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const ProfileEditProfileNicknameInputLabel = styled.span`
  color: ${({ theme }) => theme.light["object-normal"]};

  ${DESIGN_SYSTEM.typography.label.xs}
`;

export const ProfileEditProfileNicknameInputLabelStar = styled.span`
  color: ${({ theme }) => theme.light["feedback-notification"]};

  ${DESIGN_SYSTEM.typography.label.xs}
`;
