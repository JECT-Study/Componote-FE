import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import { searchComponent } from "@/api/component";
import { IPageData } from "@/types/component";

interface IPageParam {
  pageParam: number | unknown;
}

// eslint-disable-next-line import/prefer-default-export
export const useComponentListInfiniteQuery = () => {
  const fetchComponents = async ({ pageParam }: IPageParam) => {
    const page = typeof pageParam === "number" ? pageParam : 0;
    const data = await searchComponent(page, 10);

    return data;
  };

  return useInfiniteQuery<IPageData, Error, InfiniteData<IPageData>>({
    queryKey: ["components"],
    queryFn: fetchComponents,
    initialPageParam: 0,
    getNextPageParam: (lastPage) =>
      lastPage.hasNext ? lastPage.pageNumber + 1 : undefined,
  });
};
