import * as S from "./ProfileEdit.style";

export default function ProfileEditBodyModuleWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <S.ProfileEditBodyModule>{children}</S.ProfileEditBodyModule>;
}
