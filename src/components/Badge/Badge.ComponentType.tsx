import { BADGE_COMPONENT_TYPE_TEXT } from "@/constants/messages";
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
  const text = BADGE_COMPONENT_TYPE_TEXT[$type];
  return (
    <BadgeComponentTypeContainer $type={$type} $style={$style} $size={$size}>
      {text}
    </BadgeComponentTypeContainer>
  );
}
