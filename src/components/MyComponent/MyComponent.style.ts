"use client";

import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors?.light["feedback-positive"]};
  padding: 20px;
  border-radius: ${({ theme }) => theme.radius?.["2xs"]};
`;

export const Title = styled.h1`
  color: #333;
  ${({ theme }) => theme.typography?.title[3]}
`;
