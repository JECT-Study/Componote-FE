import { searchDesignSystem } from "@/api/designSystem";
import { ISearchDesignSystemPageData } from "@/types/api/designSystem";
import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";

interface IPageParam {
  pageParam: number | unknown;
}

const useSearchDesignSystemInfiniteQuery = (keyword: string) => {
  const fetchSearchDesignSystem = async ({ pageParam }: IPageParam) => {
    const page = typeof pageParam === "number" ? pageParam : 0;
    const data = await searchDesignSystem(keyword, page, 10);

    return data;
  };

  return useInfiniteQuery<
    ISearchDesignSystemPageData,
    Error,
    InfiniteData<ISearchDesignSystemPageData>
  >({
    queryKey: ["searchDesignSystem", keyword],
    queryFn: fetchSearchDesignSystem,
    initialPageParam: 0,
    getNextPageParam: (lastPage) =>
      lastPage.hasNext ? lastPage.pageNumber + 1 : undefined,
  });
};

export default useSearchDesignSystemInfiniteQuery;
