import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import { putProfileEdit } from "@/api/userInfo";
import { useUserInfoStore, useTokenStore } from "@/store";
import { IProfileEdit } from "@/types/api/user";
import { useUserInfoQuery } from "../useUserInfoQuery";

export default function useProfileEditMutation(accessToken: string) {
  const { setUserInfo } = useUserInfoStore();
  const { memberId } = useTokenStore();
  const { refetch } = useUserInfoQuery(accessToken, memberId);
  const router = useRouter();

  return useMutation({
    mutationFn: async ({
      nickname,
      profileImageObjectKey,
      job,
    }: IProfileEdit) => {
      const response = await putProfileEdit(accessToken, {
        nickname,
        profileImageObjectKey,
        job,
      });
      return response.data;
    },
    onSuccess: async () => {
      const { data: newUserInfo } = await refetch();
      if (newUserInfo) {
        setUserInfo(newUserInfo);
      }
      router.push("/profile");
    },
  });
}
