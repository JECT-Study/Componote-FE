import styled, { css } from "styled-components";
import DESIGN_SYSTEM from "@/styles/designSystem";

export const FooterContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  width: 100%;

  padding: ${`${DESIGN_SYSTEM.gap.xl} ${DESIGN_SYSTEM.gap["4xl"]}`};
  background: ${({ theme }) => theme.light["surface-static-inv-sunken"]};
`;

export const FooterSection = styled.section`
  display: flex;
  align-items: center;
  flex: 1 0 0;

  max-width: 60rem;

  gap: ${DESIGN_SYSTEM.gap["2xl"]};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const FooterBox = styled.div`
  display: flex;
  align-items: center;
  flex: 1 0 0;

  min-width: 20rem;

  gap: ${DESIGN_SYSTEM.gap.md};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

const BaseText = css`
  ${DESIGN_SYSTEM.typography.body["2xs"]};
  color: ${({ theme }) => theme.light["object-static-inv-subtle"]};
`;

export const TermsAndPolicyAnchor = styled.a`
  ${BaseText};

  padding-top: 0.08rem;
  text-decoration: underline;
`;

export const ReservedText = styled.span`
  ${BaseText};
  text-align: right;
`;
