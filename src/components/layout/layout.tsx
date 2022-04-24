import styles from './layout.module.scss';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.layout}>
      {children}
      <Outlet />
    </div>
  );
};

export default Layout;
