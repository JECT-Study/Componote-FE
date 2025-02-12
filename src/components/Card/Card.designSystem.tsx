import { Divider, Button } from "@/components";
import bookmarkIcon from "@/assets/icons/bookmark-line.svg";
import * as S from "./Card.designSystem.style";
import { ButtonStyle } from "../Button/Button.types";
import { ICardComponent, IDesignSystemCard } from "./Card.types";
import { DisabledInteraction, DimmedScreen } from "./CardInteraction";

export default function CardDesignSystem({
  $src,
  $isDisabled,
  designSystemName,
  organizationName,
  descriptionText,
  deviceLabels,
  labels,
  platformButtons,
  $bookmarkCount,
  onClick,
}: IDesignSystemCard & ICardComponent) {
  return (
    <S.CardContainer $isDisabled={$isDisabled}>
      <S.TopSection onClick={onClick}>
        <S.ImageBox>
          {$isDisabled && <DimmedScreen />}
          <S.ComponentImage $src={$src} />
        </S.ImageBox>
        <S.ContentContainer>
          <S.ContentBox>
            <S.TitleText>{designSystemName}</S.TitleText>
            <S.LabelText>{organizationName}</S.LabelText>
          </S.ContentBox>
          <S.BodyText>{descriptionText}</S.BodyText>
        </S.ContentContainer>
        <S.DeviceLabelBox>{deviceLabels}</S.DeviceLabelBox>
      </S.TopSection>
      <S.LabelBox>{labels}</S.LabelBox>
      <Divider $stroke="normal" $layout="horizontal" />
      <S.BottomSection>
        <S.PlatformBox>{platformButtons}</S.PlatformBox>
        <Button
          text={$bookmarkCount}
          $size="sm"
          $buttonType="button"
          $leftIcon={bookmarkIcon}
          $buttonStyle={ButtonStyle.OutlinedSecondary}
        />
      </S.BottomSection>
      {$isDisabled && <DisabledInteraction />}
    </S.CardContainer>
  );
}
