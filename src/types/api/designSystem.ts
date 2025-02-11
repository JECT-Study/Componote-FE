import { DesignSystemFilterType } from "../enum/designSystemFilters";

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
  thumbnailUrl: string;
  links: [];
}

export interface IDesignSystemFilter {
  type: DesignSystemFilterType;
  values: string[];
}
