import { BadgeComponentType, Button } from "@/components";
import boxIcon from "@/assets/icons/box-fill.svg";
import commentIcon from "@/assets/icons/chat-line.svg";
import bookmarkIcon from "@/assets/icons/bookmark-line.svg";

import CardItem from "./CardItem";
import * as S from "./Card.component.style";
import { ButtonStyle } from "../Button/Button.types";
import { IComponentCard, IComponentCardComponent } from "./Card.types";

export default function ComponentCard({
  $src,
  $isDisabled,
  componentName,
  descriptionText,
  $sampleCount,
  $commentCount,
  $bookmarkCount,
}: IComponentCard & IComponentCardComponent) {
  return (
    <S.CardContainer $isDisabled={$isDisabled}>
      <S.ImageBox>
        <S.CardImage $src={$src} />
        <BadgeComponentType $size="xs" $type="input" $style="solid" />
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
    </S.CardContainer>
  );
}
