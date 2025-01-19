"use client";

import DESIGN_SYSTEM from "@/styles/designSystem";
import styled from "styled-components";

// eslint-disable-next-line import/prefer-default-export
export const SigninButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  align-self: stretch;
  gap: ${DESIGN_SYSTEM.gap.md};
  padding: ${DESIGN_SYSTEM.gap.none};
`;
