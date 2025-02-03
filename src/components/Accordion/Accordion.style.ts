import styled, { css } from "styled-components";
import DESIGN_SYSTEM from "@/styles/designSystem";
import { IconWrapper } from "@/utils/IconWrapper";
import { IAccordionComponent, IAccordionIcon } from "./Accordion.types";

export const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 50rem;

  gap: ${DESIGN_SYSTEM.gap.none};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const TitleContainer = styled.div<IAccordionComponent>`
  display: flex;
  align-items: center;
  align-self: stretch;

  ${({ $size }) => {
    if ($size === "sm") {
      return css`
        gap: ${DESIGN_SYSTEM.gap.md};
        padding: ${DESIGN_SYSTEM.gap["4xs"]} ${DESIGN_SYSTEM.gap.sm};

        border: none;
        background: none;
      `;
    }

    return css`
      gap: ${DESIGN_SYSTEM.gap["2xl"]};
      padding: ${DESIGN_SYSTEM.gap.md} ${DESIGN_SYSTEM.gap.xl};

      border: ${DESIGN_SYSTEM.stroke.normal} solid
        ${({ theme }) => theme.light["border-trans-subtle"]};
      border-radius: ${DESIGN_SYSTEM.radius.xs} ${DESIGN_SYSTEM.radius.xs}
        ${DESIGN_SYSTEM.radius.none} ${DESIGN_SYSTEM.radius.none};

      background: ${({ theme }) => theme.light["surface-embossed"]};
    `;
  }}

  &:hover {
    background: #f3f3f3;
  }

  &:focus-visible {
    ${({ theme }) => DESIGN_SYSTEM.focus(theme)}
  }
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  flex: 1 0 0;

  gap: ${DESIGN_SYSTEM.gap.xl};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const TitleText = styled.span<IAccordionComponent>`
  flex: 1 0 0;

  ${({ $size }) => {
    if ($size === "sm")
      return css`
        color: ${({ theme }) => theme.light["object-bold"]};
        ${DESIGN_SYSTEM.typography.body.sm}
      `;

    return css`
      color: ${({ theme }) => theme.light["object-boldest"]};
      ${DESIGN_SYSTEM.typography.label.bold.lg}
    `;
  }}
`;

export const DateText = styled.span`
  color: ${({ theme }) => theme.light["object-subtle"]};
  ${DESIGN_SYSTEM.typography.body["2xs"]};
`;

export const MoreIcon = styled(IconWrapper)<IAccordionIcon>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: ${DESIGN_SYSTEM.gap.none};
  padding: ${DESIGN_SYSTEM.gap.none};

  cursor: pointer;

  ${({ $size }) => {
    if ($size === "sm")
      return css`
        width: 1.5rem;
        height: 1.5rem;
      `;

    return css`
      width: 2rem;
      height: 2rem;
    `;
  }}

  path {
    fill: ${({ theme }) => theme.light["object-normal"]};
  }
`;

export const BodyContainer = styled.div`
  display: flex;
  align-items: flex-start;
  align-self: stretch;

  gap: ${DESIGN_SYSTEM.gap["2xl"]};
  padding: ${DESIGN_SYSTEM.gap.lg} ${DESIGN_SYSTEM.gap.xl}
    ${DESIGN_SYSTEM.gap["7xl"]} ${DESIGN_SYSTEM.gap.xl};

  border-right: ${DESIGN_SYSTEM.stroke.normal} solid
    ${({ theme }) => theme.light["border-trans-subtle"]};
  border-bottom: ${DESIGN_SYSTEM.stroke.normal} solid
    ${({ theme }) => theme.light["border-trans-subtle"]};
  border-left: ${DESIGN_SYSTEM.stroke.normal} solid
    ${({ theme }) => theme.light["border-trans-subtle"]};

  border-radius: ${DESIGN_SYSTEM.radius.none} ${DESIGN_SYSTEM.radius.none}
    ${DESIGN_SYSTEM.radius.xs} ${DESIGN_SYSTEM.radius.xs};

  background: ${({ theme }) => theme.light["surface-embossed"]};
`;

export const BodyText = styled.span`
  color: ${({ theme }) => theme.light["object-hero"]};
  ${DESIGN_SYSTEM.typography.body.md};
`;
