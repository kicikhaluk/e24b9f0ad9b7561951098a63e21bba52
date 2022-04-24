import * as React from 'react';
import cn from 'classnames';
import styles from './hstack.module.scss';

interface IHStack extends React.HTMLAttributes<HTMLOrSVGElement> {
  as?: keyof JSX.IntrinsicElements;
  spacing?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  justify?: 'start' | 'end' | 'center' | 'space-between' | 'space-around';
}

const HStack: React.FC<IHStack> = ({
  as: Tag = 'div',
  spacing = 'md',
  justify = 'start',
  children,
  className,
  ...props
}) => {
  return (
    <Tag
      className={cn(
        styles.hstack,
        spacing && styles[`hstack__spacing--${spacing}`],
        justify && styles[`hstack--justify_${justify}`],
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default HStack;
