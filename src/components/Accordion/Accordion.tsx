import { useState, useCallback } from "react";
import upIcon from "@/assets/icons/chevron-up-line.svg";
import downIcon from "@/assets/icons/chevron-down-line.svg";

import * as S from "./Accordion.style";
import { IAccordion } from "./Accordion.types";

export default function Accordion({
  $size,
  titleText,
  dateText,
  bodyText,
  children,
}: IAccordion) {
  const [isExpended, setIsExpended] = useState(false);

  const handleMoreIcon = useCallback(() => {
    setIsExpended((prev) => !prev);
  }, []);

  const renderBody = () => {
    if (!isExpended) return null;

    if ($size === "md") {
      return (
        <S.BodyContainer>
          <S.BodyText>{bodyText}</S.BodyText>
        </S.BodyContainer>
      );
    }

    return children;
  };

  return (
    <S.AccordionContainer>
      <S.TitleContainer $size={$size}>
        <S.TitleBox>
          <S.TitleText $size={$size}>{titleText}</S.TitleText>
          {$size === "md" && <S.DateText>{dateText}</S.DateText>}
          <S.MoreIcon
            $size={$size}
            onClick={handleMoreIcon}
            IconComponent={isExpended ? upIcon : downIcon}
          />
        </S.TitleBox>
      </S.TitleContainer>
      {renderBody()}
    </S.AccordionContainer>
  );
}
