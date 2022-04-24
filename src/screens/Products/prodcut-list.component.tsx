import * as React from 'react';
import { Grid, Product } from '../../components';
import { Product as TProduct } from '../../types/Product';

const ProdcutList: React.FC<{ products: TProduct[] }> = ({ products }) => {
  return (
    <Grid>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </Grid>
  );
};

export default ProdcutList;
