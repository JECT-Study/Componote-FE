import styled, { css } from "styled-components";

export interface IDivider {
  $stroke: keyof typeof strokeSizes;
  $layout: "vertical" | "horizontal";
}

export const strokeSizes = {
  normal: "0.0625rem",
  bold: "0.125rem",
  bolder: "0.25rem",
  boldest: "0.5rem",
};

export const Divider = styled.div<IDivider>`
  ${({ $stroke, $layout }) => {
    const size = strokeSizes[$stroke];

    return css`
      height: ${$layout === "horizontal" ? size : "4.6875rem"};
      width: ${$layout === "vertical" ? size : "22.5rem"};

      background: ${({ theme }) => theme.colors?.light["border-trans-subtler"]};
    `;
  }}
`;
