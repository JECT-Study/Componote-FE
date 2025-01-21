import * as S from "./Logo.style";
import { useRouter } from "next/navigation";

export default function Logo({ $isFooter = false }: S.ILogo) {
  const router = useRouter();

  return (
    <S.LogoContainer onClick={() => router.push("/")}>
      <S.LogoIconImg $isFooter={$isFooter} />
      <S.LogoTextImg $isFooter={$isFooter} />
    </S.LogoContainer>
  );
}
