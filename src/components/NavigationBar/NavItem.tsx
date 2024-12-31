import * as S from "./NavItem.style";
import { INavItem } from "./NavigationBar.types";
import InteractionContainer from "../Interaction/Interaction.style";

export default function NavItem({ text, href }: INavItem) {
  return (
    <S.NavItemContainer>
      <S.NavItemBox>
        <S.NavItemAnchor href={href}>
          {text}
          <InteractionContainer $variant="default" $density="subtle" />
        </S.NavItemAnchor>
      </S.NavItemBox>
    </S.NavItemContainer>
  );
}
