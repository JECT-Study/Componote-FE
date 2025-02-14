import { useRef } from "react";
import { useRouter } from "next/navigation";
import {
  Logo,
  Button,
  NavItem,
  Avatar,
  InputField,
  Combobox,
  EmptyState,
} from "@/components";
import sunIcon from "@/assets/icons/sun-line.svg";
import searchIcon from "@/assets/icons/search-line.svg";
import { NAVBAR_ITEM_TEXT } from "@/constants/messages";
import useSearchStore from "@/store/common/useSearchStore";
import useComboBoxStore from "@/store/common/useComboBoxStore";
import useSearchComponentInfiniteQuery from "@/hooks/api/component/useSearchComponentInfiniteQuery";
import { useObserver } from "@/hooks/api/common/useObserver";
import { ISearchComponentData } from "@/types/api/component";
import { ISearchDesignSystemData } from "@/types/api/designSystem";
import { cleanKorean, extractKorean } from "@/utils/extractKorean";

import { useTokenStore } from "@/store/user/useTokenStore";
import useSearchDesignSystemInfiniteQuery from "@/hooks/api/designSystem/useSearchDesignSystemInfiniteQuery";
import * as S from "./NavigationBar.style";
import { ButtonStyle } from "../Button/Button.types";
import { IInputField, INavigation } from "./NavigationBar.types";
import ContextMenuItem from "../ContextMenu/ContextMenuItem";

export default function NavigationBar({
  placeholderText,
  $isSeparated,
}: INavigation & IInputField) {
  const router = useRouter();
  const accessToken = useTokenStore();
  const { searchValue, setSearchValue } = useSearchStore();
  const { isComboBoxOpen, toggleComboBox } = useComboBoxStore();
  const lastElementRef = useRef<HTMLDivElement | null>(null);

  const {
    data: componentData,
    fetchNextPage: componentFetchNextPage,
    hasNextPage: componentHasNextPage,
    isLoading: isLoadingComponents,
    isError: isErrorComponents,
  } = useSearchComponentInfiniteQuery(searchValue);

  const {
    data: designSystemData,
    fetchNextPage: designSystemFetchNextPage,
    hasNextPage: designSystemHasNextPage,
    isLoading: isLoadingDesignSystems,
    isError: isErrorDesignSystems,
  } = useSearchDesignSystemInfiniteQuery(searchValue);

  const isLoading = isLoadingComponents && isLoadingDesignSystems;
  const isError = isErrorComponents && isErrorDesignSystems;

  useObserver({
    target: lastElementRef,
    onIntersect: ([entry]) => {
      if (entry.isIntersecting && componentHasNextPage) {
        componentFetchNextPage();
      }

      if (entry.isIntersecting && designSystemHasNextPage) {
        designSystemFetchNextPage();
      }
    },
  });

  const handleInputField = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    if (event.target.value.length) toggleComboBox();
    if (!event.target.value.length) toggleComboBox();
  };

  const handleItemClick = (url: string) => {
    toggleComboBox();
    router.push(url);
  };

  return (
    <S.NavigationBarContainer
      $isAuthorized={!!accessToken}
      $isSeparated={$isSeparated}
    >
      <S.NavigationBarSection>
        <S.LeftItemContainer>
          <Logo />
          <S.NavItemContainer>
            <NavItem href="/component" text={NAVBAR_ITEM_TEXT.component} />
            <NavItem
              href="/designsystem"
              text={NAVBAR_ITEM_TEXT.designSystem}
            />
            <NavItem href="/announce" text={NAVBAR_ITEM_TEXT.serviceInfo} />
          </S.NavItemContainer>
        </S.LeftItemContainer>
        <S.RightItemContainer>
          <InputField
            placeholderText={placeholderText}
            $size="sm"
            $icon={searchIcon}
            $labelVisible={false}
            $helperVisible={false}
            value={searchValue}
            onChange={handleInputField}
          />
          {isComboBoxOpen && (
            <Combobox>
              {isLoading && (
                <EmptyState key="loading" text="검색 결과를 로드 중이에요" />
              )}
              {isError && (
                <EmptyState key="error" text="검색 결과를 로드할 수 없어요" />
              )}
              {componentData?.pages.map(
                (page) =>
                  page.content.length >= 1 &&
                  page.content.map((component: ISearchComponentData) => (
                    <div key={component.id} style={{ width: "100%" }}>
                      <ContextMenuItem
                        key={`searched component - ${component.id}`}
                        $size="md"
                        $variant="badge"
                        $feedback="normal"
                        labelText={cleanKorean(component.title)}
                        badgeLabelText="컴포넌트"
                        subLabelText={extractKorean(component.mixedNames).join(
                          ", ",
                        )}
                        onClick={() =>
                          handleItemClick(`/component/${component.id}`)
                        }
                      />
                      <div key={`ref - ${component.id}`} ref={lastElementRef} />
                    </div>
                  )),
              )}
              {designSystemData?.pages.map(
                (page) =>
                  page.content.length >= 1 &&
                  page.content.map((designSystem: ISearchDesignSystemData) => (
                    <div key={designSystem.name} style={{ width: "100%" }}>
                      <ContextMenuItem
                        key={`searched design system - ${designSystem.name}`}
                        $size="md"
                        $variant="badge"
                        $feedback="normal"
                        labelText={designSystem.name}
                        badgeLabelText="디자인 시스템"
                        subLabelText={designSystem.organizationName}
                        onClick={() => handleItemClick(designSystem.url)}
                      />
                      <div
                        key={`ref - ${designSystem.name}`}
                        ref={lastElementRef}
                      />
                    </div>
                  )),
              )}
            </Combobox>
          )}
          {accessToken ? (
            <S.NavItemBox>
              {/* TODO: 추후 콤보 박스로 변경해야함. 현재 임시로 Profile 페이지로 이동 */}
              <S.AvatarBox onClick={() => router.push("/profile")}>
                <Avatar $size="md" $badgeVisible />
              </S.AvatarBox>
            </S.NavItemBox>
          ) : (
            <S.NavItemBox>
              <Button
                text={NAVBAR_ITEM_TEXT.login}
                $size="sm"
                $buttonType="button"
                $buttonStyle={ButtonStyle.SolidPrimary}
                onClick={() => router.push("/login")}
              />
            </S.NavItemBox>
          )}
          <Button
            $size="sm"
            $buttonType="iconButton"
            $leftIcon={sunIcon}
            $buttonStyle={ButtonStyle.OutlinedSecondary}
          />
        </S.RightItemContainer>
      </S.NavigationBarSection>
    </S.NavigationBarContainer>
  );
}
