"use client";

import DESIGN_SYSTEM from "@/styles/designSystem";
import styled from "styled-components";

export const SignupTitleWrapper = styled.div`
  display: flex;
  max-width: 30rem;
  align-items: center;
  align-self: stretch;
  gap: ${DESIGN_SYSTEM.gap.md};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const SignupTitleText = styled.span`
  color: ${({ theme }) => theme.light["object-hero"]};

  ${DESIGN_SYSTEM.typography.title["1"]}
`;
