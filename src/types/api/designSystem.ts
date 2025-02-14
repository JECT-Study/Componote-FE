import ICommonPageData from "@/types/common/pageData";
import { DesignSystemFilterType } from "@/types/enum/designSystemFilters";

interface IDesignSystemLinks {
  type: string;
  url: string;
}

export type IDesignSystemPageData = ICommonPageData<IDesignSystemData>;

export interface IDesignSystemFilter {
  values: string[];
  type: DesignSystemFilterType;
}

export interface IDesignSystemData {
  name: string;
  organizationName: string;
  description: string;
  thumbnailUrl: string;
  links: IDesignSystemLinks[];
  filters: IDesignSystemFilter[];
}

export interface ISearchDesignSystemData {
  name: string;
  url: string;
  organizationName: string;
}

export type ISearchDesignSystemPageData =
  ICommonPageData<ISearchDesignSystemData>;
