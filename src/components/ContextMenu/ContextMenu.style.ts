import DESIGN_SYSTEM from "@/styles/designSystem";
import styled from "styled-components";

export const ContextMenu = styled.div`
  width: 11.875rem;
  max-height: 21rem;

  display: flex;
  align-items: flex-start;
  gap: ${DESIGN_SYSTEM.gap["3xs"]};
  padding: ${DESIGN_SYSTEM.gap["3xs"]};

  border-radius: ${DESIGN_SYSTEM.radius.md};
  border: ${DESIGN_SYSTEM.stroke.normal} solid
    ${({ theme }) => theme.light["border-trans-subtler"]};
  opacity: ${DESIGN_SYSTEM.opacity.visible};
  background: ${({ theme }) => theme.light["surface-floated"]};

  ${DESIGN_SYSTEM.shadow.floated}
`;

export const ItemContainer = styled.div`
  max-height: 20rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  padding: ${DESIGN_SYSTEM.gap.none};
  gap: ${DESIGN_SYSTEM.gap.none};
  flex: 1 0 0;

  border-radius: ${DESIGN_SYSTEM.radius.none};
  opacity: ${DESIGN_SYSTEM.opacity.visible};
`;
