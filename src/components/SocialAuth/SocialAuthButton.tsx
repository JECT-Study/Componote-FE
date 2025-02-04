import InteractionContainer from "../Interaction/Interaction.style";
import { InteractionVariant } from "../Interaction/Interaction.types";
import * as S from "./SocialAuthButton.style";
import { SocialAuthIcGithub, SocialAuthIcGoogle } from "./SocialAuthIcon.style";

interface ISocialAuthButton {
  variant: "google" | "github";
  labelText: string;
  onClick?: () => void;
}

export default function SocialAuthButton({
  variant,
  labelText,
  onClick,
}: ISocialAuthButton) {
  return (
    <S.SocialAuthBtn onClick={onClick}>
      {variant === "google" ? <SocialAuthIcGoogle /> : <SocialAuthIcGithub />}
      <S.SocialAuthLabelText>{labelText}</S.SocialAuthLabelText>
      <InteractionContainer
        $variant={InteractionVariant.DEFAULT}
        $density="subtle"
      />
    </S.SocialAuthBtn>
  );
}
