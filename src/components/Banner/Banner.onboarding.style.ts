import styled from "styled-components";
import DESIGN_SYSTEM from "@/styles/designSystem";

export const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  min-width: 50rem;

  gap: ${DESIGN_SYSTEM.gap["8xl"]};
  padding: ${DESIGN_SYSTEM.gap["7xl"]};
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
  flex: 1 0 0;

  width: 100%;
  max-width: 90rem;

  gap: ${DESIGN_SYSTEM.gap["8xl"]};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const TopSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;

  gap: ${DESIGN_SYSTEM.gap["3xl"]};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  align-items: flex-start;

  gap: ${DESIGN_SYSTEM.gap["2xl"]};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const MainTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;

  gap: ${DESIGN_SYSTEM.gap["5xs"]};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const SubTitleText = styled.span`
  flex: 1 0 0;
  text-align: center;

  color: ${({ theme }) => theme.light["object-bolder"]};
  ${DESIGN_SYSTEM.typography.title[2]}
`;

const CommonTextStyle = styled.p`
  align-self: stretch;
`;

export const TitleText = styled(CommonTextStyle)`
  color: ${({ theme }) => theme.light["object-hero"]};

  /* 디자인 시스템에 표기된 바가 없어 피그마 기반으로 코드 작성 */
  text-align: center;
  font-family: "Elice DigitalBaeum OTF";
  font-size: 3.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: -0.049rem;
`;

export const DescriptionText = styled(CommonTextStyle)`
  text-align: center;
  color: ${({ theme }) => theme.light["object-bolder"]};

  ${DESIGN_SYSTEM.typography.body.md}
`;

export const BottomSection = styled.div`
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  justify-content: center;

  max-width: 90rem;

  gap: ${DESIGN_SYSTEM.gap["2xl"]};
  padding: ${DESIGN_SYSTEM.gap.none} ${DESIGN_SYSTEM.gap["4xl"]};
`;
