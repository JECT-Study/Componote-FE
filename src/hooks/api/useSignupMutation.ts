import { postSignup } from "@/api/signup";
import { ISignupUser } from "@/types/user";
import { useMutation } from "@tanstack/react-query";
import { useTokenStore } from "../store/useTokenStore";

// eslint-disable-next-line import/prefer-default-export
export function useSignupMutation() {
  const { setAccessToken, setMemberId } = useTokenStore();

  const mutation = useMutation({
    mutationFn: async (signupData: ISignupUser) => {
      const response = await postSignup(signupData);
      return response.data;
    },
    onSuccess: (data) => {
      // 회원가입 성공 시 처리
      setAccessToken(data.accessToken);
      setMemberId(data.memberId);
    },
  });

  return mutation;
}
