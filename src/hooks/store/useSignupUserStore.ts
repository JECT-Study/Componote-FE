import SignupJobs from "@/types/enum/signupJobs";
import { create } from "zustand";

interface ISignupUserState {
  nickname: string;
  job: SignupJobs;
  socialAccountId: number;
}

interface ISignupUserActions {
  setNickname: (nickName: string) => void;
  setJob: (job: SignupJobs) => void;
  setSocialAccountId: (id: number) => void;
  cancelSignup: () => void;
}

const DefaultState = {
  nickname: "",
  job: SignupJobs.NONE,
  socialAccountId: 0,
};

// eslint-disable-next-line import/prefer-default-export
export const useSignupUserStore = create<ISignupUserState & ISignupUserActions>(
  (set) => ({
    ...DefaultState,

    setNickname: (nickname: string) => set({ nickname }),
    setJob: (job: SignupJobs) => set({ job }),
    setSocialAccountId: (socialAccountId: number) => set({ socialAccountId }),
    cancelSignup: () => set({ ...DefaultState }),
  })
);
