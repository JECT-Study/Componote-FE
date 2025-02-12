"use client";

import { Avatar, Button } from "@/components";
import rightIcon from "@/assets/icons/chevron-right-line.svg";
import { BANNER_TEXT } from "@/constants/messages";
import { useRouter } from "next/navigation";
import { useUserInfoStore } from "@/hooks/store/useUserInfoStore";
import SignupJobs from "@/types/enum/signupJobs";
import { ButtonStyle } from "../Button/Button.types";
import * as S from "./Banner.profile.style";
import { IProfileBanner } from "./Banner.types";

export default function ProfileBanner({
  $src,
  emailAddress,
  loginInfo,
}: IProfileBanner) {
  const router = useRouter();
  const { userInfo } = useUserInfoStore();

  return (
    <S.BannerContainer>
      <S.ContentContainer>
        <S.AvatarBox>
          <Avatar $badgeVisible={false} $size="2xl" $src={$src} />
        </S.AvatarBox>
        <S.UserInfoContainer>
          <S.UserNameBox>
            <S.UserNameText>{userInfo.nickname}</S.UserNameText>
            <S.UserJobText>{SignupJobs[userInfo.job]}</S.UserJobText>
          </S.UserNameBox>
          <S.UserEmailBox>
            <S.EmailAddressText>{emailAddress}</S.EmailAddressText>
            <Button
              text={BANNER_TEXT.profile.emailButtonText}
              $size="xs"
              $buttonStyle={ButtonStyle.EmptyPrimary}
              $buttonType="button"
              $rightIcon={rightIcon}
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
          onClick={() => router.push("/profile/edit")}
        />
      </S.ContentContainer>
    </S.BannerContainer>
  );
}
