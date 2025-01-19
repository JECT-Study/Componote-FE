import DESIGN_SYSTEM from "@/styles/designSystem";
import styled from "styled-components";

export const DialogBasicWrapper = styled.div`
  width: 32.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${DESIGN_SYSTEM.gap["6xl"]};
  padding: ${DESIGN_SYSTEM.gap["5xl"]};
`;

export const DialogBasicTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
  gap: ${DESIGN_SYSTEM.gap["2xs"]};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const DialogBasicButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  align-self: stretch;
  gap: ${DESIGN_SYSTEM.gap.md};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const DialogBasicTitleText = styled.span`
  align-self: stretch;

  color: ${({ theme }) => theme.light["object-hero"]};

  ${DESIGN_SYSTEM.typography.title["2"]};
`;

export const DialogBasicBodyText = styled.span`
  align-self: stretch;

  color: ${({ theme }) => theme.light["object-bold"]};

  ${DESIGN_SYSTEM.typography.body.sm};
`;
