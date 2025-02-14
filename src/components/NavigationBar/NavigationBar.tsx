import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Logo,
  Button,
  NavItem,
  Avatar,
  InputField,
  Combobox,
  EmptyState,
  ContextMenu,
} from "@/components";
import sunIcon from "@/assets/icons/sun-line.svg";
import searchIcon from "@/assets/icons/search-line.svg";
import { NAVBAR_ITEM_TEXT } from "@/constants/messages";
import useSearchStore from "@/store/common/useSearchStore";
import useComboBoxStore from "@/store/common/useComboBoxStore";
import useSearchComponentInfiniteQuery from "@/hooks/api/component/useSearchComponentInfiniteQuery";
import { useObserver } from "@/hooks/api/common/useObserver";
import { ISearchComponentData } from "@/types/api/component";
import { cleanKorean, extractKorean } from "@/utils/extractKorean";

import { AVATAR_CONTEXT_MENU_ITEM_LABELS } from "@/constants/contextMenuLabels";
import { useTokenStore } from "@/store/user/useTokenStore";
import * as S from "./NavigationBar.style";
import { ButtonStyle } from "../Button/Button.types";
import { IInputField, INavigation } from "./NavigationBar.types";
import ContextMenuItem from "../ContextMenu/ContextMenuItem";

export default function NavigationBar({
  placeholderText,
  $isSeparated,
}: INavigation & IInputField) {
  const router = useRouter();
  const { searchValue, setSearchValue } = useSearchStore();
  const { isComboBoxOpen, toggleComboBox } = useComboBoxStore();
  // TODO : 임시 로그아웃 구현
  const { logout } = useTokenStore();
  const [isContextMenuOpen, setContextMenuOpen] = useState<boolean>(false);
  const lastElementRef = useRef<HTMLDivElement | null>(null);

  const { data, fetchNextPage, hasNextPage, isLoading, isError } =
    useSearchComponentInfiniteQuery(searchValue);
  const { accessToken } = useTokenStore();

  useObserver({
    target: lastElementRef,
    onIntersect: ([entry]) => {
      if (entry.isIntersecting && hasNextPage) fetchNextPage();
    },
  });

  const handleInputField = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    if (event.target.value.length) toggleComboBox();
    if (!event.target.value.length) toggleComboBox();
  };

  const handleItemClick = (componentId: number) => {
    toggleComboBox();
    router.push(`/component/${componentId}`);
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
                <EmptyState
                  key="loading"
                  text="검색한 컴포넌트를 로드 중이에요"
                />
              )}
              {isError && (
                <EmptyState
                  key="error"
                  text="검색한 컴포넌트를 로드할 수 없어요"
                />
              )}
              {data?.pages.map((page) =>
                page.content.length ? (
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
                        onClick={() => handleItemClick(component.id)}
                      />
                      <div key={`ref - ${component.id}`} ref={lastElementRef} />
                    </div>
                  ))
                ) : (
                  <EmptyState
                    key="noCondition"
                    text="컴포넌트 검색 결과가 없어요"
                  />
                ),
              )}
            </Combobox>
          )}
          {accessToken ? (
            <S.NavItemBox>
              <S.AvatarBox
                role="button"
                onClick={() => setContextMenuOpen(!isContextMenuOpen)}
              >
                <Avatar $size="md" $badgeVisible />
                {isContextMenuOpen && (
                  <ContextMenu>
                    <ContextMenu.Item
                      labelText={AVATAR_CONTEXT_MENU_ITEM_LABELS.myPage}
                      $variant="labelOnly"
                      $size="sm"
                      $feedback="normal"
                      onClick={() => router.push("/profile")}
                    />
                    <ContextMenu.Item
                      labelText={AVATAR_CONTEXT_MENU_ITEM_LABELS.myBookmark}
                      $variant="labelOnly"
                      $size="sm"
                      $feedback="normal"
                      onClick={() => router.push("/mybookmark")}
                    />
                    <ContextMenu.Item
                      labelText={AVATAR_CONTEXT_MENU_ITEM_LABELS.logOut}
                      $variant="labelOnly"
                      $size="sm"
                      $feedback="negative"
                      onClick={() => logout()}
                    />
                  </ContextMenu>
                )}
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
