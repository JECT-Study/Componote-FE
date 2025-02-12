export default interface ICommonPageData<T> {
  pageSize: number;
  hasNext: boolean;
  pageNumber: number;
  totalPages: number;
  totalElements: number;
  content: T[];
}
