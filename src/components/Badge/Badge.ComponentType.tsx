import * as S from "./Badge.ComponentType.style";

/**
 * Badge/componentType 컴포넌트입니다
 */
export default function BadgeComponentType({
  $type,
  $style,
  $size,
}: S.IBadgeComponentType) {
  const textMap = {
    input: "Input 입력",
    display: "Display 표시",
    feedback: "Feedback 반응",
    navigation: "Navigation 안내",
  };
  const text = textMap[$type];

  return (
    <S.BadgeComponentTypeContainer $type={$type} $style={$style} $size={$size}>
      {text}
    </S.BadgeComponentTypeContainer>
  );
}
