import * as S from "./Badge.style";

/**
 * Badge 컴포넌트입니다
 */
export default function Badge({ variant, text }: S.BadgeProps) {
  if (variant === "dot") {
    return (
      <S.BadgeContainer variant={variant}>
        <S.Dot />
      </S.BadgeContainer>
    );
  }

  return (
    <S.TextBadgeContainer variant={variant}>
      {variant === "new" ? "N" : text || ""}
    </S.TextBadgeContainer>
  );
}
