import * as S from "./NavItem.style";
import { INavItem } from "./NavigationBar.types";
import InteractionContainer from "../Interaction/Interaction.style";
import { InteractionVariant } from "../Interaction/Interaction.types";

export default function NavItem({ text, href }: INavItem) {
  return (
    <S.NavItemContainer>
      <S.NavItemBox>
        <S.NavItemAnchor href={href}>
          {text}
          <InteractionContainer
            $variant={InteractionVariant.DEFAULT}
            $density="subtle"
          />
        </S.NavItemAnchor>
      </S.NavItemBox>
    </S.NavItemContainer>
  );
}
