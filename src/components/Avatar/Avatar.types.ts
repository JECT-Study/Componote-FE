import AVATAR_SIZE from "./Avatar.theme";

export default interface IAvatar {
  $src?: string;
  $size: keyof typeof AVATAR_SIZE;
  $badgeVisible: boolean;
}
