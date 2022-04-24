import { Search, Spinner, Pagination } from '../../components';
import ProdcutList from './prodcut-list.component';
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
      <ProdcutList products={!searchValue ? products : currentData()} />
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
