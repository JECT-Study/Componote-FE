import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import { getComponentList } from "@/api/component";
import { IPageData } from "@/types/api/component";

interface IPageParam {
  pageParam: number | unknown;
}

const useComponentListInfiniteQuery = (
  types: string,
  selectedChips: number[],
  sort: string,
) => {
  const fetchComponentList = async ({ pageParam }: IPageParam) => {
    const page = typeof pageParam === "number" ? pageParam : 0;
    const data = await getComponentList(page, 10, types, sort);

    return data;
  };

  return useInfiniteQuery<IPageData, Error, InfiniteData<IPageData>>({
    queryKey: ["components", types, selectedChips, sort],
    queryFn: fetchComponentList,
    initialPageParam: 0,
    getNextPageParam: (lastPage) =>
      lastPage.hasNext ? lastPage.pageNumber + 1 : undefined,
  });
};

export default useComponentListInfiniteQuery;
