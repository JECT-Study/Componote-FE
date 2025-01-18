import Button from "../Button/Button";
import { ButtonStyle } from "../Button/Button.types";
import * as S from "./Dialog.Basic.style";

interface IDialogBasic {
  titleText?: string;
  bodyText?: string;
  button1Text?: string;
  button2Text?: string;
}
export default function DialogBasic({
  titleText = "다이얼로그 타이틀",
  bodyText = "다이얼로그 본문 내용",
  button1Text = "레이블1",
  button2Text = "레이블2",
}: IDialogBasic) {
  return (
    <S.DialogBasicWrapper>
      <S.DialogBasicTitleContainer>
        <S.DialogBasicTitleText>{titleText}</S.DialogBasicTitleText>
        <S.DialogBasicBodyText>{bodyText}</S.DialogBasicBodyText>
      </S.DialogBasicTitleContainer>
      <S.DialogBasicButtonContainer>
        <Button
          text={button1Text}
          $size="md"
          $buttonStyle={ButtonStyle.OutlinedSecondary}
        />
        <Button
          text={button2Text}
          $size="md"
          $buttonStyle={ButtonStyle.SolidPrimary}
        />
      </S.DialogBasicButtonContainer>
    </S.DialogBasicWrapper>
  );
}
