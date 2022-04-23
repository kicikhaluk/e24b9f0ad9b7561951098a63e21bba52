import * as React from 'react';

const usePagination = <T,>(data: T[], itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const maxPage = Math.ceil(data.length / itemsPerPage);

  const currentData = (): T[] => {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return data.slice(begin, end);
  };

  const next = (): void => {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
  };

  const prev = (): void => {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  };

  const jump = (page: number): void => {
    const pageNumber = Math.max(1, page);
    setCurrentPage(Math.min(pageNumber, maxPage));
  };

  return React.useMemo(
    () => ({
      next,
      prev,
      jump,
      currentData,
      currentPage,
      maxPage,
    }),
    [next, prev, jump, currentData, currentPage, maxPage]
  );
};

export default usePagination;
