import styled from "styled-components";
import DESIGN_SYSTEM from "@/styles/designSystem";

export const CardContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: stretch;

  width: 100%;

  background: ${({ theme }) => theme.light["surface-sunken"]};
`;

export const CardBox = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);

  gap: ${DESIGN_SYSTEM.gap.xl};
  padding: ${DESIGN_SYSTEM.gap["2xl"]} ${DESIGN_SYSTEM.gap["7xl"]}
    ${DESIGN_SYSTEM.gap["9xl"]} ${DESIGN_SYSTEM.gap["7xl"]};
`;
