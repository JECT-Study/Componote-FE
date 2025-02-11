import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import { searchComponent } from "@/api/component";
import { ISearchComponentPageData } from "@/types/api/component";

interface IPageParam {
  pageParam: number | unknown;
}

const useSearchComponentInfiniteQuery = (keyword: string) => {
  const fetchSearchComponent = async ({ pageParam }: IPageParam) => {
    const page = typeof pageParam === "number" ? pageParam : 0;
    const data = await searchComponent(page, 10, keyword);

    return data;
  };

  return useInfiniteQuery<
    ISearchComponentPageData,
    Error,
    InfiniteData<ISearchComponentPageData>
  >({
    queryKey: ["searchComponents", keyword],
    queryFn: fetchSearchComponent,
    initialPageParam: 0,
    getNextPageParam: (lastPage) =>
      lastPage.hasNext ? lastPage.pageNumber + 1 : undefined,
  });
};

export default useSearchComponentInfiniteQuery;
