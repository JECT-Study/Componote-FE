import * as S from "./Avatar.style";
import Badge from "../Badge/Badge";

/**
 * 프로필 사진을 보여주는 Avatar 컴포넌트입니다
 */
export default function Avatar({ $src, $size }: S.IAvatarStyle) {
  return (
    <S.AvatarContainer>
      <S.ImageContainer>
        <S.AvatarImage $src={$src} />
      </S.ImageContainer>
      <S.BadgeContainer>
        <Badge $variant="new" />
      </S.BadgeContainer>
    </S.AvatarContainer>
  );
}
