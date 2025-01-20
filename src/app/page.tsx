import {
  Footer,
  NavigationBar,
  Layout,
  OnboardingBanner,
  ImageContainer,
} from "@/components";
import { BANNER_TEXT } from "@/constants/messages";

export default function Home() {
  return (
    <Layout>
      <NavigationBar
        $isSeparated={false}
        $isAuthorized={false}
        placeholderText="플레이스 홀더"
      />
      <OnboardingBanner
        titleText={BANNER_TEXT.onboarding.titleText}
        subTitleText={BANNER_TEXT.onboarding.subTitleText}
        descriptionText={BANNER_TEXT.onboarding.descriptionText}
      />
      <ImageContainer />
      <Footer />
    </Layout>
  );
}
