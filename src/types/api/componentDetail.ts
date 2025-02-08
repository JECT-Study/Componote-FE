export interface IDescription {
  order: number;
  content: string;
}

export interface IComponentDetail {
  title: string;
  blocks: {
    DESCRIPTION: IDescription[];
    USE_CASE: IDescription[];
  };
  mixedNames: string[];
  introduction: string;
  commentCount: number;
  bookmarkCount: number;
  designReferenceCount: number;
  thumbnailUrl: string;
  isBookmarked: boolean;
}
