import END_POINT from "@/constants/api";
import axiosInstance from "./interceptor";

// eslint-disable-next-line import/prefer-default-export
export const getUserInfo = async (accessToken: string) => {
  const response = await axiosInstance.get(END_POINT.memberSummary, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response;
};
