import styled from "styled-components";
import DESIGN_SYSTEM from "@/styles/designSystem";
import AVATAR_SIZE from "./Avatar.theme";

export interface IAvatarStyle {
  $src?: string;
  $size: keyof typeof AVATAR_SIZE;
}

export const AvatarContainer = styled.div<IAvatarStyle>`
  position: relative;

  width: ${({ $size }) => AVATAR_SIZE[$size].avatarSize};
  height: ${({ $size }) => AVATAR_SIZE[$size].avatarSize};

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

export const AvatarImage = styled.div<{ $src?: string }>`
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
  top: -0.5rem;
  right: -0.5rem;
`;
