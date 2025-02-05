import { getUserInfo } from "@/api/userInfo";
import { IMemberSummary } from "@/types/user";
import { useQuery } from "@tanstack/react-query";

// eslint-disable-next-line import/prefer-default-export
export function useUserInfoQuery(accessToken: string, memberId: number) {
  const { data: userInfoData } = useQuery<IMemberSummary>({
    queryKey: ["memberSummary", memberId],
    queryFn: async () => {
      const response = await getUserInfo(accessToken);
      return response.data;
    },
  });

  return { userInfoData };
}
