import SignupJobs from "@/types/enum/signupJobs";
import { create } from "zustand";

interface ISignupUserState {
  nickname: string;
  job: SignupJobs;
  socialAccountToken: string;
}

interface ISignupUserActions {
  setNickname: (nickName: string) => void;
  setJob: (job: SignupJobs) => void;
  setSocialAccountToken: (id: string) => void;
  cancelSignup: () => void;
}

const DefaultState: ISignupUserState = {
  nickname: "",
  job: SignupJobs.NONE,
  socialAccountToken: "",
};

// eslint-disable-next-line import/prefer-default-export
export const useSignupUserStore = create<ISignupUserState & ISignupUserActions>(
  (set) => ({
    ...DefaultState,

    setNickname: (nickname: string) => set({ nickname }),
    setJob: (job: SignupJobs) => set({ job }),
    setSocialAccountToken: (socialAccountToken: string) =>
      set({ socialAccountToken }),
    cancelSignup: () => set({ ...DefaultState }),
  })
);
