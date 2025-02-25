import styled, { css } from "styled-components";
import DESIGN_SYSTEM from "@/styles/designSystem";
import { ICardComponent } from "./Card.types";

export const CardContainer = styled.div<ICardComponent>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 24.5625rem;

  gap: ${DESIGN_SYSTEM.gap.md};
  padding: ${DESIGN_SYSTEM.gap.xl};

  border-radius: ${DESIGN_SYSTEM.radius.sm};
  border: ${DESIGN_SYSTEM.stroke.normal} solid
    ${({ theme }) => theme.light["border-trans-normal"]};

  background: ${({ theme }) => theme.light["surface-embossed"]};

  cursor: pointer;

  ${({ theme, $isDisabled }) => {
    if ($isDisabled) {
      return css`
        position: relative;
        border: ${DESIGN_SYSTEM.stroke.normal} solid
          ${theme.light["border-trans-subtler"]};
      `;
    }

    return css`
      &:hover {
        border-radius: ${DESIGN_SYSTEM.radius.sm};
        border: ${DESIGN_SYSTEM.stroke.normal} solid
          ${theme.light["border-trans-normal"]};

        box-shadow: ${DESIGN_SYSTEM.shadow.floated};
      }

      &:focus-visible {
        ${DESIGN_SYSTEM.focus(theme)}
      }
    `;
  }}
`;

export const ImageBox = styled.div`
  display: flex;
  align-self: stretch;
  align-items: flex-start;

  position: relative;

  height: 12.5rem;

  gap: ${DESIGN_SYSTEM.gap.none};
  padding: ${DESIGN_SYSTEM.gap.none};

  border-radius: ${DESIGN_SYSTEM.radius.xs};
`;

export const CardImage = styled.div<ICardComponent>`
  flex: 1 0 0;
  align-self: stretch;

  background-image: ${(props) =>
    props.$src ? `url(${props.$src})` : `url("/image/sampleImage.png")`};

  background-color: #ffeede;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  border-radius: ${DESIGN_SYSTEM.radius.sm};
`;

export const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  gap: ${DESIGN_SYSTEM.gap["2xs"]};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const TitleText = styled.h2`
  align-self: stretch;
  color: ${({ theme }) => theme.light["object-hero"]};

  ${DESIGN_SYSTEM.typography.title[1]};
`;

export const BodyText = styled.span`
  height: 3rem;
  align-self: stretch;

  color: ${({ theme }) => theme.light["object-bold"]};

  ${DESIGN_SYSTEM.typography.body.xs};
`;

export const ContentSection = styled.section`
  display: flex;
  align-items: center;
  align-self: stretch;

  gap: ${DESIGN_SYSTEM.gap.md};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1 0 0;

  gap: ${DESIGN_SYSTEM.gap.md};
  padding: ${DESIGN_SYSTEM.gap.none};
`;
