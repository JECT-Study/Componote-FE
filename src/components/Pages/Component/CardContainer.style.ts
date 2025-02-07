import styled, { css } from "styled-components";
import DESIGN_SYSTEM from "@/styles/designSystem";

export const CardContainer = styled.div<{ $content: boolean }>`
  display: flex;
  justify-content: center;

  width: 100%;
  height: ${(props) => props.$content && "100%"};

  background: ${({ theme }) => theme.light["surface-sunken"]};
`;

export const CardBox = styled.div<{ $content: boolean }>`
  ${({ $content }) => {
    if ($content) {
      return css`
        display: flex;
        flex: 1 0 0;
        width: 100%;
      `;
    }

    return css`
      display: grid;
      justify-content: center;
      grid-template-columns: repeat(4, 1fr);
    `;
  }}

  gap: ${DESIGN_SYSTEM.gap.xl};
  padding: ${DESIGN_SYSTEM.gap["2xl"]} ${DESIGN_SYSTEM.gap["7xl"]}
    ${DESIGN_SYSTEM.gap["9xl"]} ${DESIGN_SYSTEM.gap["7xl"]};
`;
