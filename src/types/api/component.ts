import ICommonPageData from "@/types/common/pageData";

/* component list API(/components)의 content types입니다. */
export interface IComponentData {
  id: number;
  title: string;
  thumbnailUrl: string;
  type: "INPUT" | "DISPLAY" | "FEEDBACK" | "NAVIGATION";
  introduction: string;
  designReferenceCount: number;
  commentCount: number;
  bookmarkCount: number;
}

/* component list API(/components)에 사용되는 types입니다. */
export type IComponentListPageData = ICommonPageData<IComponentData>;

/* search component list API(/components/search)의 content types입니다. */
export interface ISearchComponentData {
  id: number;
  title: string;
  mixedNames: string[];
}

/* search component list API(/components/search)에 사용되는 types입니다. */
export type ISearchComponentPageData = ICommonPageData<ISearchComponentData>;
