import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface ITokenState {
  accessToken: string | undefined;
  memberId: number;
}

interface ITokenActions {
  setAccessToken: (accessToken: string) => void;
  setMemberId: (memberId: number) => void;
  logout: () => void;
}

// eslint-disable-next-line import/prefer-default-export
export const useTokenStore = create<ITokenState & ITokenActions>()(
  persist(
    (set) => ({
      accessToken: undefined,
      memberId: 0,
      setAccessToken: (accessToken: string) => set({ accessToken }),
      setMemberId: (memberId: number) => set({ memberId }),
      logout: () => {
        set({ accessToken: "", memberId: 0 });
        localStorage.removeItem("token-storage");
      },
    }),
    {
      name: "token-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
