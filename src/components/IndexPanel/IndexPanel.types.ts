import * as S from "./IndexPanel.style";

/**
 * IndexPanel/Item 컴포넌트에 필요한 props입니다
 */
export interface IIndexPanelItem extends S.IIndexPanelItemStyle {
  text: string;
  contentRef: React.RefObject<HTMLElement>;
  onSelect: (text: string) => void;
}

/**
 * IndexPanel 컴포넌트에 필요한 props입니다.
 */
export interface IIndexPanel {
  bannerRef: React.RefObject<HTMLElement>;
  explanationRef: React.RefObject<HTMLElement>;
  exampleRef: React.RefObject<HTMLElement>;
  referenceRef: React.RefObject<HTMLElement>;
  // commentsRef: React.RefObject<HTMLElement>;
}
