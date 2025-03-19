import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import { postSignup } from "@/api/signup";
import { ISignupUser } from "@/types/api/user";
import { useTokenStore } from "@/store";

export default function useSignupMutation() {
  const { setAccessToken, setMemberId } = useTokenStore();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async (signupData: ISignupUser) => {
      const response = await postSignup(signupData);
      return response.data;
    },
    onSuccess: (data) => {
      // 회원가입 성공 시 처리
      setAccessToken(data.accessToken);
      setMemberId(data.memberId);
      router.push("/");
    },
  });

  return mutation;
}
