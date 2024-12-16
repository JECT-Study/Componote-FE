/**
 * Avatar 컴포넌트에 필요한 props입니다
 */
interface BadgeProps {
  text?: string;
}

/**
 * 프로필 사진을 보여주는 Avatar 컴포넌트입니다
 */
export default function Badge({ text }: BadgeProps) {
  const basicBadgeClass =
    "rounded-circle opacity-visible bg-light-feedbackNotification";

  return text ? (
    <div
      className={`${basicBadgeClass} text-light-objectStaticInvHero text-center`}
    >
      {text}
    </div>
  ) : (
    <div className={`size-1 ${basicBadgeClass}`} />
  );
}
