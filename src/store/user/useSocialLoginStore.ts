import { create } from "zustand";
import { persist } from "zustand/middleware";
import SocialLoginProvider from "../../types/enum/socialLoginProvider";

interface ISocialLoginState {
  provider: SocialLoginProvider | null;
  authCode: string;
}

interface ISocialLoginActions {
  setProvider: (provider: SocialLoginProvider) => void;
  setAuthCode: (authCode: string) => void;
  logout: () => void;
}

const defaultState: ISocialLoginState = {
  provider: null,
  authCode: "",
};

// eslint-disable-next-line import/prefer-default-export
export const useSocialLoginStore = create<
  ISocialLoginState & ISocialLoginActions
>()(
  persist(
    (set) => ({
      ...defaultState,

      setProvider: (provider: SocialLoginProvider) => set({ provider }),
      setAuthCode: (authCode: string) => set({ authCode }),
      logout: () => set({ ...defaultState }),
    }),
    {
      name: "social-login-storage",
    }
  )
);
