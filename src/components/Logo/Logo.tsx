import * as S from "./Logo.style";

interface ILogo {
  isFooter: boolean;
}

export default function Logo({ isFooter }: ILogo) {
  return (
    <S.LogoContainer>
      {isFooter ? (
        <S.LogoIconImg width={16} height={16} />
      ) : (
        <S.LogoIconImg width={24} height={24} />
      )}
      {isFooter ? <S.LogoWhiteTextImg /> : <S.LogoTextImg />}
    </S.LogoContainer>
  );
}
