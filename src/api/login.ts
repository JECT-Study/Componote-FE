import END_POINT from "@/constants/api";
import axiosInstance from "./interceptor";

export const getSocialAuthUrl = async (provider: string) => {
  const response = await axiosInstance.get(
    END_POINT.authorizationUrl(provider)
  );
  return response;
};

export const getSocialLogin = async (provider: string, code: string) => {
  const response = await axiosInstance.get(
    END_POINT.socialLogin(provider, code)
  );
  return response;
};

export const postLogin = async (socialAccountId: number) => {
  const response = await axiosInstance.post(END_POINT.login, {
    data: socialAccountId,
  });
  return response;
};
