import styled from "styled-components";

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

export const TermsAndPolicyAnchor = styled.a`
  padding-top: 0.08rem;
  text-decoration: underline;

  ${({ theme }) => theme.typography?.body["2xs"]};
  color: ${({ theme }) => theme.colors?.light["object-static-inv-subtle"]};
`;

export const ReservedText = styled.span`
  text-align: right;

  ${({ theme }) => theme.typography?.body["2xs"]};
  color: ${({ theme }) => theme.colors?.light["object-static-inv-subtle"]};
`;
