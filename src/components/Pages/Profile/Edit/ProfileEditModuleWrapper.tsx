import * as S from "./ProfileEdit.style";

export default function ProfileEditModuleWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <S.ProfileEditModule>{children}</S.ProfileEditModule>;
}
