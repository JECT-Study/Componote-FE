import { putProfileEdit } from "@/api/userInfo";
import { useUserInfoStore } from "@/store/user/useUserInfoStore";
import { IProfileEdit } from "@/types/api/user";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useTokenStore } from "@/store/user/useTokenStore";
import { useUserInfoQuery } from "../useUserInfoQuery";

// eslint-disable-next-line import/prefer-default-export
export const useProfileEditMutation = (accessToken: string) => {
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
};
