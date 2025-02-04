import styled from "styled-components";
import DESIGN_SYSTEM from "@/styles/designSystem";

export const EmptyStateContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-height: 15rem;

  gap: ${DESIGN_SYSTEM.gap["3xs"]};
  padding: ${DESIGN_SYSTEM.gap["4xl"]} ${DESIGN_SYSTEM.gap["7xl"]};
`;

export const EmptyStateText = styled.span`
  text-align: center;
  color: ${({ theme }) => theme.light["object-subtler"]};

  ${DESIGN_SYSTEM.typography.title[2]};
`;
