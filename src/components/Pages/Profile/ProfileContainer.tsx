import * as S from "./ProfileContainer.style";

interface IProfileContainer {
  children: React.ReactNode;
}

export default function ProfileContainer({ children }: IProfileContainer) {
  return <S.ProfileContainer>{children}</S.ProfileContainer>;
}