import { postLogin } from "@/api/login";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useTokenStore } from "../../store/user/useTokenStore";

// eslint-disable-next-line import/prefer-default-export
export function useLoginMutation() {
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
