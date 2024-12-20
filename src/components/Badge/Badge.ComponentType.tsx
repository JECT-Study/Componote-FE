/**
 * Badge/componentType 컴포넌트에 필요한 props입니다
 */
interface BadgeComponentTypeProps {
  type: "input" | "display" | "feedback" | "navigation";
  style: "solid" | "transparent";
  size: "xs" | "sm" | "md";
}

/**
 * Badge/componentType 컴포넌트입니다
 */
export default function BadgeComponentType({
  type,
  style,
  size,
}: BadgeComponentTypeProps) {
  const textMap = {
    input: { text: "Input 입력", color: "cyan" },
    display: { text: "Display 표시", color: "violet" },
    feedback: { text: "Feedback 반응", color: "rose" },
    navigation: { text: "Navigation 안내", color: "lime" },
  };
  const { text, color } = textMap[type];

  const isSolid = style === "solid";

  const sizeMap = {
    xs: "typo-body-2xs gap-6xs py-6xs px-2xs",
    sm: "typo-label-xs gap-5xs py-5xs px-xs",
    md: "typo-label-sm gap-4xs py-4xs px-sm",
  };
  const badgeSize = sizeMap[size];

  return (
    <div
      className={`flex flex-row justify-center justify-items-center w-fit h-fit rounded-2xs ${badgeSize} ${
        isSolid
          ? `bg-light-custom-${color} text-light-object-static-inv-hero`
          : `bg-light-custom-trans-${color} text-light-custom-${color}`
      }`}
    >
      {text}
    </div>
  );
}
