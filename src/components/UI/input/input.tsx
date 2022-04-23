import * as React from 'react';
import cn from 'classnames';
import styles from './input.module.scss';
import { renderComponent } from '../../../utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  accessoryLeft?: React.ReactNode | (() => JSX.Element);
  accessoryRight?: React.ReactNode | (() => JSX.Element);
}

const Input: React.FC<InputProps> = ({
  accessoryLeft,
  accessoryRight,
  ...props
}) => {
  return (
    <div className={cn(styles.outer_wrapper)}>
      {accessoryLeft && (
        <div className={cn(styles.accessory, styles['accessory--left'])}>
          {renderComponent(accessoryLeft)}
        </div>
      )}
      <div className={cn(styles.input_wrapper)}>
        <input className={cn(styles.input)} {...props} />
      </div>
      {accessoryRight && (
        <div className={cn(styles.accessory, styles['accessory--right'])}>
          {renderComponent(accessoryRight)}
        </div>
      )}
    </div>
  );
};

export default Input;
