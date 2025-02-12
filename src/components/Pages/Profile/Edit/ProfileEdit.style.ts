"use client";

import DESIGN_SYSTEM from "@/styles/designSystem";
import styled from "styled-components";

export const ProfileEditWrapper = styled.div`
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

export const ProfileEditModule = styled.div`
  width: 100%;
  max-width: 35rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  // align-self: stretch;
  gap: ${DESIGN_SYSTEM.gap["3xl"]};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const ProfileEditBodyModule = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  gap: ${DESIGN_SYSTEM.gap["7xl"]};
  padding: ${DESIGN_SYSTEM.gap.none};
`;
