import { IProfileEdit } from "@/types/api/user";
import SignupJobs from "@/types/enum/signupJobs";
import getJobKey from "@/utils/getJobKey";
import { create } from "zustand";

interface IProfileEditState {
  profileInfo: IProfileEdit;
}

interface IProfileEditActions {
  setProfileInfo: (profileInfo: IProfileEdit) => void;
  cancelEdit: () => void;
}

const defaultState: IProfileEdit = {
  nickname: "",
  profileImageObjectKey: "",
  job: getJobKey(SignupJobs.NONE),
};

// eslint-disable-next-line import/prefer-default-export
export const useProfileEditStore = create<
  IProfileEditState & IProfileEditActions
>((set) => ({
  profileInfo: defaultState,
  setProfileInfo: (profileInfo: IProfileEdit) => set({ profileInfo }),
  cancelEdit: () => set({ profileInfo: defaultState }),
}));
