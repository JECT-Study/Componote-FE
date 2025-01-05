import styled from "styled-components";
import DESIGN_SYSTEM from "@/styles/designSystem";

export const NavItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;

  gap: ${DESIGN_SYSTEM.gap.none};
  padding: ${DESIGN_SYSTEM.gap["3xs"]};
`;

export const NavItemBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 0 0;

  position: relative;

  gap: ${DESIGN_SYSTEM.gap["3xs"]};
  padding: ${DESIGN_SYSTEM.gap["3xs"]} ${DESIGN_SYSTEM.gap["2xs"]};
`;

export const NavItemAnchor = styled.a`
  text-align: center;
  color: ${({ theme }) => theme.light["object-normal"]};

  ${DESIGN_SYSTEM.typography.label.bold.sm};
`;
