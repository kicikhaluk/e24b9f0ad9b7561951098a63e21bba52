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
