import { IContextMenu } from "./ContextMenu.types";
import * as S from "./Combobox.style";

export default function Combobox({ children }: IContextMenu) {
  return (
    <S.Combobox>
      <S.ItemContainer>{children}</S.ItemContainer>
    </S.Combobox>
  );
}
