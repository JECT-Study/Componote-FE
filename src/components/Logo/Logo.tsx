import * as S from "./Logo.style";

interface ILogo {
  isFooter: boolean;
}

export default function Logo({ isFooter }: ILogo) {
  return (
    <S.LogoContainer>
      <S.LogoIconImg
        src="/logo/logo_icon.svg"
        alt="logo icon"
        width={16}
        height={16}
      />
      <S.LogoText
        src={isFooter ? "/logo/logo_white.svg" : "/logo/logo.svg"}
        alt="logo text"
        width={53.9}
        height={14}
      />
    </S.LogoContainer>
  );
}
