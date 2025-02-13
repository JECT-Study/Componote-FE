import END_POINT from "@/constants/api";
import axiosInstance from "./interceptor";

// eslint-disable-next-line import/prefer-default-export
export const getDesignSystem = async ({
  page,
  size,
  types,
  sort,
}: {
  page: number;
  size: number;
  types?: string;
  sort?: string;
}) => {
  const { data } = await axiosInstance.get(END_POINT.designSystemSummary, {
    params: { page, size, types, sort },
  });

  return data;
};
