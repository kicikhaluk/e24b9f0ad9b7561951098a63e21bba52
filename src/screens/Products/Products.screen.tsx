import { Search } from '../../components';
import Pagination from '../../components/pagination/pagination';
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
    return <h1>loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <Search onSearch={handleSearch} />
      {!searchValue ? (
        products.map((product) => (
          <div key={product.id}>
            {product.title} - {product.variants[0]?.price}
          </div>
        ))
      ) : (
        <>
          {currentData().map((product) => (
            <div key={product.id}>
              {product.title} - {product.variants[0]?.price}
            </div>
          ))}
          {maxPage > 1 && (
            <Pagination
              currentPage={currentPage}
              maxPage={maxPage}
              jumpToPage={jump}
              prevPage={prev}
              nextPage={next}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Products;
