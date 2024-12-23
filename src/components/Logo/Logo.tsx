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
      {isFooter ? (
        <S.LogoTextImg width={54} height={15} fill="#fff" />
      ) : (
        <S.LogoTextImg width={70} height={18} fill="#121110" />
      )}
    </S.LogoContainer>
  );
}
