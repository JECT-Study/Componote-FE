import * as S from "./Badge.style";

/**
 * Badge 컴포넌트에 필요한 props입니다
 */
interface IBadge extends S.IBadgeStyle {
  text?: string;
}

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
