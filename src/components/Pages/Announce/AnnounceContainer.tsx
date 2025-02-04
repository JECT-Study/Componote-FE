import * as S from "./AnnounceContainer.style";

interface IAnnounceContainer {
  children: React.ReactNode;
}

export default function AnnounceContainer({ children }: IAnnounceContainer) {
  return <S.AnnounceContainer>{children}</S.AnnounceContainer>;
}
