import * as React from 'react';
import cn from 'classnames';
import styles from './button.module.scss';

interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
  title?: string;
  children?: React.ReactNode;
  variant?: 'primary' | 'dark' | 'default';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isFullWidth?: boolean;
  isRound?: boolean;
}

const Button: React.FC<IButton> = ({
  title,
  variant = 'default',
  size = 'md',
  isFullWidth = false,
  isRound = false,
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        styles.button,
        variant && styles[`button__${variant}`],
        size && styles[`button--${size}`],
        isFullWidth && styles[`button--full`],
        isRound && styles[`button--rounded`],
        className
      )}
      {...props}
    >
      {title ? title : children}
    </button>
  );
};

export default Button;
