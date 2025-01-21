import { Button, Callout } from "@/components";
import rightIcon from "@/assets/icons/chevron-right-line.svg";
import { BANNER_TEXT } from "@/constants/messages";
import * as S from "./Banner.onboarding.style";

import { ButtonStyle } from "../Button/Button.types";

export default function OnboardingBanner() {
  return (
    <S.BannerContainer>
      <S.ContentContainer>
        <S.TopSection>
          <S.MainTitleBox>
            <S.SubTitleText>
              {BANNER_TEXT.onboarding.subTitleText}
            </S.SubTitleText>
            <S.TitleText>{BANNER_TEXT.onboarding.titleText}</S.TitleText>
          </S.MainTitleBox>
          <S.DescriptionText>
            {BANNER_TEXT.onboarding.descriptionText}
          </S.DescriptionText>
          <Button
            text={BANNER_TEXT.onboarding.buttonText}
            $size="md"
            $buttonType="button"
            $buttonStyle={ButtonStyle.SolidBrand}
            $rightIcon={rightIcon}
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
