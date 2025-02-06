import END_POINT from "@/constants/api";
import axiosInstance from "./interceptor";

// eslint-disable-next-line import/prefer-default-export
export const componentDetail = async (componentId: number) => {
  const { data } = await axiosInstance.get(
    `${END_POINT.componentDetail(componentId)}`,
  );

  return data;
};
