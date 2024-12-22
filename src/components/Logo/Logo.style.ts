"use client";

import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;

  gap: ${({ theme }) => theme.gap["4xs"]};
  padding-right: ${({ theme }) => theme.gap["7xs"]};
`;

export const LogoIconImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 1.25rem;
  height: 1.25rem;

  padding: 0.02606rem;
`;

export const LogoText = styled.img`
  width: 4.33125rem;
  height: 1.125rem;
`;
