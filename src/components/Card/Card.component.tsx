import { BadgeComponentType, Button } from "@/components";
import boxIcon from "@/assets/icons/box-fill.svg";
import commentIcon from "@/assets/icons/chat-line.svg";
import bookmarkIcon from "@/assets/icons/bookmark-line.svg";

import CardItem from "./CardItem";
import * as S from "./Card.component.style";
import { ButtonStyle } from "../Button/Button.types";
import { IComponentCard, ICardComponent } from "./Card.types";
import { DimmedScreen, DisabledInteraction } from "./CardInteraction";

export default function ComponentCard({
  $src,
  $isDisabled,
  componentName,
  descriptionText,
  $sampleCount,
  $commentCount,
  $bookmarkCount,
}: IComponentCard & ICardComponent) {
  return (
    <S.CardContainer $isDisabled={$isDisabled}>
      <S.ImageBox>
        <S.CardImage $src={$src} />
        <BadgeComponentType $size="xs" $type="input" $style="solid" />
        {$isDisabled && <DimmedScreen />}
      </S.ImageBox>
      <S.DescriptionBox>
        <S.TitleText>{componentName}</S.TitleText>
        <S.BodyText>{descriptionText}</S.BodyText>
      </S.DescriptionBox>
      <S.ContentSection>
        <S.ContentContainer>
          <CardItem $icon={boxIcon} text={$sampleCount} />
          <CardItem $icon={commentIcon} text={$commentCount} />
        </S.ContentContainer>
        <Button
          text={$bookmarkCount}
          $size="sm"
          $buttonType="button"
          $leftIcon={bookmarkIcon}
          $buttonStyle={ButtonStyle.OutlinedSecondary}
        />
      </S.ContentSection>
      {$isDisabled && <DisabledInteraction />}
    </S.CardContainer>
  );
}
