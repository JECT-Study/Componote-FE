import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import { getDesignSystem } from "@/api/designSystem";
import { IDesignSystemPageData } from "@/types/api/designSystem";

interface IPageParam {
  pageParam: number | unknown;
}

// eslint-disable-next-line import/prefer-default-export
export const useDesignSystemInfiniteQuery = (sort: string) => {
  const fetchDesignSystem = async ({
    pageParam,
  }: IPageParam): Promise<IDesignSystemPageData> => {
    const page = typeof pageParam === "number" ? pageParam : 0;
    const data = await getDesignSystem(page, 10, "", "", sort);

    return data;
  };

  return useInfiniteQuery<
    IDesignSystemPageData,
    Error,
    InfiniteData<IDesignSystemPageData>
  >({
    queryKey: ["designSytem", sort],
    queryFn: fetchDesignSystem,
    initialPageParam: 0,
    getNextPageParam: (lastPage) =>
      lastPage.hasNext ? lastPage.pageNumber + 1 : undefined,
  });
};
