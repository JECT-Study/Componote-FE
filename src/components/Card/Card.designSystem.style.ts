import styled, { css } from "styled-components";
import { ICardComponent } from "./Card.types";
import DESIGN_SYSTEM from "@/styles/designSystem";

export const CardContainer = styled.div<ICardComponent>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 33.125rem;
  gap: ${DESIGN_SYSTEM.gap.md};
  padding: ${DESIGN_SYSTEM.gap.xl};

  position: relative;

  border-radius: ${DESIGN_SYSTEM.radius.sm};
  border: ${DESIGN_SYSTEM.stroke.normal} solid
    ${({ theme }) => theme.light["border-trans-normal"]};

  background: ${({ theme }) => theme.light["surface-embossed"]};

  ${({ theme, $isDisabled }) => {
    if ($isDisabled) {
      return css`
        border: ${DESIGN_SYSTEM.stroke.normal} solid
          ${theme.light["border-trans-subtler"]};
      `;
    } else {
      return css`
        &:hover {
          border-radius: ${DESIGN_SYSTEM.radius.sm};
          border: ${DESIGN_SYSTEM.stroke.normal} solid
            ${theme.light["border-trans-normal"]};

          box-shadow: ${DESIGN_SYSTEM.shadow.floated};
        }

        &:focus-visible {
          ${DESIGN_SYSTEM.focus(theme)}
        }
      `;
    }
  }}
`;

export const TopSection = styled.section`
  display: flex;
  align-items: flex-start;
  align-self: stretch;

  position: relative;

  gap: ${DESIGN_SYSTEM.gap.md};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const ImageBox = styled.div`
  display: flex;
  align-items: flex-start;

  width: 6rem;
  height: 6rem;

  gap: ${DESIGN_SYSTEM.gap.none};
  padding: ${DESIGN_SYSTEM.gap.none};

  position: relative;

  border-radius: ${DESIGN_SYSTEM.radius.xs};
  border: ${DESIGN_SYSTEM.stroke.normal} solid
    ${({ theme }) => theme.light["border-trans-subtle"]};
`;

export const ComponentImage = styled.div<{ $src?: string }>`
  flex: 1 0 0;
  align-self: stretch;

  background-image: ${(props) =>
    props.$src ? `url(${props.$src})` : `url("/image/sampleImage.png")`};

  background-color: #ffeede;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  border-radius: ${DESIGN_SYSTEM.radius.xs};
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  flex: 1 0 0;

  gap: ${DESIGN_SYSTEM.gap["3xs"]};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  gap: ${DESIGN_SYSTEM.gap["6xs"]};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

const CommonTextStyle = styled.span<ICardComponent>`
  align-self: stretch;
`;

export const TitleText = styled(CommonTextStyle)`
  color: ${({ theme }) => theme.light["object-hero"]};

  ${DESIGN_SYSTEM.typography.title[1]};
`;

export const LabelText = styled(CommonTextStyle)`
  color: ${({ theme }) => theme.light["object-bold"]};

  ${DESIGN_SYSTEM.typography.label.bold.sm};
`;

export const BodyText = styled(CommonTextStyle)`
  height: 3.9375rem;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({ theme }) => theme.light["object-bold"]};

  ${DESIGN_SYSTEM.typography.body.xs};
`;

export const DeviceLabelBox = styled.div`
  display: flex;
  align-items: center;

  gap: ${DESIGN_SYSTEM.gap["2xs"]};
  padding: ${DESIGN_SYSTEM.gap.none};

  position: absolute;
  right: 0rem;
  top: 0.125rem;
`;

export const LabelBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-self: stretch;
  align-items: flex-start;
  align-content: flex-start;

  max-height: 4.125rem;

  gap: ${DESIGN_SYSTEM.gap["3xs"]};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const BottomSection = styled.section`
  display: flex;
  align-items: center;
  align-self: stretch;

  gap: ${DESIGN_SYSTEM.gap.xl};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const PlatformBox = styled.div`
  display: flex;
  align-items: center;
  flex: 1 0 0;

  gap: ${DESIGN_SYSTEM.gap["2xs"]};
  padding: ${DESIGN_SYSTEM.gap.none};
`;
