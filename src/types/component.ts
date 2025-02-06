export interface IComponentData {
  id: number;
  title: string;
  thumbnailUrl: string;
  type: "input" | "display" | "feedback" | "navigation";
  introduction: string;
  designReferenceCount: number;
  commentCount: number;
  bookmarkCount: number;
}

export interface IPageData {
  pageSize: number;
  hasNext: boolean;
  pageNumber: number;
  totalPages: number;
  totalElements: number;
  content: IComponentData[];
}
