import { useRef, useState } from "react";
import { useObserver } from "@/hooks/api/common/useObserver";
import InteractionContainer from "../Interaction/Interaction.style";
import * as S from "./IndexPanel.style";
import { InteractionVariant } from "../Interaction/Interaction.types";
import { IIndexPanel, IIndexPanelItem } from "./IndexPanel.types";

/**
 * IndexPanel/Item 컴포넌트 입니다. IndexPanel에서만 사용됩니다.
 */
function IndexPanelItem({
  $isSelected = false,
  $isDisabled = false,
  text,
  contentRef,
  onSelect,
}: IIndexPanelItem) {
  // TODO: 목차 중 해당 위치에 닿으면 isSelected true되도록 구현하기
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isSelected, setIsSelected] = useState($isSelected);

  const onContentClick = () => {
    contentRef.current?.scrollIntoView({ behavior: "smooth" });
    onSelect(text);
  };

  return (
    <S.IndexPanelItem
      $isSelected={isSelected}
      $isDisabled={$isDisabled}
      onClick={onContentClick}
    >
      {text}
      <InteractionContainer
        $variant={InteractionVariant.DEFAULT}
        $density="subtle"
      />
    </S.IndexPanelItem>
  );
}

/**
 * IndexPanel 컴포넌트입니다
 */
function IndexPanel({
  bannerRef,
  explanationRef,
  exampleRef,
  referenceRef, // commentsRef,
}: IIndexPanel) {
  const [selectedItem, setSelectedItem] = useState("");

  const handleSelect = (item: string) => setSelectedItem(item);

  const refs = {
    explanation: useRef<HTMLDivElement>(null),
    example: useRef<HTMLDivElement>(null),
    reference: useRef<HTMLDivElement>(null),
  };

  const onIntersect: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setSelectedItem(entry.target.getAttribute("data-section") || "");
      }
    });
  };

  useObserver({ target: refs.explanation, onIntersect });
  useObserver({ target: refs.example, onIntersect });
  useObserver({ target: refs.reference, onIntersect });

  return (
    <S.IndexPanel>
      <S.IndexPanelItemContainer>
        <IndexPanelItem
          text="배너"
          contentRef={bannerRef}
          onSelect={handleSelect}
          $isSelected={selectedItem === "배너"}
        />
        <IndexPanelItem
          text="설명"
          contentRef={explanationRef}
          $isSelected={selectedItem === "설명"}
          onSelect={handleSelect}
        />
        <IndexPanelItem
          text="간단 용례"
          contentRef={exampleRef}
          $isSelected={selectedItem === "간단 용례"}
          onSelect={handleSelect}
        />
        <IndexPanelItem
          text="참고자료 및 문헌"
          contentRef={referenceRef}
          $isSelected={selectedItem === "참고자료 및 문헌"}
          onSelect={handleSelect}
        />
        {/* <IndexPanelItem text="댓글" contentRef={commentsRef} /> */}
      </S.IndexPanelItemContainer>
    </S.IndexPanel>
  );
}

export default IndexPanel;
