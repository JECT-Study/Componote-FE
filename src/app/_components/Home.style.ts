"use client";

import DESIGN_SYSTEM from "@/styles/designSystem";
import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: ${DESIGN_SYSTEM.radius.none};
  opacity: ${DESIGN_SYSTEM.opacity.visible};
  background: ${({ theme }) => theme.light["surface-standard"]};
`;

export const HomeViewport = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
`;
