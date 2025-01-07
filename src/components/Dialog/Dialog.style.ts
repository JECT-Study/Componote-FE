import DESIGN_SYSTEM from "@/styles/designSystem";
import styled from "styled-components";

// eslint-disable-next-line import/prefer-default-export
export const DialogWrapper = styled.div`
  width: fit-content;
  height: fit-content;

  border-radius: ${DESIGN_SYSTEM.radius.md};
  opacity: ${DESIGN_SYSTEM.opacity.visible};
  background: ${({ theme }) => theme.light["surface-embossed"]};

  box-shadow: ${DESIGN_SYSTEM.shadow.overlay};
`;
