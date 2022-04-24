import * as React from 'react';
import cn from 'classnames';
import styles from './aspect-ratio.module.scss';

interface IAspectRatio extends React.HTMLAttributes<HTMLImageElement> {
  ratio?: '16-9' | '4-3' | '4-1' | '8-3' | '1-1';
  src: string;
  alt: string;
}
const AspectRatio: React.FC<IAspectRatio> = ({
  src,
  alt,
  ratio = '1-1',
  ...props
}) => {
  return (
    <div className={cn(styles.aspect_ratio, styles[`aspect_ratio--${ratio}`])}>
      <img
        className={styles.aspect_ratio__img}
        src={src}
        alt={alt}
        {...props}
      />
    </div>
  );
};

export default AspectRatio;
