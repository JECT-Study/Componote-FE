import { getPaginationRange } from "@/utils/paginationUtils";
import skipLeftIcon from "@/assets/icons/skip-left-line.svg";
import leftIcon from "@/assets/icons/chevron-left-line.svg";
import skipRightIcon from "@/assets/icons/skip-right-line.svg";
import rightIcon from "@/assets/icons/chevron-right-line.svg";

import SPaginationContainer from "./Pagination.style";
import { IPagination } from "./Pagination.types";
import PaginationItem from "./Pagination.item";
import PaginationButton from "./PaginationButton";

export default function Pagination({
  totalPages,
  currentPage,
  onPageChange,
}: IPagination) {
  const handlePaginationItem = (page: number) => {
    if (page !== currentPage) onPageChange(page);
  };

  const renderPaginationItems = () => {
    const { startPage, endPage } = getPaginationRange(currentPage, totalPages);
    const items = [];

    for (let i = startPage; i <= endPage; i += 1) {
      items.push(
        <PaginationItem
          key={i}
          label={i.toString()}
          onClick={() => handlePaginationItem(i)}
          $isActivated={i === currentPage}
        />,
      );
    }

    return items;
  };

  return (
    <SPaginationContainer>
      <PaginationButton
        icon={skipLeftIcon}
        onClick={() => handlePaginationItem(1)}
      />
      <PaginationButton
        icon={leftIcon}
        onClick={() =>
          handlePaginationItem(currentPage > 1 ? currentPage - 1 : 1)
        }
      />
      {renderPaginationItems()}
      <PaginationButton
        icon={rightIcon}
        onClick={() =>
          handlePaginationItem(
            currentPage < totalPages ? currentPage + 1 : totalPages,
          )
        }
      />
      <PaginationButton
        icon={skipRightIcon}
        onClick={() => handlePaginationItem(totalPages)}
      />
    </SPaginationContainer>
  );
}
