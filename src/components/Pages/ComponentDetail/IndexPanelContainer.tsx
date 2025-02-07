import { IndexPanel } from "@/components";
import { IIndexPanel } from "@/components/IndexPanel/IndexPanel.types";
import * as S from "./IndexPannelContainer.style";

export default function IndexPanelContainer({
  bannerRef,
  explanationRef,
  exampleRef,
  referenceRef,
}: IIndexPanel) {
  return (
    <S.IndexPanelContainer>
      <IndexPanel
        bannerRef={bannerRef}
        explanationRef={explanationRef}
        exampleRef={exampleRef}
        referenceRef={referenceRef}
      />
    </S.IndexPanelContainer>
  );
}
