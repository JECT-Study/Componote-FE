import { useRouter } from "next/navigation";
import * as S from "./Logo.style";

export default function Logo({ $isFooter = false }: S.ILogo) {
  const router = useRouter();

  return (
    <S.LogoContainer onClick={() => router.push("/")}>
      <S.LogoIconImg $isFooter={$isFooter} />
      <S.LogoTextImg $isFooter={$isFooter} />
    </S.LogoContainer>
  );
}
