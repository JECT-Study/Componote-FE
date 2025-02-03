import styled from "styled-components";
import DESIGN_SYSTEM from "@/styles/designSystem";

const SPaginationContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: ${DESIGN_SYSTEM.gap["3xs"]};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export default SPaginationContainer;
