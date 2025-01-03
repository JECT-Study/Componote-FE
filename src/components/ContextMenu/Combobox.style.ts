import DESIGN_SYSTEM from "@/styles/designSystem";
import styled from "styled-components";

export const Combobox = styled.div`
  width: 25rem;
  max-height: 21rem;

  display: flex;
  align-items: flex-start;
  gap: ${DESIGN_SYSTEM.gap["3xs"]};
  padding: ${DESIGN_SYSTEM.gap["3xs"]};

  border-radius: ${DESIGN_SYSTEM.radius.md};
  border: ${DESIGN_SYSTEM.stroke.normal} solid
    ${({ theme }) => theme.light["border-trans-subtler"]};

  opacity: ${DESIGN_SYSTEM.opacity.visible};
  background: ${({ theme }) => theme.light["surface-embossed"]};

  ${DESIGN_SYSTEM.shadow.floated}

  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ItemContainer = styled.div`
  max-height: 20rem;

  display: flex;
  flex-direction: column;
  align-self: stretch;
  align-items: flex-start;
  gap: ${DESIGN_SYSTEM.gap.none};
  padding: ${DESIGN_SYSTEM.gap.none};
  flex: 1 0 0;

  border-radius: ${DESIGN_SYSTEM.radius.none};
  opacity: ${DESIGN_SYSTEM.opacity.visible};

  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;
