import styled from "styled-components";
import DESIGN_SYSTEM from "@/styles/designSystem";

// eslint-disable-next-line import/prefer-default-export
export const IndexPanelContainer = styled.div`
  position: absolute;
  top: 0;
  left: 100%;

  height: 100vh;

  padding-top: ${DESIGN_SYSTEM.gap["7xl"]};
`;
