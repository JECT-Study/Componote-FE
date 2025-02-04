import { Button } from "@/components";
import { ButtonStyle } from "../Button/Button.types";
import { IPaginationButton } from "./Pagination.types";

export default function PaginationButton({ onClick, icon }: IPaginationButton) {
  return (
    <Button
      $size="xs"
      $buttonType="iconButton"
      $buttonStyle={ButtonStyle.EmptySecondary}
      $leftIcon={icon}
      onClick={onClick}
    />
  );
}
