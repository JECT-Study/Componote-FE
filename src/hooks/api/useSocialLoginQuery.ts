import { getSocialLogin } from "@/api/login";
import { ISocialLogin } from "@/types/login";
import { useQuery } from "@tanstack/react-query";

// eslint-disable-next-line import/prefer-default-export
export function useSocialLoginQuery(provider: string, code: string | null) {
  const { data: socialLoginData } = useQuery<ISocialLogin>({
    queryKey: ["socialLogin", provider, code],
    queryFn: async () => {
      const response = await getSocialLogin(provider, code);
      return response.data;
    },
    enabled: !!code, // code가 존재할 때만 실행
  });

  return { socialLoginData };
}
