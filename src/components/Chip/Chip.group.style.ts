import styled from "styled-components";
import DESIGN_SYSTEM from "@/styles/designSystem";
import { IChipGroupComponent } from "./Chip.types";

const ChipGroupContainer = styled.div<IChipGroupComponent>`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;

  max-width: 27.5rem;
  width: ${(props) => props.$width};

  position: absolute;
  top: 2.5rem;
  left: 0;

  gap: ${DESIGN_SYSTEM.gap["3xs"]};
  padding: ${DESIGN_SYSTEM.gap.sm};

  box-shadow: ${DESIGN_SYSTEM.shadow.floated};
  border-radius: ${DESIGN_SYSTEM.radius.sm};
  border: ${({ theme }) =>
    `${DESIGN_SYSTEM.stroke.normal} solid ${theme.light["border-trans-subtler"]}`};

  opacity: ${DESIGN_SYSTEM.opacity.visible};
  background: ${({ theme }) => theme.light["surface-embossed"]};
`;

export default ChipGroupContainer;
