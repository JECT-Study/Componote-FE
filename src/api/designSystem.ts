import END_POINT from "@/constants/api";
import axiosInstance from "./interceptor";

// eslint-disable-next-line import/prefer-default-export
export const getDesignSystem = async (
  page: number,
  size: number,
  keyword?: string,
  types?: string,
  sort?: string
) => {
  const { data } = await axiosInstance.get(END_POINT.searchDesignSystem, {
    params: { page, size, keyword, types, sort },
  });

  return data;
};
