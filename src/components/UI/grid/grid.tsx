import cn from 'classnames';
import styles from './grid.module.scss';

interface IGrid extends React.HTMLAttributes<HTMLOrSVGElement> {
  as?: keyof JSX.IntrinsicElements;
}

const Grid: React.FC<IGrid> = ({ as: Tag = 'div', children }) => {
  return <Tag className={cn(styles.grid)}>{children}</Tag>;
};

export default Grid;
