import DESIGN_SYSTEM from "@/styles/designSystem";
import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  width: 100%;

  gap: ${DESIGN_SYSTEM.gap["7xl"]};
  padding: ${DESIGN_SYSTEM.gap["7xl"]};
`;

export const BannerTextBox = styled.div`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  align-items: flex-start;

  max-width: 60rem;

  gap: ${DESIGN_SYSTEM.gap["2xl"]};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

const CommonTextStyle = styled.span`
  align-self: stretch;
`;

export const TitleText = styled(CommonTextStyle)`
  align-self: stretch;
  color: ${({ theme }) => theme.light["object-hero"]};

  ${DESIGN_SYSTEM.typography.display[1]}
`;

export const DescriptionText = styled(CommonTextStyle)`
  align-self: stretch;

  color: ${({ theme }) => theme.light["object-bolder"]};
  ${DESIGN_SYSTEM.typography.body.lg}
`;
