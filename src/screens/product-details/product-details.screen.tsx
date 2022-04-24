import { useLocation, Link } from 'react-router-dom';
import { Product } from '../../types/Product';

type LocationState = {
  product: Product | null;
};

const ProductDetails = () => {
  const state = useLocation().state;
  const { product } = state ? (state as LocationState) : { product: null };
  if (!product) {
    return (
      <div>
        Not founded product here
        <Link to='/'>Go to product page</Link>
      </div>
    );
  }
  return <div>productDetails</div>;
};

export default ProductDetails;
