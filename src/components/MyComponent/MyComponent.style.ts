"use client";

import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors?.light["feedback-positive"]};
  opacity: ${({ theme }) => theme.opacity?.[22]};
  padding: 20px;
  border-style: solid;
  border-radius: ${({ theme }) => theme.radius?.["2xs"]};
  border-width: ${({ theme }) => theme.stroke?.boldest};
  border-color: ${({ theme }) => theme.colors?.light["feedback-negative"]};
`;

export const Title = styled.h1`
  color: #333;
  ${({ theme }) => theme.typography?.title[3]}
`;
