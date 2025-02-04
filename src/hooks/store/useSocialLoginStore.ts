import { create } from "zustand";
import { persist } from "zustand/middleware";
import SocialLoginProvider from "../type/socialLoginProvider.types";

interface ISocialLoginType {
  provider: SocialLoginProvider | null;
  authCode: string;
}

interface ISocialLoginState {
  socialLoginState: ISocialLoginType;
}

interface ISocialLoginActions {
  setProvider: (provider: SocialLoginProvider) => void;
  setAuthCode: (authCode: string) => void;
  logout: () => void;
}

const defaultState: ISocialLoginType = {
  provider: null,
  authCode: "",
};

// eslint-disable-next-line import/prefer-default-export
export const useSocialLoginStore = create<
  ISocialLoginState & ISocialLoginActions
>()(
  persist(
    (set) => ({
      socialLoginState: defaultState,
      setProvider: (provider: SocialLoginProvider) =>
        set((state) => ({
          socialLoginState: { ...state.socialLoginState, provider },
        })),
      setAuthCode: (authCode: string) =>
        set((state) => ({
          socialLoginState: { ...state.socialLoginState, authCode },
        })),
      logout: () => set({ socialLoginState: defaultState }),
    }),
    {
      name: "social-login-storage",
    }
  )
);
