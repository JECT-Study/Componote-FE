import Image from "next/image";

/**
 * Avatar 컴포넌트에 필요한 props입니다
 */
interface AvatarProps {
  src?: string;
  alt?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
}

/**
 * 프로필 사진을 보여주는 Avatar 컴포넌트입니다
 */
export default function Avatar({ src, alt, size = "md" }: AvatarProps) {
  const sizeMap = {
    xs: 16,
    sm: 24,
    md: 28,
    lg: 36,
    xl: 44,
    "2xl": 80,
  };
  const imageSize = sizeMap[size];

  return (
    <div className="overflow-hidden rounded-full">
      <Image
        src={src || "/image/defaultAvatarImage.svg"}
        alt={alt || "프로필 사진"}
        className="object-cover"
        width={imageSize}
        height={imageSize}
      />
    </div>
  );
}
