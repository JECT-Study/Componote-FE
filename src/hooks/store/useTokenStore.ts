import { create } from "zustand";

interface ITokenState {
  accessToken: string;
}

interface ITokenActions {
  setAccessToken: (accessToken: string) => void;
  logout: () => void;
}

// eslint-disable-next-line import/prefer-default-export
export const useTokenStore = create<ITokenState & ITokenActions>((set) => ({
  accessToken: "",
  setAccessToken: (accessToken: string) => set({ accessToken }),
  logout: () => set({ accessToken: "" }),
}));
