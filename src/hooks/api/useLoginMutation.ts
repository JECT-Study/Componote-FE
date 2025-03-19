import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import { postLogin } from "@/api/login";
import { useTokenStore } from "@/store";

export default function useLoginMutation() {
  const router = useRouter();
  const { setAccessToken, setMemberId } = useTokenStore();

  return useMutation({
    mutationFn: async ({
      socialAccountToken,
    }: {
      socialAccountToken: string;
    }) => {
      const response = await postLogin(socialAccountToken);
      return response.data;
    },
    onSuccess: (data) => {
      setAccessToken(data.accessToken);
      setMemberId(data.memberId);
      router.push("/");
    },
  });
}
