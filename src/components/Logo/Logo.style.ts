"use client";

import styled from "styled-components";
import LogoIcon from "../../../public/logo/logo_icon.svg";
import LogoText from "../../../public/logo/logo.svg";
import LogoWhiteText from "../../../public/logo/logo_white.svg";

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;

  gap: ${({ theme }) => theme.gap["4xs"]};
`;

export const LogoIconImg = styled(LogoIcon)`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.02606rem;
`;

export const LogoTextImg = styled(LogoText)``;

export const LogoWhiteTextImg = styled(LogoWhiteText)``;
