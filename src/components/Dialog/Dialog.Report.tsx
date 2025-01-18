"use client";

import ArrowDown from "@/assets/icons/arrow-down.svg";
import { DIALOG_TEXT } from "@/constants/messages";
import Button from "../Button/Button";
import * as S from "./Dialog.Report.style";
import { ButtonStyle } from "../Button/Button.types";

export default function DialogReport() {
  return (
    <S.DialogReportWrapper>
      <S.DialogReportTitleContainer>
        <S.DialogReportTitleText>
          {DIALOG_TEXT.report.titleText}
        </S.DialogReportTitleText>
        <S.DialogReportBodyText>
          {DIALOG_TEXT.report.bodyText}
        </S.DialogReportBodyText>
      </S.DialogReportTitleContainer>
      <Button
        text={DIALOG_TEXT.report.placeholderText}
        $buttonStyle={ButtonStyle.OutlinedSecondary}
        $size="md"
        $rightIcon={ArrowDown}
        $width="100%"
      />
      <S.DialogReportButtonContainer>
        <Button
          text={DIALOG_TEXT.report.cancelButtonText}
          $buttonStyle={ButtonStyle.OutlinedSecondary}
          $size="md"
        />
        <Button
          text={DIALOG_TEXT.report.submitButtonText}
          $buttonStyle={ButtonStyle.SolidPrimary}
          $size="md"
        />
      </S.DialogReportButtonContainer>
    </S.DialogReportWrapper>
  );
}
