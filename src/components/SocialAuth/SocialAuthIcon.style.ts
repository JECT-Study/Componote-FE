import styled from "styled-components";
import DESIGN_SYSTEM from "@/styles/designSystem";
import GoogleIcon from "@/assets/socialAuth/Google.svg";
import GithubIcon from "@/assets/socialAuth/Github.svg";

export const SocialAuthIcGoogle = styled(GoogleIcon)`
  display: flex;
  width: 1.125rem;
  height: 1.125rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  border-radius: ${DESIGN_SYSTEM.radius.none};
  opacity: ${DESIGN_SYSTEM.opacity.visible};
`;

export const SocialAuthIcGithub = styled(GithubIcon)`
  display: flex;
  width: 1.125rem;
  height: 1.125rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  border-radius: ${DESIGN_SYSTEM.radius.none};
  opacity: ${DESIGN_SYSTEM.opacity.visible};
`;
