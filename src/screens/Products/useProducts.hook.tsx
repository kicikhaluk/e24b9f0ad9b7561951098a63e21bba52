import * as React from 'react';
import { API_BASE, HEADER_TOKEN } from '../../constants/env';
import { useFetch, usePagination, useSearch } from '../../hooks';
import { Product } from '../../types/Product';

const useProducts = () => {
  const { data, error, loading } = useFetch<{ products: Product[] }>(
    API_BASE + 'functions/products',
    {
      headers: {
        'X-Access-Token': HEADER_TOKEN!,
      },
    }
  );
  const products = React.useMemo(() => (data ? data.products : []), [data]);
  const { filteredResult, handleSearch, searchValue } = useSearch<Product>({
    list: products,
    filterHandler: (item, text) =>
      item.title.toLowerCase().includes(text.toLowerCase()),
  });
  const { currentData, currentPage, jump, maxPage, next, prev } = usePagination(
    filteredResult,
    10
  );

  return {
    searchValue,
    products,
    error,
    loading,
    handleSearch,
    currentData,
    currentPage,
    jump,
    maxPage,
    next,
    prev,
  };
};

export default useProducts;
