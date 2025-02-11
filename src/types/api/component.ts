/* component page API 공통 types입니다. */
interface ICommonPageData<T> {
  pageSize: number;
  hasNext: boolean;
  pageNumber: number;
  totalPages: number;
  totalElements: number;
  content: T[];
}

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
}
