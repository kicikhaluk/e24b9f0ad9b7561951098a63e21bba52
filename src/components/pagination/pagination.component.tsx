import React from 'react';
import Button from '../UI/button/button.component';
import HStack from '../UI/hstack/hstack.component';
import { ChevronLeft, ChevronRight } from '../../icons';

interface IPaginationProps {
  nextPage: () => void;
  prevPage: () => void;
  jumpToPage: (page: number) => void;
  currentPage: number;
  maxPage: number;
}

const Pagination: React.FC<IPaginationProps> = ({
  nextPage,
  prevPage,
  jumpToPage,
  currentPage,
  maxPage,
}) => {
  React.useEffect(() => {
    return () => {
      /**
       * The pagination UI visible only when user type something in to the search bar.
       * If user clear the search bar or maximum results of the search is less than 10 items,
       * pagination UI unmounts.
       * But the pagination values still remains in the state. Because we are still on the same page(products page).
       * Somehow current page can remains bigger than its initial value.
       * for preventing such a sitiation, Basically reset the current page to 1.
       */
      jumpToPage(1);
    };
  }, []);

  return (
    <HStack spacing='sm' as='ul' justify='end'>
      <li>
        <Button size='md' onClick={prevPage}>
          <ChevronLeft />
        </Button>
      </li>
      {Array.from(
        {
          length: maxPage,
        },
        (_, k) => k + 1
      ).map((page) => (
        <li key={page}>
          <Button
            variant={currentPage === page ? 'primary' : 'dark'}
            onClick={() => jumpToPage(page)}
          >
            {page}
          </Button>
        </li>
      ))}
      <li>
        <Button onClick={nextPage}>
          <ChevronRight />
        </Button>
      </li>
    </HStack>
  );
};

export default Pagination;
