import { postLogin } from "@/api/login";
import { useMutation } from "@tanstack/react-query";

// eslint-disable-next-line import/prefer-default-export
export function useLoginMutation() {
  return useMutation({
    mutationFn: async ({ socialAccountId }: { socialAccountId: number }) => {
      const response = await postLogin(socialAccountId);
      return response.data;
    },
  });
}
