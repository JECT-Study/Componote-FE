import * as S from "./Callout.style";
import { ICallout } from "./Callout.types";

/**
 * Callout 컴포넌트입니다
 */
export default function Callout({ $size, titleText, bodyText }: ICallout) {
  return (
    <S.CalloutContainer $size={$size}>
      <S.CalloutTitleContainer>
        <S.CalloutTitleText $size={$size}>{titleText}</S.CalloutTitleText>
        {/* TODO: 추후 버튼 컴포넌트가 만들어지고 나면 button/empty/secondary 넣어줘야 함 */}
      </S.CalloutTitleContainer>
      {bodyText && (
        <S.CalloutBodyText $size={$size}>{bodyText}</S.CalloutBodyText>
      )}
    </S.CalloutContainer>
  );
}
