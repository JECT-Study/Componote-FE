"use client";

import styled from "styled-components";

/**
 * Badge 컴포넌트에 필요한 style props입니다
 */
export interface IBadgeStyle {
  $variant: "dot" | "new" | "count";
}

export const DotBadgeContainer = styled.div<IBadgeStyle>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.gap?.["4xs"]};

  width: fit-content;
  height: fit-content;
`;

export const Dot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: ${({ theme }) => theme.radius?.circle};
  background-color: ${({ theme }) =>
    theme.colors?.light["feedback-notification"]};
`;

export const TextBadgeContainer = styled.div<IBadgeStyle>`
  height: 20px;
  width: ${(props) => (props.$variant === "new" ? "20px" : "fit-content")};
  min-width: 20px;
  padding: ${(props) =>
    props.$variant === "count"
      ? `${props.theme.gap?.none} ${props.theme.gap?.["4xs"]}`
      : props.theme.gap?.none};

  border-radius: ${({ theme }) => theme.radius?.circle};

  background-color: ${({ theme }) =>
    theme.colors?.light["feedback-notification"]};
  color: ${({ theme }) => theme.colors?.light["object-static-inv-hero"]};

  text-align: center;
  ${({ theme }) => theme.typography?.body["2xs"]};
`;
