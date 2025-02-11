import END_POINT from "@/constants/api";
import axiosInstance from "./interceptor";

export const getSocialAuthUrl = async (provider: string) => {
  const response = await axiosInstance.get(
    END_POINT.authorizationUrl(provider)
  );
  return response;
};

export const getSocialLogin = async (provider: string, code: string | null) => {
  const response = await axiosInstance.get(END_POINT.socialLogin(provider), {
    params: { code },
  });
  return response;
};

export const postLogin = async (socialAccountToken: string) => {
  const response = await axiosInstance.post(END_POINT.login, {
    socialAccountToken,
  });
  return response;
};
