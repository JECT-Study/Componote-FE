"use client";

import styled from "styled-components";
import Image from "next/image";

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;

  gap: ${({ theme }) => theme.gap["4xs"]};
`;

export const LogoIconImg = styled(Image)`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.02606rem;
`;

export const LogoText = styled(Image)``;
