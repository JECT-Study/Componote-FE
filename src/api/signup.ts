import { ISignupUser } from "@/types/user";
import END_POINT from "@/constants/api";
import axiosInstance from "./interceptor";

// eslint-disable-next-line import/prefer-default-export
export const postSignup = async ({
  nickname,
  job,
  socialAccountId,
}: ISignupUser) => {
  const response = await axiosInstance.post(END_POINT.signup, {
    nickname,
    job,
    socialAccountId,
  });
  return response;
};
