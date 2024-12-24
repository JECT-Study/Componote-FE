import styled from "styled-components";
import checkLine from "@/assets/icons/check-line.svg";
import DESIGN_SYSTEM from "@/styles/designSystem";

export const ToastContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  gap: ${DESIGN_SYSTEM.gap["4xs"]};
  padding: ${`${DESIGN_SYSTEM.gap.xs} ${DESIGN_SYSTEM.gap["2xl"]}`};

  box-shadow: ${DESIGN_SYSTEM.shadow.overlay};
  border-radius: ${DESIGN_SYSTEM.radius.sm};

  opacity: ${DESIGN_SYSTEM.opacity.visible};
  background: ${({ theme }) => theme.light["object-hero"]};
`;

export const ToastLabelText = styled.span`
  text-align: center;

  ${DESIGN_SYSTEM.typography.label.bold.sm}
  color: ${({ theme }) => theme.light["object-inv-hero"]};
`;

export const CheckLineImg = styled(checkLine)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 1.25rem;
  height: 1.25rem;

  gap: ${DESIGN_SYSTEM.gap.none};
  padding: ${DESIGN_SYSTEM.gap.none};

  path {
    fill: ${({ theme }) => theme.light["feedback-positive"]};
  }
`;
