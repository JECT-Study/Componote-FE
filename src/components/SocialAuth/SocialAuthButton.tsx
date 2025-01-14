import InteractionContainer from "../Interaction/Interaction.style";
import { InteractionVariant } from "../Interaction/Interaction.types";
import * as S from "./SocialAuthButton.style";
import { SocialAuthIcGithub, SocialAuthIcGoogle } from "./SocialAuthIcon.style";

interface ISocialAuthButton {
  variant: "google" | "github";
  labelText: string;
}

export default function SocialAuthButton({
  variant,
  labelText,
}: ISocialAuthButton) {
  return (
    <S.SocialAuthBtn>
      {variant === "google" ? <SocialAuthIcGoogle /> : <SocialAuthIcGithub />}
      <S.SocialAuthLabelText>{labelText}</S.SocialAuthLabelText>
      <InteractionContainer
        $variant={InteractionVariant.DEFAULT}
        $density="subtle"
      />
    </S.SocialAuthBtn>
  );
}
