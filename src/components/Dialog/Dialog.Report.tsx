"use client";

import ArrowDown from "@/assets/icons/arrow-down.svg";
import Button from "../Button/Button";
import * as S from "./Dialog.Report.style";
import { ButtonStyle } from "../Button/Button.types";

export default function DialogReport() {
  return (
    <S.DialogReportWrapper>
      <S.DialogReportTitleContainer>
        <S.DialogReportTitleText>댓글 신고하기</S.DialogReportTitleText>
        <S.DialogReportBodyText>
          신고 사유가 적합하지 않다고 판단될 경우, 해당 신고는 처리되지 않아요.
        </S.DialogReportBodyText>
      </S.DialogReportTitleContainer>
      <Button
        text="신고 사유를 선택해주세요..."
        $buttonStyle={ButtonStyle.OutlinedSecondary}
        $size="md"
        $isRightIconVisible
        $isLeftIconVisible={false}
        $rightIcon={ArrowDown}
      />
      <S.DialogReportButtonContainer>
        <Button
          text="취소하기"
          $buttonStyle={ButtonStyle.OutlinedSecondary}
          $size="md"
          $isLeftIconVisible={false}
          $isRightIconVisible={false}
        />
        <Button
          text="신고하기"
          $buttonStyle={ButtonStyle.SolidPrimary}
          $size="md"
          $isLeftIconVisible={false}
          $isRightIconVisible={false}
        />
      </S.DialogReportButtonContainer>
    </S.DialogReportWrapper>
  );
}
