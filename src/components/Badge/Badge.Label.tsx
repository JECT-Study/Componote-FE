import Image from "next/image";
import IconResponsive from "public/icons/iconResponsive.svg";

/**
 * Badge/Label 컴포넌트에 필요한 props입니다
 */
interface BadgeLabelProps {
  variant: "labelOnly" | "rightIcon";
  text: string;
  feedback: "none" | "negative" | "info" | "positive" | "notification";
  style: "solid" | "transparent" | "outlined";
  size: "xs" | "sm" | "md";
}

/**
 * Badge/Label 컴포넌트입니다
 */
export default function BadgeLabel({
  variant,
  text,
  feedback,
  style,
  size,
}: BadgeLabelProps) {
  const variantStyleMap = {
    labelOnly: "px-2xs",
    rightIcon: "pl-2xs pr-4xs",
  };
  const variantStyle = variantStyleMap[variant];

  const feedbackColorMap = {
    none: "bg-light-fill-hero",
    negative: "bg-light-feedback-negative",
    info: "bg-light-feedback-information",
    positive: "bg-light-feedback-positive",
    notification: "bg-light-feedback-notification",
  };
  const feedbackColor = feedbackColorMap[feedback];

  const sizeMap = {
    xs: "typo-body-2xs",
    sm: "typo-label-xs",
    md: "typo-label-sm",
  };
  const labelSize = sizeMap[size];

  const styleMap = {
    solid: "text-light-object-inv-hero",
    transparent: "bg-light-fill-trans-subtlest text-light-object-bold",
    outlined:
      "bg-transparent border border-light-border-trans-normal border-stroke-normal text-light-object-bold",
  };
  const labelStyle = styleMap[style];

  return (
    <div
      className={`flex flex-row justify-center justify-items-center w-fit h-fit gap-6xs py-6xs rounded-2xs ${variantStyle} ${feedbackColor} ${labelSize} ${labelStyle}`}
    >
      {text || ""}
      {variant === "rightIcon" && <Image src={IconResponsive} alt="체크표시" />}
    </div>
  );
}
