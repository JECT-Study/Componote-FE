import { Avatar, Button } from "@/components";
import rightIcon from "@/assets/icons/chevron-right-line.svg";
import { BANNER_TEXT } from "@/constants/messages";
import { ButtonStyle } from "../Button/Button.types";
import * as S from "./Banner.profile.style";
import { IProfileBanner } from "./Banner.types";

export default function ProfileBanner({
  $src,
  userName,
  userJob,
  emailAddress,
  loginInfo,
}: IProfileBanner) {
  return (
    <S.BannerContainer>
      <S.ContentContainer>
        <S.AvatarBox>
          <Avatar $badgeVisible={false} $size="2xl" $src={$src} />
        </S.AvatarBox>
        <S.UserInfoContainer>
          <S.UserNameBox>
            <S.UserNameText>{userName}</S.UserNameText>
            <S.UserJobText>{userJob}</S.UserJobText>
          </S.UserNameBox>
          <S.UserEmailBox>
            <S.EmailAddressText>{emailAddress}</S.EmailAddressText>
            <Button
              text={BANNER_TEXT.profile.emailButtonText}
              $size="xs"
              $buttonStyle={ButtonStyle.EmptyPrimary}
              $buttonType="button"
              $rightIcon={rightIcon}
              $isLeftIconVisible={false}
              $isRightIconVisible
            />
          </S.UserEmailBox>
          <S.LoginInfoText>
            {loginInfo} {BANNER_TEXT.profile.loginInfoText}
          </S.LoginInfoText>
        </S.UserInfoContainer>
        <Button
          text={BANNER_TEXT.profile.editButtonText}
          $size="sm"
          $buttonStyle={ButtonStyle.OutlinedSecondary}
          $buttonType="button"
          $isLeftIconVisible={false}
          $isRightIconVisible={false}
        />
      </S.ContentContainer>
    </S.BannerContainer>
  );
}
