"use client";

import styled, { css } from "styled-components";

/**
 * Badge 컴포넌트에 필요한 props입니다
 */
export interface BadgeProps {
  variant: "dot" | "new" | "count";
  text?: string;
}

export const BadgeContainer = styled.div<BadgeProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;

  ${(props) =>
    props.variant === "dot" &&
    css`
      width: fit-content;
      height: fit-content;
    `}
`;

export const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ theme }) =>
    theme.colors?.light["feedback-notification"]};
`;

export const TextBadgeContainer = styled.div<BadgeProps>`
  height: 20px;
  min-width: ${(props) => (props.variant === "new" ? "20px" : "fit-content")};
  width: fit-content;
  padding: ${(props) =>
    props.variant === "count"
      ? `${props.theme.gap?.none} ${props.theme.gap?.["4xs"]}`
      : props.theme.gap?.none};
  border-radius: 50%;
  background-color: ${({ theme }) =>
    theme.colors?.light["feedback-notification"]};
  color: ${({ theme }) => theme.colors?.light["object-static-inv-hero"]};
  text-align: center;
  ${({ theme }) => theme.typography?.body["2xs"]};
`;
