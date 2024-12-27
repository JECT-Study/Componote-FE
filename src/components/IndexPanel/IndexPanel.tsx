import { useState } from "react";
import InteractionContainer from "../Interaction/Interaction.style";
import * as S from "./IndexPanel.style";

/**
 * IndexPanel/Item 컴포넌트에 필요한 props입니다
 */
interface IIndexPanelItem extends S.IIndexPanelItemStyle {
  text: string;
  contentRef: React.RefObject<HTMLElement>;
}

/**
 * IndexPanel/Item 컴포넌트 입니다. IndexPanel에서만 사용됩니다.
 */
function IndexPanelItem({
  $isSelected = false,
  $isDisabled = false,
  text,
  contentRef,
}: IIndexPanelItem) {
  // TODO: 목차 중 해당 위치에 닿으면 isSelected true되도록 구현하기
  const [isSelected, setIsSelected] = useState($isSelected);

  const onContentClick = () => {
    contentRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <S.IndexPanelItem
      $isSelected={isSelected}
      $isDisabled={$isDisabled}
      onClick={onContentClick}
    >
      {text || ""}
      <InteractionContainer $variant="default" $density="subtle" />
    </S.IndexPanelItem>
  );
}

/**
 * IndexPanel 컴포넌트에 필요한 props입니다.
 */
interface IIndexPanel {
  bannerRef: React.RefObject<HTMLElement>;
  explanationRef: React.RefObject<HTMLElement>;
  exampleRef: React.RefObject<HTMLElement>;
  referenceRef: React.RefObject<HTMLElement>;
  commentsRef: React.RefObject<HTMLElement>;
}

/**
 * IndexPanel 컴포넌트입니다
 */
function IndexPanel({
  bannerRef,
  explanationRef,
  exampleRef,
  referenceRef,
  commentsRef,
}: IIndexPanel) {
  return (
    <S.IndexPanel>
      <S.IndexPanelItemContainer>
        <IndexPanelItem text="배너" contentRef={bannerRef} />
        <IndexPanelItem text="설명" contentRef={explanationRef} />
        <IndexPanelItem text="간단 용례" contentRef={exampleRef} />
        <IndexPanelItem text="참고자료 및 문헌" contentRef={referenceRef} />
        <IndexPanelItem text="댓글" contentRef={commentsRef} />
      </S.IndexPanelItemContainer>
    </S.IndexPanel>
  );
}

export default IndexPanel;
