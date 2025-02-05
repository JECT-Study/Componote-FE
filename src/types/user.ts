import SignupJobs from "./enum/signupJobs";

export interface IMemberSummary {
  isEmailRegistered: boolean;
  nickname: string;
  profileImageUrl: string;
}

export interface ISignupUser {
  nickname: string;
  job: SignupJobs;
  socialAccountId: number;
}
