import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout, Spinner } from './components';

const Products = React.lazy(() => import('./screens/products/products.screen'));
const ProductDetails = React.lazy(
  () => import('./screens/product-details/product-details.screen')
);

const App = () => {
  return (
    <React.Suspense fallback={<Spinner isFullScreen />}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Products />} />
          <Route path=':productId' element={<ProductDetails />} />
        </Route>
      </Routes>
    </React.Suspense>
  );
};

export default App;
