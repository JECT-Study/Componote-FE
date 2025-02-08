import { IMemberSummary } from "@/types/api/user";
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
};

// eslint-disable-next-line import/prefer-default-export
export const useUserInfoStore = create<IUserInfoState & IUserInfoActions>(
  (set) => ({
    userInfo: defaultState,
    setUserInfo: (userInfo: IMemberSummary) => set({ userInfo }),
    logout: () => set({ userInfo: defaultState }),
  })
);
