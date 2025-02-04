import { create } from "zustand";

interface ITokenState {
  accessToken: string;
  memberId: number;
}

interface ITokenActions {
  setAccessToken: (accessToken: string) => void;
  setMemberId: (memberId: number) => void;
  logout: () => void;
}

// eslint-disable-next-line import/prefer-default-export
export const useTokenStore = create<ITokenState & ITokenActions>((set) => ({
  accessToken: "",
  memberId: 0,
  setAccessToken: (accessToken: string) => set({ accessToken }),
  setMemberId: (memberId: number) => set({ memberId }),
  logout: () => set({ accessToken: "" }),
}));
