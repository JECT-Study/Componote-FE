"use client";

import DESIGN_SYSTEM from "@/styles/designSystem";
import styled from "styled-components";

export const HomeBannerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
  gap: ${DESIGN_SYSTEM.gap["8xl"]};
  padding: ${DESIGN_SYSTEM.gap["7xl"]};

  border-radius: ${DESIGN_SYSTEM.radius.none};
  opacity: ${DESIGN_SYSTEM.opacity.visible};
  background: ${({ theme }) => theme.light["surface-standard"]};
`;

export const HomeBannerContent = styled.div`
  height: 26rem;
  max-width: 90rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: ${DESIGN_SYSTEM.gap["8xl"]};
  padding: ${DESIGN_SYSTEM.gap.none};
  flex: 1 0 0;

  border-radius: ${DESIGN_SYSTEM.radius.none};
  opacity: ${DESIGN_SYSTEM.opacity.visible};
`;

export const HomeBannerModule = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: ${DESIGN_SYSTEM.gap["4xl"]};
  padding: ${DESIGN_SYSTEM.gap.none};

  border-radius: ${DESIGN_SYSTEM.radius.none};
  opacity: ${DESIGN_SYSTEM.opacity.visible};
`;

export const HomeBannerRegion = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  gap: ${DESIGN_SYSTEM.gap["3xl"]};
  padding: ${DESIGN_SYSTEM.gap.none};

  border-radius: ${DESIGN_SYSTEM.radius.none};
  opacity: ${DESIGN_SYSTEM.opacity.visible};
`;

export const HomeBannerCardList = styled.div`
  max-width: 90rem;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
  gap: ${DESIGN_SYSTEM.gap["2xl"]};
  padding: ${DESIGN_SYSTEM.gap.none} ${DESIGN_SYSTEM.gap["4xl"]};

  border-radius: ${DESIGN_SYSTEM.radius.none};
  opacity: ${DESIGN_SYSTEM.opacity.visible};
`;

export const HomeBannerSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: ${DESIGN_SYSTEM.gap["2xl"]};
  padding: ${DESIGN_SYSTEM.gap.none};

  border-radius: ${DESIGN_SYSTEM.radius.none};
  opacity: ${DESIGN_SYSTEM.opacity.visible};
`;

export const HomeBannerSectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: ${DESIGN_SYSTEM.gap["5xs"]};
  padding: ${DESIGN_SYSTEM.gap.none};

  border-radius: ${DESIGN_SYSTEM.radius.none};
  opacity: ${DESIGN_SYSTEM.opacity.visible};
`;

export const HomeBannerTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  gap: ${DESIGN_SYSTEM.gap.none};
  padding-left: ${DESIGN_SYSTEM.gap["4xs"]};

  border-radius: ${DESIGN_SYSTEM.radius.none};
  opacity: ${DESIGN_SYSTEM.opacity.visible};
`;

export const HomeBannerTitleText = styled.span`
  flex: 1 0 0;
  color: ${({ theme }) => theme.light["object-bolder"]};
  text-align: center;

  ${DESIGN_SYSTEM.typography.title[2]}
`;

export const HomeBannerDisplayText = styled.span`
  align-self: stretch;
  color: ${({ theme }) => theme.light["object-hero"]};

  text-align: center;
  font-family: "Elice DigitalBaeum OTF";
  font-size: 3.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 4.55rem;
  letter-spacing: -0.049rem;

  opacity: ${DESIGN_SYSTEM.opacity.visible};
`;

export const HomeBannerBodyText = styled.span`
  align-self: stretch;

  color: ${({ theme }) => theme.light["object-bolder"]};
  text-align: center;

  ${DESIGN_SYSTEM.typography.body.md}

  opacity: ${DESIGN_SYSTEM.opacity.visible};
`;
