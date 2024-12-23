import styled, { css } from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  padding: ${({ theme }) => `${theme.gap["xl"]} ${theme.gap["4xl"]}`};
  background: ${({ theme }) =>
    theme.colors?.light["surface-static-inv-sunken"]};
`;

export const FooterSection = styled.section`
  display: flex;
  align-items: center;
  flex: 1 0 0;

  max-width: 60rem;

  gap: ${({ theme }) => theme.gap["2xl"]};
  padding: ${({ theme }) => theme.gap["none"]};
`;

export const FooterBox = styled.div`
  display: flex;
  align-items: center;
  flex: 1 0 0;

  gap: ${({ theme }) => theme.gap["md"]};
  padding: ${({ theme }) => theme.gap["none"]};
`;

const BaseText = css`
  ${({ theme }) => theme.typography?.body["2xs"]};
  color: ${({ theme }) => theme.colors?.light["object-static-inv-subtle"]};
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
