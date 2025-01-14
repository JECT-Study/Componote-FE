"use client";

import { Button } from "@/components";
import { ButtonStyle } from "@/components/Button/Button.types";
import rightLine from "@/assets/icons/chevron-right-line.svg";
import * as S from "./HomeBanner.style";

export default function HomeBanner() {
  return (
    <S.HomeBannerWrapper>
      <S.HomeBannerContent>
        <S.HomeBannerModule>
          <S.HomeBannerRegion>
            <S.HomeBannerSection>
              <S.HomeBannerSectionWrap>
                <S.HomeBannerTitleContainer>
                  <S.HomeBannerTitleText>
                    사용자 인터페이스를 위한
                  </S.HomeBannerTitleText>
                </S.HomeBannerTitleContainer>
                <S.HomeBannerDisplayText>
                  컴포넌트 저장소
                </S.HomeBannerDisplayText>
              </S.HomeBannerSectionWrap>
              <S.HomeBannerBodyText>
                컴포노트는 UI를 디자인하고 개발하는 데에 사용되는 컴포넌트에
                대한 정보를 소개합니다. 여러 직군들이 컴포넌트를 어떻게
                디자인하고 개발하는지 경험을 나눌 수 있어요.
              </S.HomeBannerBodyText>
            </S.HomeBannerSection>
            <Button
              text="컴포넌트 목록 보러가기"
              $rightIcon={rightLine}
              $isLeftIconVisible={false}
              $isRightIconVisible
              $size="md"
              $buttonStyle={ButtonStyle.SolidBrand}
            />
          </S.HomeBannerRegion>
          <S.HomeBannerCardList>card</S.HomeBannerCardList>
        </S.HomeBannerModule>
      </S.HomeBannerContent>
    </S.HomeBannerWrapper>
  );
}
