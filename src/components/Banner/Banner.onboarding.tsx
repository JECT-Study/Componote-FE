import * as S from "./Banner.onboarding.style";

import { BANNER_TEXT } from "@/constants/messages";
import { Button, Callout } from "@/components";
import rightIcon from "@/assets/icons/chevron-right-line.svg";
import { ButtonStyle } from "../Button/Button.types";
import { IOnboardingBanner } from "./Banner.types";

export default function OnboardingBanner({
  subTitleText,
  titleText,
  descriptionText,
}: IOnboardingBanner) {
  return (
    <S.BannerContainer>
      <S.ContentContainer>
        <S.TopSection>
          <S.MainTitleBox>
            <S.SubTitleText>{subTitleText}</S.SubTitleText>
            <S.TitleText>{titleText}</S.TitleText>
          </S.MainTitleBox>
          <S.DescriptionText>{descriptionText}</S.DescriptionText>
          <Button
            $isLeftIconVisible={false}
            $isRightIconVisible
            $rightIcon={rightIcon}
            $size="md"
            text={BANNER_TEXT.onboarding.buttonText}
            $buttonType="button"
            $buttonStyle={ButtonStyle.SolidBrand}
          />
        </S.TopSection>
        <S.BottomSection>
          <Callout
            $size="md"
            titleText={BANNER_TEXT.onboarding.calloutTitleText1}
            bodyText={BANNER_TEXT.onboarding.calloutBodyText1}
          />
          <Callout
            $size="md"
            titleText={BANNER_TEXT.onboarding.calloutTitleText2}
            bodyText={BANNER_TEXT.onboarding.calloutBodyText2}
          />
        </S.BottomSection>
      </S.ContentContainer>
    </S.BannerContainer>
  );
}