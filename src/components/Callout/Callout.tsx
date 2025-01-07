import { Button } from "@/components";
import rightIcon from "@/assets/icons/chevron-right-line.svg";
import { ButtonStyle } from "../Button/Button.types";
import * as S from "./Callout.style";
import { ICallout } from "./Callout.types";

/**
 * Callout 컴포넌트입니다
 */
export default function Callout({
  $size,
  titleText,
  bodyText,
  buttonLabelText,
}: ICallout) {
  return (
    <S.CalloutContainer $size={$size}>
      <S.CalloutTitleContainer>
        <S.CalloutTitleText $size={$size}>{titleText}</S.CalloutTitleText>
        <Button
          $isLeftIconVisible
          $isRightIconVisible={false}
          $leftIcon={rightIcon}
          text={buttonLabelText}
          $size="sm"
          $buttonType="iconButton"
          $buttonStyle={ButtonStyle.EmptySecondary}
        />
      </S.CalloutTitleContainer>
      {bodyText && (
        <S.CalloutBodyText $size={$size}>{bodyText}</S.CalloutBodyText>
      )}
    </S.CalloutContainer>
  );
}
