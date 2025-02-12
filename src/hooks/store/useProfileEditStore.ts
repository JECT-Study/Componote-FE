import { IMemberSummary, IProfileEdit } from "@/types/api/user";
import SignupJobs from "@/types/enum/signupJobs";
import getJobKey from "@/utils/getJobKey";
import { create } from "zustand";

interface IProfileEditState {
  profileInfo: IProfileEdit;
}

interface IProfileEditActions {
  setProfileInfo: (profileInfo: IProfileEdit) => void;
  cancelEdit: () => void;
  initializeWithUserInfo: (userInfo: IMemberSummary) => void;
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
  initializeWithUserInfo: (userInfo) =>
    set({
      profileInfo: {
        nickname: userInfo.nickname,
        // TODO: 이미지 구현되면 수정 필요
        profileImageObjectKey: userInfo.profileImageUrl,
        job: userInfo.job,
      },
    }),
}));
