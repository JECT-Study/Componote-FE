import * as S from "./ImageContainer.style";

interface IImageContainer {
  children: React.ReactNode;
}

export default function ImageContainer() {
  return (
    <S.ImageContainer>
      <S.ImageBox />
    </S.ImageContainer>
  );
}
