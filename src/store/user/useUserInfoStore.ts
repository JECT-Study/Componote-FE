import { IMemberSummary } from "@/types/api/user";
import SignupJobs from "@/types/enum/signupJobs";
import getJobKey from "@/utils/getJobKey";
import { create } from "zustand";

interface IUserInfoState {
  userInfo: IMemberSummary;
}

interface IUserInfoActions {
  setUserInfo: (userInfo: IMemberSummary) => void;
  logout: () => void;
}

const defaultState: IMemberSummary = {
  isEmailRegistered: false,
  nickname: "",
  profileImageUrl: "",
  job: getJobKey(SignupJobs.NONE),
};

const useUserInfoStore = create<IUserInfoState & IUserInfoActions>((set) => ({
  userInfo: defaultState,
  setUserInfo: (userInfo: IMemberSummary) => set({ userInfo }),
  logout: () => set({ userInfo: defaultState }),
}));

export default useUserInfoStore;
