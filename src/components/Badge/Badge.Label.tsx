import * as S from "./Badge.Label.style";
import { IBadgeLabel } from "./Badge.types";

/**
 * Badge/Label 컴포넌트입니다
 */
export default function BadgeLabel({
  $variant,
  text,
  $feedback,
  $style,
  $size,
}: IBadgeLabel) {
  return (
    <S.BadgeLabelContainer
      $variant={$variant}
      $feedback={$feedback}
      $style={$style}
      $size={$size}
    >
      {text}
      {$variant === "rightIcon" && (
        <S.BadgeLabelCheckIcon
          $feedback={$feedback}
          $style={$style}
          $size={$size}
        />
      )}
    </S.BadgeLabelContainer>
  );
}
