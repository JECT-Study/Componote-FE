export interface IAuthCode {
  url: string;
}

export interface ISocialLogin {
  isRegister: false;
  socialAccountToken: string;
}

export interface ILogin {
  accessToken: string;
  memberId: number;
}
