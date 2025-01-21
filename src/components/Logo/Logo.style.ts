import styled from "styled-components";
import DESIGN_SYSTEM from "@/styles/designSystem";
import LogoText from "@/assets/logo/logo.svg";
import LogoIcon from "@/assets/logo/logo_icon.svg";

export interface ILogo {
  $isFooter?: boolean;
}

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;

  gap: ${DESIGN_SYSTEM.gap["4xs"]};

  cursor: pointer;
`;

export const LogoIconImg = styled(LogoIcon)<ILogo>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.02606rem;

  width: ${(props) => (props.$isFooter ? "1rem" : "1.5rem")};
  height: ${(props) => (props.$isFooter ? "1rem" : "1.5rem")};
`;

export const LogoTextImg = styled(LogoText)<ILogo>`
  width: ${(props) => (props.$isFooter ? "3.375rem" : "4.375rem")};
  height: ${(props) => (props.$isFooter ? "0.938rem" : "1.125rem")};

  path {
    fill: ${(props) =>
      props.$isFooter
        ? `${props.theme.light["object-static-inv-hero"]}`
        : `${props.theme.light["object-hero"]}`};
  }
`;
