import SignupJobs from "@/types/enum/signupJobs";
import { ISignupUser } from "@/types/user";
import { create } from "zustand";

interface ISignupUserState extends ISignupUser {}

interface ISignupUserActions {
  setNickname: (nickName: string) => void;
  setJob: (job: SignupJobs) => void;
  setSocialAccountId: (id: number) => void;
}

// eslint-disable-next-line import/prefer-default-export
export const useSignupUserStore = create<ISignupUserState & ISignupUserActions>(
  (set) => ({
    nickname: "",
    job: SignupJobs.NONE,
    socialAccountId: 0,
    setNickname: (nickname: string) => set({ nickname }),
    setJob: (job: SignupJobs) => set({ job }),
    setSocialAccountId: (socialAccountId: number) => set({ socialAccountId }),
  })
);
