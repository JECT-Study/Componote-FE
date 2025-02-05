import styled from "styled-components";
import DESIGN_SYSTEM from "@/styles/designSystem";

export const AnnounceTabContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
`;

export const TabBox = styled.div`
  display: flex;
  align-items: flex-start;

  width: 100%;
  max-width: 60rem;

  gap: ${DESIGN_SYSTEM.gap.none};
  padding: ${DESIGN_SYSTEM.gap.none};

  border-bottom: ${DESIGN_SYSTEM.stroke.normal} solid
    ${({ theme }) => theme.light["border-trans-subtle"]};
`;
