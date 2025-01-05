import * as S from "./Badge.style";
import { IBadge } from "./Badge.types";

/**
 * Badge 컴포넌트입니다
 */
export default function Badge({ $variant, text }: IBadge) {
  if ($variant === "dot") {
    return (
      <S.DotBadgeContainer $variant={$variant}>
        <S.Dot />
      </S.DotBadgeContainer>
    );
  }

  return (
    <S.TextBadgeContainer $variant={$variant}>
      {$variant === "new" ? "N" : text || ""}
    </S.TextBadgeContainer>
  );
}
