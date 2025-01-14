import DESIGN_SYSTEM from "@/styles/designSystem";
import { IconWrapper } from "@/utils/IconWrapper";
import styled from "styled-components";

export const SampleCommentContainer = styled.div`
  display: flex;
  align-items: center;

  gap: ${DESIGN_SYSTEM.gap["4xs"]};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const SampleCommentIcon = styled(IconWrapper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 1rem;
  height: 1rem;

  gap: ${DESIGN_SYSTEM.gap.none};
  padding: ${DESIGN_SYSTEM.gap.none};

  path {
    fill: ${({ theme }) => theme.light["object-normal"]};
  }
`;

export const SampleCommentText = styled.span`
  margin-top: 0.1rem;
  fill: ${({ theme }) => theme.light["object-normal"]};

  ${DESIGN_SYSTEM.typography.body.sm};
`;
