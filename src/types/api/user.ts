import SignupJobs from "../enum/signupJobs";

export interface IMemberSummary {
  isEmailRegistered: boolean;
  nickname: string;
  profileImageUrl: string;
  job: keyof typeof SignupJobs;
}

export interface ISignupUser {
  nickname: string;
  job: keyof typeof SignupJobs;
  socialAccountToken: string;
}

export interface IProfileEdit {
  nickname: string;
  profileImageObjectKey: string;
  job: keyof typeof SignupJobs;
}
