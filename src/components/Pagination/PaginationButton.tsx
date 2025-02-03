import { Button } from "@/components";
import { ButtonStyle } from "../Button/Button.types";
import { IPaginationButton } from "./Pagination.types";

const PaginationButton = ({ onClick, icon }: IPaginationButton) => (
  <Button
    $size="xs"
    $buttonType="iconButton"
    $buttonStyle={ButtonStyle.EmptySecondary}
    $leftIcon={icon}
    onClick={onClick}
  />
);

export default PaginationButton;
