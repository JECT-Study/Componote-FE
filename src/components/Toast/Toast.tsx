import * as S from "./Toast.style";

export interface IToast {
  toastText: string;
}

export default function Toast({ toastText }: IToast) {
  return (
    <S.ToastContainer>
      <S.ToastLabelText>{toastText}</S.ToastLabelText>
      <S.CheckLineImg />
    </S.ToastContainer>
  );
}
