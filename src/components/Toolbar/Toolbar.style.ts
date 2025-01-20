import styled from "styled-components";
import filterIcon from "@/assets/icons/filter-line.svg";
import DESIGN_SYSTEM from "@/styles/designSystem";

export const ToolbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;

  gap: ${DESIGN_SYSTEM.gap.xs};
  padding: ${DESIGN_SYSTEM.gap.xs} ${DESIGN_SYSTEM.gap["7xl"]};

  border-top: ${DESIGN_SYSTEM.stroke.normal} solid
    ${({ theme }) => theme.light["border-trans-subtler"]};
  border-bottom: ${DESIGN_SYSTEM.stroke.normal} solid
    ${({ theme }) => theme.light["border-trans-subtler"]};

  background: ${({ theme }) => theme.light["surface-standard"]};
`;

export const TabContainer = styled.div`
  display: flex;
  align-items: flex-start;
  align-self: stretch;

  max-width: 60rem;

  gap: ${DESIGN_SYSTEM.gap.none};
  padding: ${DESIGN_SYSTEM.gap.none};

  border-bottom: ${DESIGN_SYSTEM.stroke.normal} solid
    ${({ theme }) => theme.light["border-trans-subtle"]};
`;

export const ToolContainer = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  max-width: 60rem;

  gap: ${DESIGN_SYSTEM.gap["2xl"]};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const ToolBox = styled.div`
  display: flex;
  flex: 1 0 0;
  align-self: stretch;
  align-items: center;

  min-width: 40rem;

  gap: ${DESIGN_SYSTEM.gap.xs};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const FilterIcon = styled(filterIcon)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 1.125rem;
  height: 1.125rem;

  gap: ${DESIGN_SYSTEM.gap.none};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  min-width: 9rem;

  gap: ${DESIGN_SYSTEM.gap.md};
  padding: ${DESIGN_SYSTEM.gap.none};

  position: relative;
`;
