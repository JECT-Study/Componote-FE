import { Footer, NavigationBar } from "@/components";
import * as S from "./_components/Home.style";
import HomeBanner from "./_components/HomeBanner";

export default function Home() {
  return (
    <S.HomeWrapper>
      <NavigationBar
        $isSeparated={false}
        $isAuthorized={false}
        placeholderText="플레이스 홀더"
      />
      <S.HomeViewport>
        <HomeBanner />
      </S.HomeViewport>
      <Footer />
    </S.HomeWrapper>
  );
}
