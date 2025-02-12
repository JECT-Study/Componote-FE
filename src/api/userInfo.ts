import END_POINT from "@/constants/api";
import { IProfileEdit } from "@/types/api/user";
import axiosInstance from "./interceptor";

export const getUserInfo = async (accessToken: string) => {
  const response = await axiosInstance.get(END_POINT.memberSummary, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response;
};

export const putProfileEdit = async (
  accessToken: string,
  { nickname, profileImageObjectKey, job }: IProfileEdit,
) => {
  const response = await axiosInstance.put(
    END_POINT.modifyProfile,
    {
      profileImageObjectKey,
      nickname,
      job,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );
  return response;
};
