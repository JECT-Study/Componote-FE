import { putProfileEdit } from "@/api/userInfo";
import { IProfileEdit } from "@/types/api/user";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

// eslint-disable-next-line import/prefer-default-export
export const useProfileEditMutation = (accessToken: string) => {
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
    onSuccess: () => {
      router.push("/profile");
    },
  });
};
