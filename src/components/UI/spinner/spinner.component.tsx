import styles from './spinner.module.scss';

interface ISpinner {
  isFullScreen?: boolean;
}

const Spinner: React.FC<ISpinner> = ({ isFullScreen = false }) => {
  return (
    <div className={isFullScreen ? styles.full : styles.inner}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Spinner;
