import * as React from 'react';
import cn from 'classnames';
import styles from './header.module.scss';

interface IHeader extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  variant?: 'primary' | 'dark' | 'accent';
  weight?: 'semibold' | 'bold' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isUppercase?: boolean;
}
const Header: React.FC<IHeader> = ({
  children,
  as: Tag = 'h3',
  variant = 'primary',
  size = 'md',
  weight = 'semibold',
  isUppercase = false,
  className,
}) => {
  return (
    <Tag
      className={cn(
        variant && styles[`header__${variant}`],
        weight && styles[`header--${weight}`],
        size && styles[`header--${size}`],
        isUppercase && styles['header--uppercase'],
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default Header;
