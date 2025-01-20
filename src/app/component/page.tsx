import {
  Layout,
  NavigationBar,
  DefaultBanner,
  Toolbar,
  ChipList,
  ComponentCard,
  CardContainer,
  Footer,
} from "@/components";
import { BANNER_TEXT } from "@/constants/messages";

export default function Component() {
  return (
    <Layout>
      <NavigationBar
        $isAuthorized
        $isSeparated
        placeholderText="컴포넌트나 디자인 시스템을 검색해 보세요..."
      />
      <DefaultBanner
        titleText={BANNER_TEXT.component.titleText}
        descriptionText={BANNER_TEXT.component.descriptionText}
      />
      <Toolbar children={<ChipList />} />
      <CardContainer>
        <ComponentCard
          componentName="컴포넌트 명"
          descriptionText="설명 내용"
          $sampleCount="999+"
          $commentCount="999+"
          $bookmarkCount="999+"
        />
        <ComponentCard
          componentName="컴포넌트 명"
          descriptionText="설명 내용"
          $sampleCount="999+"
          $commentCount="999+"
          $bookmarkCount="999+"
        />
        <ComponentCard
          componentName="컴포넌트 명"
          descriptionText="설명 내용"
          $sampleCount="999+"
          $commentCount="999+"
          $bookmarkCount="999+"
        />
        <ComponentCard
          componentName="컴포넌트 명"
          descriptionText="설명 내용"
          $sampleCount="999+"
          $commentCount="999+"
          $bookmarkCount="999+"
        />
        <ComponentCard
          componentName="컴포넌트 명"
          descriptionText="설명 내용"
          $sampleCount="999+"
          $commentCount="999+"
          $bookmarkCount="999+"
        />
      </CardContainer>
      <Footer />
    </Layout>
  );
}
