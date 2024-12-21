"use client";

import styled, { css } from "styled-components";

export const strokeSizes = {
  normal: "0.0625rem",
  bold: "0.125rem",
  bolder: "0.25rem",
  boldest: "0.5rem",
};

export const Divider = styled.div<{
  $stroke: keyof typeof strokeSizes;
  $layout: "vertical" | "horizontal";
}>`
  ${({ $stroke, $layout }) => {
    const size = strokeSizes[$stroke];

    return css`
      height: ${$layout === "horizontal" ? size : "4.6875rem"};
      width: ${$layout === "vertical" ? size : "22.5rem"};

      // 컬러 토큰 작업 완료 시 변경 필요
      background: #481909;
    `;
  }}
`;
