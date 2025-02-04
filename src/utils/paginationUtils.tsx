// eslint-disable-next-line import/prefer-default-export
export function getPaginationRange(currentPage: number, totalPages: number) {
  const startPage = Math.max(1, Math.floor((currentPage - 1) / 10) * 10 + 1);
  const endPage = Math.min(totalPages, startPage + 9);

  return { startPage, endPage };
}
