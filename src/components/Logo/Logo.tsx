import * as S from "./Logo.style";

export default function Logo() {
  return (
    <S.LogoContainer>
      <S.LogoIconImg
        src="/logo/logo_icon.svg"
        alt="logo icon"
        width={16}
        height={16}
      />
      <S.LogoText
        src="/logo/logo.svg"
        alt="logo text"
        width={53.9}
        height={14}
      />
    </S.LogoContainer>
  );
}
