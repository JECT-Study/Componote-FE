import * as S from "./MainContainer.style";

interface IMainContainer {
  children: React.ReactNode;
}

export default function MainContainer({ children }: IMainContainer) {
  return <S.MainContainer>{children}</S.MainContainer>;
}
