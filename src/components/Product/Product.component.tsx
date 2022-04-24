import { useNavigate } from 'react-router-dom';
import { Product as TProduct } from '../../types/Product';
import { Header, Text } from '../../typography';
import Button from '../UI/button/button';
import styles from './product.module.scss';

const Product: React.FC<{ product: TProduct }> = ({ product }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${product.id}`, {
      state: {
        product,
      },
    });
  };

  return (
    <div role='button' className={styles.product} onClick={handleClick}>
      <div className={styles.product__info}>
        <Header as='h3' size='lg' variant='dark'>
          {product.title}
        </Header>
        <Text size='sm'>{product.vendor}</Text>
        <Text weight='semibold' size='lg' variant='primary'>
          $ {product.variants[0].price}
        </Text>
      </div>
      <Button
        title='Explore'
        size='sm'
        variant='primary'
        onClick={handleClick}
      />
    </div>
  );
};

export default Product;
