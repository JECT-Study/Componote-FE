import { getUserInfo } from "@/api/userInfo";
import { IMemberSummary } from "@/types/api/user";
import { useQuery } from "@tanstack/react-query";

// eslint-disable-next-line import/prefer-default-export
export function useUserInfoQuery(accessToken: string, memberId: number) {
  return useQuery<IMemberSummary>({
    queryKey: ["memberSummary", memberId],
    queryFn: async () => {
      const response = await getUserInfo(accessToken);
      return response.data;
    },
    enabled: !!accessToken && !!memberId, // accessToken과 memberId가 있을 때만 실행
  });
}
