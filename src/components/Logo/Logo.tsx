import * as S from "./Logo.style";

export default function Logo({ $isFooter = false }: S.ILogo) {
  return (
    <S.LogoContainer>
      <S.LogoIconImg $isFooter={$isFooter} />
      <S.LogoTextImg $isFooter={$isFooter} />
    </S.LogoContainer>
  );
}
