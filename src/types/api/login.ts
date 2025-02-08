export interface IAuthCode {
  url: string;
}

export interface ISocialLogin {
  isRegister: false;
  socialAccountId: number;
}

export interface ILogin {
  accessToken: string;
  memberId: number;
}
