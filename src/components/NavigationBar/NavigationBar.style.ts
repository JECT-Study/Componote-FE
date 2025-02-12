import styled from "styled-components";
import DESIGN_SYSTEM from "@/styles/designSystem";
import { INavigation } from "./NavigationBar.types";

export const NavigationBarContainer = styled.div<INavigation>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 3.75rem;
  min-width: 64.0625rem;

  gap: ${DESIGN_SYSTEM.gap.none};
  padding: ${DESIGN_SYSTEM.gap.none} ${DESIGN_SYSTEM.gap["7xl"]};

  background: ${({ theme }) => theme.light["surface-standard"]};
  border-bottom: ${(props) =>
    props.$isSeparated &&
    `${DESIGN_SYSTEM.stroke.normal} solid ${props.theme.light["border-trans-subtler"]}`};
`;

export const NavigationBarSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  flex: 1 0 0;

  width: 100%;

  max-width: 60rem;
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const LeftItemContainer = styled.div`
  display: flex;
  align-self: stretch;
  align-items: flex-start;

  gap: ${DESIGN_SYSTEM.gap.md};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const NavItemContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;

  gap: ${DESIGN_SYSTEM.gap.none};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const RightItemContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;

  position: relative;

  gap: ${DESIGN_SYSTEM.gap["3xs"]};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const NavItemBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;

  gap: ${DESIGN_SYSTEM.gap.none};
  padding: ${DESIGN_SYSTEM.gap["3xs"]};
`;

export const AvatarBox = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: ${DESIGN_SYSTEM.gap["3xs"]};
  padding: ${DESIGN_SYSTEM.gap["2xs"]};
`;
