import DESIGN_SYSTEM from "@/styles/designSystem";
import styled from "styled-components";

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  gap: ${DESIGN_SYSTEM.gap.none};
  padding: ${DESIGN_SYSTEM.gap["7xl"]};

  background: ${({ theme }) => theme.light["surface-standard"]};
`;

export const ImageBox = styled.div`
  width: 100%;
  height: 45rem;
  max-width: 90rem;

  border-radius: ${DESIGN_SYSTEM.radius.sm};
  background: url("/image/onboarding.png");

  background-color: #ffeede;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
