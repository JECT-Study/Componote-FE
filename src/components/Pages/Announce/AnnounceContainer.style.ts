import styled from "styled-components";
import DESIGN_SYSTEM from "@/styles/designSystem";

// eslint-disable-next-line import/prefer-default-export
export const AnnounceContainer = styled.div`
  display: flex;
  justify-content: center;

  flex: 1 0 0;

  width: 100%;

  gap: ${DESIGN_SYSTEM.gap.xl};
  padding: ${DESIGN_SYSTEM.gap["2xl"]} ${DESIGN_SYSTEM.gap["7xl"]}
    ${DESIGN_SYSTEM.gap["9xl"]} ${DESIGN_SYSTEM.gap["7xl"]};
`;
