import * as React from 'react';
import cn from 'classnames';
import styles from './text.module.scss';

interface IText
  extends React.HTMLAttributes<HTMLParagraphElement & HTMLSpanElement> {
  as?: 'p' | 'span';
  variant?: 'primary' | 'dark';
  weight?: 'semibold' | 'bold' | 'light' | 'regular';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}
const Text: React.FC<IText> = ({
  children,
  as: Tag = 'p',
  variant = 'dark',
  size = 'md',
  weight = 'regular',
  className,
}) => {
  return (
    <Tag
      className={cn(
        variant && styles[`text__${variant}`],
        weight && styles[`text--${weight}`],
        size && styles[`text--${size}`],
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default Text;
