import END_POINT from "@/constants/api";
import axiosInstance from "./interceptor";

export const getComponentList = async (
  page: number,
  size: number,
  types: string,
  sort: string,
) => {
  const { data } = await axiosInstance.get(
    `${END_POINT.componentList(page, size, types, sort)}`,
  );

  return data;
};

export const searchComponent = async (
  page: number,
  size: number,
  keyword: string,
) => {
  const { data } = await axiosInstance.get(
    `${END_POINT.searchComponent(page, size, keyword)}`,
  );

  return data;
};
