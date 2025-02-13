import END_POINT from "@/constants/api";
import axiosInstance from "./interceptor";

// eslint-disable-next-line import/prefer-default-export
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
