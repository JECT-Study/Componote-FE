import styled from "styled-components";
import DESIGN_SYSTEM from "@/styles/designSystem";
import { IDocumentBannerComponent } from "./Banner.types";

export const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  width: 100%;

  gap: ${DESIGN_SYSTEM.gap["7xl"]};
  padding: ${DESIGN_SYSTEM.gap["7xl"]};
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1 0 0;

  width: 100%;
  max-width: 60rem;

  gap: ${DESIGN_SYSTEM.gap["7xl"]};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const TitleSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  gap: ${DESIGN_SYSTEM.gap["7xl"]};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const DisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  gap: ${DESIGN_SYSTEM.gap["5xl"]};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const DisplayBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;

  gap: ${DESIGN_SYSTEM.gap.sm};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const TitleText = styled.h1`
  color: ${({ theme }) => theme.light["object-hero"]};
  ${DESIGN_SYSTEM.typography.title[4]};
`;

export const ComponentListText = styled.span`
  max-width: 45rem;
  color: ${({ theme }) => theme.light["object-subtle"]};

  ${DESIGN_SYSTEM.typography.title[1]};
`;

export const BodyText = styled.span`
  align-self: stretch;
  color: ${({ theme }) => theme.light["object-bolder"]};

  ${DESIGN_SYSTEM.typography.body.lg};
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-start;
  align-self: stretch;

  gap: ${DESIGN_SYSTEM.gap.md};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const ImageBox = styled.div<IDocumentBannerComponent>`
  width: 60rem;
  height: 25rem;

  border-radius: ${DESIGN_SYSTEM.radius.sm};
  border: ${DESIGN_SYSTEM.stroke.normal} solid
    ${({ theme }) => theme.light["border-trans-subtle"]};

  background-image: ${(props) => props.$src && `url(${props.$src})`};

  background-color: #ffeede;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
