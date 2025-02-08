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
  EmptyState,
} from "@/components";
import { BadgeLabelFeedback } from "@/components/Badge/Badge.types";
import { ButtonStyle } from "@/components/Button/Button.types";
import { BANNER_TEXT, DESIGNSYSTEM_PAGE_TEXT } from "@/constants/messages";
import { useTokenStore } from "@/hooks/store/useTokenStore";
import { useDesignSystemInfiniteQuery } from "@/hooks/api/designSystem/useDesignSystemInfiniteQuery";
import { IDesignSystemData } from "@/types/api/designSystem";
import { useRef } from "react";
import { useObserver } from "@/hooks/api/common/useObserver";
import { DESIGN_SYSTEM_CHIP_GROUP } from "@/constants/chipGroup";

export default function DesignSystem() {
  const { accessToken } = useTokenStore();

  const lastElementRef = useRef<HTMLDivElement | null>(null);
  const {
    data: designSystemList,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError,
  } = useDesignSystemInfiniteQuery();

  useObserver({
    target: lastElementRef,
    onIntersect: ([entry]) => {
      if (entry.isIntersecting && hasNextPage) fetchNextPage();
    },
  });

  return (
    <Layout>
      <NavigationBar
        $isAuthorized={!!accessToken}
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
        {designSystemList?.pages.map((page) =>
          page.content.map((designSystem: IDesignSystemData) => {
            const deviceLabels = designSystem.filters.filter(
              (value) => value.type === "DEVICE"
            );
            const labels = designSystem.filters.filter(
              (value) => value.type === "TECH" || value.type === "CONTENT"
            );
            const platformLabels = designSystem.filters.filter(
              (value) => value.type === "PLATFORM"
            );

            return (
              <DesignSystemCard
                key={`designSystemcard-${designSystem.name}`}
                designSystemName={designSystem.name}
                organizationName={designSystem.organizationName}
                descriptionText={designSystem.description}
                $bookmarkCount="999+"
                deviceLabels={deviceLabels.map((deviceLabel) =>
                  deviceLabel.values.map((deviceName) => (
                    <BadgeLabel
                      key={`deviceLabel-${deviceName}`}
                      $variant="labelOnly"
                      text={deviceName}
                      $feedback={BadgeLabelFeedback.NONE}
                      $style="solid"
                      $size="xs"
                    />
                  ))
                )}
                labels={labels.map((label) =>
                  label.values.map((labelName) => (
                    <BadgeLabel
                      key={`label-${label}`}
                      $variant="labelOnly"
                      text={labelName}
                      $feedback={BadgeLabelFeedback.NONE}
                      $style="transparent"
                      $size="xs"
                    />
                  ))
                )}
                platformButtons={platformLabels.map((platformLabel) =>
                  platformLabel.values.map((platformName) => (
                    <Button
                      key={`platformButton-${platformName}`}
                      text={platformName}
                      $size="md"
                      $buttonType="iconButton"
                      $leftIcon={
                        DESIGN_SYSTEM_CHIP_GROUP.platform.contents.find(
                          (content) => content.responseName === platformName
                        )?.icon
                      }
                      $buttonStyle={ButtonStyle.OutlinedSecondary}
                    />
                  ))
                )}
              />
            );
          })
        )}
      </DesignSystemCardContainer>
      {isLoading && <EmptyState text={DESIGNSYSTEM_PAGE_TEXT.loading} />}
      {isError && <EmptyState text={DESIGNSYSTEM_PAGE_TEXT.error} />}
      <div ref={lastElementRef} />
      <Footer />
    </Layout>
  );
}
