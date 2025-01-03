import { IContextMenu } from "./ContextMenu.types";
import * as S from "./Combobox.style";

export default function Combobox({ children }: IContextMenu) {
  return (
    <S.Combobox>
      <S.ItemContainer>
        {children}
        {/* TODO: fade 컴포넌트 구현 후 추가하기 */}
      </S.ItemContainer>
    </S.Combobox>
  );
}
