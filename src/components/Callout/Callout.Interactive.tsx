import InteractionContainer from "../Interaction/Interaction.style";
import * as S from "./Callout.Interactive.style";

/**
 * Callout/Interactive 컴포넌트에 필요한 props입니다
 */
interface ICalloutInteractive extends S.ICalloutInteractiveStyle {
  titleText: string;
  bodyText?: string;
}

/**
 * Callout/Interactive 컴포넌트입니다
 */
export default function CalloutInteractive({
  $size,
  $disabled = false,
  titleText,
  bodyText,
}: ICalloutInteractive) {
  return (
    <S.CalloutInteractiveContainer $size={$size} $disabled={$disabled}>
      <S.CalloutInteractiveTitleContainer>
        <S.CalloutInteractiveTitleText $size={$size} $disabled={$disabled}>
          {titleText}
        </S.CalloutInteractiveTitleText>
        <S.CalloutInteractiveIcon $size={$size} $disabled={$disabled} />
      </S.CalloutInteractiveTitleContainer>
      {bodyText && (
        <S.CalloutInteractiveBodyText $size={$size} $disabled={$disabled}>
          {bodyText}
        </S.CalloutInteractiveBodyText>
      )}
      <InteractionContainer $variant="default" $density="subtle" />
    </S.CalloutInteractiveContainer>
  );
}
