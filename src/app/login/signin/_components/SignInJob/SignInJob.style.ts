"use client";

import DESIGN_SYSTEM from "@/styles/designSystem";
import styled from "styled-components";

export const SigninJobWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: ${DESIGN_SYSTEM.gap["2xl"]};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const SigninJobTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
  gap: ${DESIGN_SYSTEM.gap["2xs"]};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const SigninJobTitleText = styled.span`
  align-self: stretch;
  color: ${({ theme }) => theme.light["object-hero"]};

  ${DESIGN_SYSTEM.typography.title["2"]}
`;

export const SigninJobTitleMustIcon = styled.span`
  color: ${({ theme }) => theme.light["feedback-notification"]};

  ${DESIGN_SYSTEM.typography.title["2"]}
`;

export const SigninJobBodyText = styled.span`
  align-self: stretch;
  color: ${({ theme }) => theme.light["object-bold"]};

  ${DESIGN_SYSTEM.typography.body.sm}
`;

export const SigninJobChipContainer = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  align-self: stretch;
  flex-wrap: wrap;
  gap: ${DESIGN_SYSTEM.gap.xs};
  padding: ${DESIGN_SYSTEM.gap.none};
`;
