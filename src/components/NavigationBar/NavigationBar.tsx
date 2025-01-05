import { Logo, Button, NavItem, Avatar, InputField } from "@/components";
import sunIcon from "@/assets/icons/sun-line.svg";
import searchIcon from "@/assets/icons/search-line.svg";
import { NAVBAR_ITEM_TEXT } from "@/constants/messages";
import * as S from "./NavigationBar.style";
import { ButtonStyle } from "../Button/Button.types";
import { IInputField, INavigation } from "./NavigationBar.types";

export default function NavigationBar({
  placeholderText,
  $isSeparated,
  $isAuthorized,
}: INavigation & IInputField) {
  return (
    <S.NavigationBarContainer
      $isAuthorized={$isAuthorized}
      $isSeparated={$isSeparated}
    >
      <S.NavigationBarSection>
        <S.LeftItemContainer>
          <Logo />
          <S.NavItemContainer>
            <NavItem href="/component" text={NAVBAR_ITEM_TEXT.component} />
            <NavItem href="/component" text={NAVBAR_ITEM_TEXT.designSystem} />
            <NavItem href="/component" text={NAVBAR_ITEM_TEXT.serviceInfo} />
          </S.NavItemContainer>
        </S.LeftItemContainer>
        <S.RightItemContainer>
          <InputField
            placeholderText={placeholderText}
            $size="sm"
            $iconVisible
            $icon={searchIcon}
            $labelVisible={false}
            $helperVisible={false}
          />
          {$isAuthorized ? (
            <S.NavItemBox>
              <S.AvatarBox>
                <Avatar $size="md" />
              </S.AvatarBox>
            </S.NavItemBox>
          ) : (
            <S.NavItemBox>
              <Button
                text={NAVBAR_ITEM_TEXT.login}
                $size="sm"
                $buttonStyle={ButtonStyle.SolidPrimary}
                $buttonType="button"
                $isLeftIconVisible={false}
                $isRightIconVisible={false}
              />
            </S.NavItemBox>
          )}
          <Button
            $size="sm"
            $buttonStyle={ButtonStyle.OutlinedSecondary}
            $buttonType="iconButton"
            $isLeftIconVisible
            $isRightIconVisible={false}
            $leftIcon={sunIcon}
          />
        </S.RightItemContainer>
      </S.NavigationBarSection>
    </S.NavigationBarContainer>
  );
}
