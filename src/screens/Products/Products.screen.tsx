import { Search, Spinner, Grid, Product, Pagination } from '../../components';
import useProducts from './useProducts.hook';

const Products = () => {
  const {
    searchValue,
    currentData,
    currentPage,
    error,
    handleSearch,
    jump,
    loading,
    maxPage,
    next,
    prev,
    products,
  } = useProducts();

  if (loading) {
    return <Spinner isFullScreen />;
  }
  if (error) {
    return <h1>{error.message} </h1>;
  }

  return (
    <>
      <Search onSearch={handleSearch} />
      <Grid>
        {!searchValue ? (
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))
        ) : (
          <>
            {currentData().map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </>
        )}
      </Grid>
      {searchValue && maxPage > 1 && (
        <Pagination
          currentPage={currentPage}
          maxPage={maxPage}
          jumpToPage={jump}
          prevPage={prev}
          nextPage={next}
        />
      )}
    </>
  );
};

export default Products;
