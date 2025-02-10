import END_POINT from "@/constants/api";
import axiosInstance from "./interceptor";

// eslint-disable-next-line import/prefer-default-export
export const searchComponent = async (
  page: number,
  size: number,
  types?: string,
  keyword?: string,
  sort?: string,
) => {
  const { data } = await axiosInstance.get(
    `${END_POINT.searchComponent(page, size, types, keyword, sort)}`,
  );

  return data;
};
