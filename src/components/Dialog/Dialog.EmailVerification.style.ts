import DESIGN_SYSTEM from "@/styles/designSystem";
import styled from "styled-components";
// import sampleImage from "@/assets/images/sampleImage.png";

export const DialogEmailVerificationWrapper = styled.div`
  width: 32.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${DESIGN_SYSTEM.gap.xl};
  padding: ${DESIGN_SYSTEM.gap.lg} ${DESIGN_SYSTEM.gap.xl};
`;

export const DialogEmailVerificationTitleContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  gap: ${DESIGN_SYSTEM.gap.md};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const DialogEmailVerificationImageContainer = styled.div`
  display: flex;
  width: 5rem;
  height: 5rem;
  align-items: flex-start;
  gap: ${DESIGN_SYSTEM.gap.none};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const DialogEmailVerificationTitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 0 0;
  gap: ${DESIGN_SYSTEM.gap["4xs"]};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const DialogEmailVerificationButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  align-self: stretch;
  gap: ${DESIGN_SYSTEM.gap.md};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const DialogEmailVerificationTitleText = styled.span`
  align-self: stretch;

  color: ${({ theme }) => theme.light["object-hero"]};

  ${DESIGN_SYSTEM.typography.title["1"]};
`;

export const DialogEmailVerificationBodyText = styled.span`
  align-self: stretch;

  color: ${({ theme }) => theme.light["object-bold"]};

  ${DESIGN_SYSTEM.typography.body.sm};
`;
