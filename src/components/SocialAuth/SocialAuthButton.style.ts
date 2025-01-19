import styled from "styled-components";
import DESIGN_SYSTEM from "@/styles/designSystem";

export const SocialAuthBtn = styled.button`
  position: relative;

  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${DESIGN_SYSTEM.gap["3xs"]};
  padding: ${DESIGN_SYSTEM.gap.xs} ${DESIGN_SYSTEM.gap.md};

  border-radius: ${DESIGN_SYSTEM.radius.xs};
  border: ${DESIGN_SYSTEM.stroke.normal} solid
    ${({ theme }) => theme.light["border-trans-subtle"]};

  opacity: ${DESIGN_SYSTEM.opacity.visible};
  background: ${({ theme }) => theme.light["surface-embossed"]};
`;

export const SocialAuthLabelText = styled.span`
  color: ${({ theme }) => theme.light["object-hero"]};
  text-align: center;

  ${DESIGN_SYSTEM.typography.label.md}

  opacity: ${DESIGN_SYSTEM.opacity.visible};
`;
