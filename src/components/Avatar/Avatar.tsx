import * as S from "./Avatar.style";
import Badge from "../Badge/Badge";
import IAvatar from "./Avatar.types";

/**
 * 프로필 사진을 보여주는 Avatar 컴포넌트입니다
 */
export default function Avatar({ $src, $size }: IAvatar) {
  return (
    <S.AvatarContainer $size={$size}>
      <S.ImageContainer>
        <S.AvatarImage $src={$src} />
      </S.ImageContainer>
      <S.BadgeContainer>
        <Badge $variant={$size === "sm" || $size === "xs" ? "dot" : "new"} />
      </S.BadgeContainer>
    </S.AvatarContainer>
  );
}
