import { Layout, NavigationBar, DocumentBanner, Footer } from "@/components";
import { DocumentSection } from "@/components/Pages";
import { NAVBAR_ITEM_TEXT } from "@/constants/messages";

export default function ComponentDetail() {
  return (
    <Layout>
      <NavigationBar
        $isAuthorized
        $isSeparated
        placeholderText={NAVBAR_ITEM_TEXT.inputPlaceholder}
      />
      <DocumentBanner
        titleText="아코디언 Accoridion"
        componentListText="확장 패널 Expansion Panel, 토글 패널 Toggle Panel, 콜랩스 Collapse, 디스클로저 Disclosure, 드롭다운 섹션 Dropdown Section, 디테일 Details, 확장 기능 Expander"
        bodyText="아코디언은 추가적인 정보를 숨기거나 표시하는 데에 사용되는 컴포넌트예요."
      />
      <DocumentSection
        designReferenceCount={124}
        descriptionText="아코디언은 추가 정보를 표시하거나 숨기기 위해 상호작용 가능한
                  제목들이 수직으로 쌓인 UI 구성 요소입니다. 각 항목은 짧은 라벨만
                  보이도록 ‘접기’ 상태로 유지되거나, 전체 내용을 보기 위해 ‘펼치기’
                  상태로 전환될 수 있어요."
        useCaseText="검색 기능 화면에서 검색 결과가 표시될 때, 항목 별로 아코디언을
                    사용해 표시합니다. 이때, 동시에 여러 아코디언을 자유롭게 확장하고
                    축소할 수 있습니다."
      />
      <Footer />
    </Layout>
  );
}
