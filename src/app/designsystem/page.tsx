"use client";

import {
  Layout,
  NavigationBar,
  DefaultBanner,
  Toolbar,
  ButtonList,
  DesignSystemCardContainer,
  Footer,
  DesignSystemCard,
  BadgeLabel,
  Button,
} from "@/components";
import { BadgeLabelFeedback } from "@/components/Badge/Badge.types";
import { ButtonStyle } from "@/components/Button/Button.types";
import { BANNER_TEXT } from "@/constants/messages";

import githubIcon from "@/assets/icons/github-fill.svg";
import figmaIcon from "@/assets/icons/figma-line.svg";
import storybookIcon from "@/assets/icons/storybook-fill.svg";
import zeroheightIcon from "@/assets/icons/zeroheight-fill.svg";

export default function DesignSystem() {
  return (
    <Layout>
      <NavigationBar
        $isAuthorized
        $isSeparated
        placeholderText="컴포넌트나 디자인 시스템을 검색해 보세요..."
      />
      <DefaultBanner
        titleText={BANNER_TEXT.designSystem.titleText}
        descriptionText={BANNER_TEXT.designSystem.descriptionText}
      />
      <Toolbar>
        <ButtonList />
      </Toolbar>
      <DesignSystemCardContainer>
        {Array.from({ length: 20 }).map((value) => (
          <DesignSystemCard
            key={`designSystemcard-${value}`}
            designSystemName="디자인 시스템 명"
            organizationName="회사/단체 명"
            descriptionText="설명 내용"
            $bookmarkCount="999+"
            deviceLabels={
              <>
                <BadgeLabel
                  $variant="labelOnly"
                  text="데스크톱"
                  $feedback={BadgeLabelFeedback.NONE}
                  $style="solid"
                  $size="xs"
                />
                <BadgeLabel
                  $variant="labelOnly"
                  text="모바일"
                  $feedback={BadgeLabelFeedback.NONE}
                  $style="solid"
                  $size="xs"
                />
              </>
            }
            labels={Array.from({ length: 16 }).map((label) => (
              <BadgeLabel
                key={`label-${label}`}
                $variant="labelOnly"
                text="레이블"
                $feedback={BadgeLabelFeedback.NONE}
                $style="transparent"
                $size="xs"
              />
            ))}
            platformButtons={
              <>
                <Button
                  $size="md"
                  $buttonType="iconButton"
                  $leftIcon={githubIcon}
                  $buttonStyle={ButtonStyle.OutlinedSecondary}
                />
                <Button
                  $size="md"
                  $buttonType="iconButton"
                  $leftIcon={figmaIcon}
                  $buttonStyle={ButtonStyle.OutlinedSecondary}
                />
                <Button
                  $size="md"
                  $buttonType="iconButton"
                  $leftIcon={storybookIcon}
                  $buttonStyle={ButtonStyle.OutlinedSecondary}
                />
                <Button
                  $size="md"
                  $buttonType="iconButton"
                  $leftIcon={zeroheightIcon}
                  $buttonStyle={ButtonStyle.OutlinedSecondary}
                />
              </>
            }
          />
        ))}
      </DesignSystemCardContainer>
      <Footer />
    </Layout>
  );
}
