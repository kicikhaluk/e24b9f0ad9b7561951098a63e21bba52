import { ChevronLeft, ChevronRight } from '../../icons';
import cn from 'classnames';
import styles from './pagination.module.scss';
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
    <div>
      <li>
        <button onClick={prevPage}>
          <ChevronLeft />
        </button>
      </li>
      {Array.from(
        {
          length: maxPage,
        },
        (_, k) => k + 1
      ).map((page) => (
        <li key={page} className={cn(currentPage === page && styles.current)}>
          <button onClick={() => jumpToPage(page)}>{page}</button>
        </li>
      ))}

      <li>
        <button onClick={nextPage}>
          <ChevronRight />
        </button>
      </li>
    </div>
  );
};

export default Pagination;
