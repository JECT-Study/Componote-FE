"use client";

import DESIGN_SYSTEM from "@/styles/designSystem";
import styled from "styled-components";

export const SignupProfileImageUploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  gap: ${DESIGN_SYSTEM.gap.md};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const SignupProfileImageLabel = styled.div`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  gap: ${DESIGN_SYSTEM.gap["6xs"]};
  padding-left: ${DESIGN_SYSTEM.gap["4xs"]};

  color: ${({ theme }) => theme.light["object-normal"]};

  ${DESIGN_SYSTEM.typography.label.xs}
`;

export const SignupProfileImageHelperCaption = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
  gap: ${DESIGN_SYSTEM.gap.sm};
  padding: ${DESIGN_SYSTEM.gap.none} ${DESIGN_SYSTEM.gap["4xs"]};

  flex: 1 0 0;

  color: ${({ theme }) => theme.light["object-subtle"]};
  text-align: center;

  ${DESIGN_SYSTEM.typography.body.xs}
`;
