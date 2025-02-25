import DESIGN_SYSTEM from "@/styles/designSystem";
import styled from "styled-components";

export const DimmedScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0rem 37.75rem;

  background: ${({ theme }) => theme.light["surface-dimmed"]};
`;

export const DialogWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: fit-content;
  height: fit-content;

  border-radius: ${DESIGN_SYSTEM.radius.md};
  opacity: ${DESIGN_SYSTEM.opacity.visible};
  background: ${({ theme }) => theme.light["surface-embossed"]};

  box-shadow: ${DESIGN_SYSTEM.shadow.overlay};
`;
