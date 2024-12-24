import * as S from "./Callout.style";

/**
 * Badge 컴포넌트에 필요한 props입니다
 */
interface ICallout extends S.ICalloutStyle {
  titleText: string;
  bodyText: string;
}

/**
 * Badge 컴포넌트입니다
 */
export default function Badge({ $size, titleText, bodyText }: ICallout) {
  return (
    <S.CalloutContainer $size={$size}>
      <S.CalloutTitleContainer>
        <S.CalloutTitleText>{titleText}</S.CalloutTitleText>
        {/* TODO: 추후 버튼 컴포넌트가 만들어지고 나면 button/empty/secondary 넣어줘야 함 */}
      </S.CalloutTitleContainer>
      <S.CalloutBodyText>{bodyText}</S.CalloutBodyText>
    </S.CalloutContainer>
  );
}
