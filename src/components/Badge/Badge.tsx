/**
 * Avatar 컴포넌트에 필요한 props입니다
 */
interface BadgeProps {
  variant: "dot" | "new" | "count";
  text?: string;
}

/**
 * 프로필 사진을 보여주는 Avatar 컴포넌트입니다
 */
export default function Badge({ variant, text }: BadgeProps) {
  const basicBadgeClass =
    "rounded-circle opacity-visible bg-light-feedback-notification";

  if (variant === "dot") {
    return (
      <div className="w-fit h-fit flex flex-row p-4xs justify-items-center justify-center">
        <div className={`size-1 ${basicBadgeClass}`} />
      </div>
    );
  }

  const basicTextClass =
    "text-light-object-static-inv-hero text-center align-baseline typo-body-2xs";

  if (variant === "new") {
    return (
      <div className={`h-5 w-5 ${basicBadgeClass} ${basicTextClass}`}>N</div>
    );
  }

  return (
    <div className={`h-5 min-w-5 w-fit ${basicBadgeClass} ${basicTextClass}`}>
      {text || ""}
    </div>
  );
}
