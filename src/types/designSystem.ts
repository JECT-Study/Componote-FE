export interface IDesignSystemPageData {
  hasNext: boolean;
  totalElements: number;
  totalPages: number;
  content: IDesignSystemData[];
  pageNumber: number;
  pageSize: number;
}

export interface IDesignSystemData {
  name: string;
  organizationName: string;
  description: string;
  filters: IDesignSystemFilter[];
  links: [];
}

type DesignSystemFilterType = "PLATFORM" | "TECH" | "CONTENT" | "DEVICE";

export interface IDesignSystemFilter {
  type: DesignSystemFilterType;
  values: string[];
}
