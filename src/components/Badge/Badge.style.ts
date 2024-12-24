"use client";

import styled from "styled-components";
import DESIGN_SYSTEM from "@/styles/designSystem";

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
  padding: ${DESIGN_SYSTEM.gap["4xs"]};

  width: fit-content;
  height: fit-content;
`;

export const Dot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: ${DESIGN_SYSTEM.radius.circle};
  background-color: ${({ theme }) => theme.light["feedback-notification"]};
`;

export const TextBadgeContainer = styled.div<IBadgeStyle>`
  height: 20px;
  width: ${(props) => (props.$variant === "new" ? "20px" : "fit-content")};
  min-width: 20px;
  padding: ${(props) =>
    props.$variant === "count"
      ? `${DESIGN_SYSTEM.gap.none} ${DESIGN_SYSTEM.gap["4xs"]}`
      : DESIGN_SYSTEM.gap.none};

  border-radius: ${DESIGN_SYSTEM.radius.circle};

  background-color: ${({ theme }) => theme.light["feedback-notification"]};
  color: ${({ theme }) => theme.light["object-static-inv-hero"]};

  text-align: center;
  ${DESIGN_SYSTEM.typography.body["2xs"]};
`;
