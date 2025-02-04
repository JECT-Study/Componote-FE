import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ISocialLoginType {
  provider: "google" | "gitHub" | "naver";
  authCode: string;
}

interface ISocialLoginState {
  socialLoginState: ISocialLoginType;
}

interface ISocialLoginActions {
  setProvider: (provider: "google" | "gitHub" | "naver") => void;
  setAuthCode: (authCode: string) => void;
  logout: () => void;
}

const defaultState: ISocialLoginType = { provider: "google", authCode: "" };

// eslint-disable-next-line import/prefer-default-export
export const useSocialLoginStore = create<
  ISocialLoginState & ISocialLoginActions
>()(
  persist(
    (set) => ({
      socialLoginState: defaultState,
      setProvider: (provider: "google" | "gitHub" | "naver") =>
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
