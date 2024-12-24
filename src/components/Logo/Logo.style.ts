"use client";

import styled from "styled-components";
import DESIGN_SYSTEM from "@/styles/designSystem";
import LogoIcon from "../../assets/logo/logo_icon.svg";
import LogoText from "../../assets/logo/logo.svg";

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;

  gap: ${DESIGN_SYSTEM.gap["4xs"]};
`;

export const LogoIconImg = styled(LogoIcon)`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.02606rem;
`;

export const LogoTextImg = styled(LogoText)``;
