import DESIGN_SYSTEM from "@/styles/designSystem";
import styled from "styled-components";

export const DocumentSectionContainer = styled.div`
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  justify-content: center;

  gap: ${DESIGN_SYSTEM.gap["4xl"]};
  padding: ${DESIGN_SYSTEM.gap["4xl"]} ${DESIGN_SYSTEM.gap["7xl"]}
    ${DESIGN_SYSTEM.gap.none} ${DESIGN_SYSTEM.gap["7xl"]};

  background: ${({ theme }) => theme.light["surface-standard"]};
`;

export const DocumentSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  flex: 1 0 0;
  max-width: 60rem;

  gap: ${DESIGN_SYSTEM.gap["8xl"]};
  padding: ${DESIGN_SYSTEM.gap.xl} ${DESIGN_SYSTEM.gap.none}
    ${DESIGN_SYSTEM.gap["8xl"]} ${DESIGN_SYSTEM.gap.none};
`;

export const DocumentArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  gap: ${DESIGN_SYSTEM.gap["2xl"]};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const TitleText = styled.span`
  align-self: stretch;
  color: ${({ theme }) => theme.light["object-hero"]};

  ${DESIGN_SYSTEM.typography.title[2]};
`;

export const BodyText = styled.span`
  align-self: stretch;
  color: ${({ theme }) => theme.light["object-bolder"]};

  ${DESIGN_SYSTEM.typography.body.md};
`;
