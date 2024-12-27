import BadgeComponentTypeContainer from "./Badge.ComponentType.style";
import { IBadgeComponentType } from "./Badge.types";

/**
 * Badge/componentType 컴포넌트입니다
 */
export default function BadgeComponentType({
  $type,
  $style,
  $size,
}: IBadgeComponentType) {
  const textMap = {
    input: "Input 입력",
    display: "Display 표시",
    feedback: "Feedback 반응",
    navigation: "Navigation 안내",
  };
  const text = textMap[$type];

  return (
    <BadgeComponentTypeContainer $type={$type} $style={$style} $size={$size}>
      {text}
    </BadgeComponentTypeContainer>
  );
}
