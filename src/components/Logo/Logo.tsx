import * as S from "./Logo.style";

export default function Logo() {
  return (
    <S.LogoContainer>
      <S.LogoIconImg src="/logo/logo_icon.svg" />
      <S.LogoText src="/logo/logo.svg" />
    </S.LogoContainer>
  );
}
