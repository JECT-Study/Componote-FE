import { Button } from "@/components";
import rightIcon from "@/assets/icons/chevron-right-line.svg";
import { ButtonStyle } from "../Button/Button.types";
import * as S from "./Callout.style";
import { ICallout } from "./Callout.types";

/**
 * Callout 컴포넌트입니다
 */
export default function Callout({
  onClick,
  $size,
  titleText,
  bodyText,
  buttonLabelText,
  highlightedText,
}: ICallout) {
  return (
    <S.CalloutContainer $size={$size} onClick={onClick}>
      <S.CalloutTitleContainer>
        <S.CalloutTitleText $size={$size}>
          <S.HighlightedText>{highlightedText}</S.HighlightedText>
          {titleText}
        </S.CalloutTitleText>
        <Button
          text={buttonLabelText}
          $size="sm"
          $buttonType="button"
          $rightIcon={rightIcon}
          $buttonStyle={ButtonStyle.EmptySecondary}
        />
      </S.CalloutTitleContainer>
      {bodyText && (
        <S.CalloutBodyText $size={$size}>{bodyText}</S.CalloutBodyText>
      )}
    </S.CalloutContainer>
  );
}
