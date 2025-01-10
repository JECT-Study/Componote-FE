"use client";

import DESIGN_SYSTEM from "@/styles/designSystem";
import styled from "styled-components";

// eslint-disable-next-line import/prefer-default-export
export const SigninProfileNicknameInputContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  gap: ${DESIGN_SYSTEM.gap["2xs"]};
  padding: ${DESIGN_SYSTEM.gap.none};
`;
