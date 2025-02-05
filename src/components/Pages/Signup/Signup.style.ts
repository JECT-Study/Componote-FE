"use client";

import DESIGN_SYSTEM from "@/styles/designSystem";
import styled from "styled-components";

export const SignupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  gap: ${DESIGN_SYSTEM.gap["8xl"]};
  padding: ${DESIGN_SYSTEM.gap["7xl"]};

  background: ${({ theme }) => theme.light["surface-standard"]};
`;

export const SignupModule = styled.div`
  max-width: 35rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  // align-self: stretch;
  gap: ${DESIGN_SYSTEM.gap["3xl"]};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const SignupBodyModule = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  gap: ${DESIGN_SYSTEM.gap["7xl"]};
  padding: ${DESIGN_SYSTEM.gap.none};
`;
