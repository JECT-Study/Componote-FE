import END_POINT from "@/constants/api";
import axiosInstance from "./interceptor";

export const getDesignSystem = async ({
  page,
  size,
  filters,
  sort,
}: {
  page: number;
  size: number;
  filters?: string;
  sort?: string;
}) => {
  const { data } = await axiosInstance.get(END_POINT.designSystemSummary, {
    params: { page, size, filters, sort },
  });

  return data;
};

export const searchDesignSystem = async (
  keyword: string,
  page: number,
  size: number,
) => {
  const { data } = await axiosInstance.get(
    END_POINT.searchDesignSystem(keyword, page, size),
  );

  return data;
};
