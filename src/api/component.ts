import END_POINT from "@/constants/api";
import axiosInstance from "./interceptor";

// eslint-disable-next-line import/prefer-default-export
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
