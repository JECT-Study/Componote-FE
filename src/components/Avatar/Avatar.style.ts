import styled from "styled-components";
import DESIGN_SYSTEM from "@/styles/designSystem";

export interface IAvatarStyle {
  $src?: string;
  $size?: keyof typeof sizeMap;
}

const sizeMap = {
  xs: 16,
  sm: 24,
  md: 28,
  lg: 36,
  xl: 44,
  "2xl": 80,
};

export const AvatarContainer = styled.div`
  position: relative;

  width: 5rem;
  height: 5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${DESIGN_SYSTEM.gap.none};
  padding: ${DESIGN_SYSTEM.gap.none};
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  gap: ${DESIGN_SYSTEM.gap.none};
  padding: ${DESIGN_SYSTEM.gap.none};
  flex: 1 0 0;
`;

export const AvatarImage = styled.div<IAvatarStyle>`
  border-radius: 5rem;
  width: 100%;
  height: 100%;
  background-image: ${(props) =>
    props.$src ? `url(${props.$src})` : `url("/image/defaultAvatarImage.svg")`};

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  border: ${(props) =>
    props.$src && `${props.theme.light["border-trans-subtler"]} solid 1px`};
`;

export const BadgeContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;
