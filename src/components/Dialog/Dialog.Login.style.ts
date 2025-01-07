import DESIGN_SYSTEM from "@/styles/designSystem";
import styled from "styled-components";

export const DialogLoginWrapper = styled.div`
  width: 32.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${DESIGN_SYSTEM.gap["2xl"]};
  padding: ${DESIGN_SYSTEM.gap["5xl"]};
`;

export const DialogLoginSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: ${DESIGN_SYSTEM.gap["6xl"]};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const DialogLoginCaptionText = styled.span`
  align-self: stretch;

  color: ${({ theme }) => theme.light["object-subtler"]};

  ${DESIGN_SYSTEM.typography.body.xs};
`;

export const DialogLoginCaptionLinkText = styled.span`
  color: ${({ theme }) => theme.light["object-normal"]};

  ${DESIGN_SYSTEM.typography.body.xs};
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: auto;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
`;

export const DialogLoginWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  gap: ${DESIGN_SYSTEM.gap.xs};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const DialogLoginButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: ${DESIGN_SYSTEM.gap.md};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const DialogLoginTitleContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  gap: ${DESIGN_SYSTEM.gap["2xs"]};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const DialogLoginTitleText = styled.span`
  flex: 1 0 0;

  color: ${({ theme }) => theme.light["object-hero"]};

  ${DESIGN_SYSTEM.typography.title["2"]};
`;

export const DialogLoginBodyText = styled.span`
  align-self: stretch;

  color: ${({ theme }) => theme.light["object-bold"]};

  ${DESIGN_SYSTEM.typography.body.sm};
`;
