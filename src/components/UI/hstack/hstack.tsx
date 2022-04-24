import * as React from 'react';
import cn from 'classnames';
import styles from './hstack.module.scss';

interface IHStack extends React.HTMLAttributes<HTMLOrSVGElement> {
  as?: keyof JSX.IntrinsicElements;
  spacing?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

const HStack: React.FC<IHStack> = ({
  as: Tag = 'div',
  spacing = 'md',
  children,
  ...props
}) => {
  return (
    <Tag
      className={cn(
        styles.hstack,
        spacing && styles[`hstack__spacing--${spacing}`]
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default HStack;
