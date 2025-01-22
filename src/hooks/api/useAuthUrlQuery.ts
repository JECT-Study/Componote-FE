import { getSocialAuthUrl } from "@/api/login";
import { IAuthCode } from "@/types/login";
import { useQuery } from "@tanstack/react-query";

export function useGoogleAuthUrlQuery() {
  const { data: authUrl } = useQuery<IAuthCode>({
    queryKey: ["authUrl", "google"],
    queryFn: async () => {
      const response = await getSocialAuthUrl("google");
      return response.data;
    },
  });
  return { authUrl };
}

export function useGithubAuthUrlQuery() {
  const { data: authUrl } = useQuery<IAuthCode>({
    queryKey: ["authUrl", "github"],
    queryFn: async () => {
      const response = await getSocialAuthUrl("github");
      return response.data;
    },
  });
  return { authUrl };
}

// test를 위한 임시 코드입니다 (추후 Naver 로그인도 추가할 수 있음)
export function useNaverAuthUrlQuery() {
  const { data: authUrl } = useQuery<IAuthCode>({
    queryKey: ["authUrl", "naver"],
    queryFn: async () => {
      const response = await getSocialAuthUrl("naver");
      return response.data;
    },
  });
  return { authUrl };
}
