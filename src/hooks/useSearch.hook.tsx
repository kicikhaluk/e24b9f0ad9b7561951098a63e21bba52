/**
 * useSearch hook filters the list of array with type T and returns the filtered list
 * depend on search value and callback function(filterHandler).
 */

import * as React from 'react';

type SearchState<T> = {
  filteredResult: T[];
  handleSearch: (text: string) => void;
  searchValue: string;
};

type SearchParams<T> = {
  list: T[];
  filterHandler: (item: T, text: string) => boolean;
};

const useSearch = <T,>({
  list,
  filterHandler,
}: SearchParams<T>): SearchState<T> => {
  const [searchValue, setSearchValue] = React.useState<string>('');
  const [filteredResult, setFilteredResult] = React.useState(list);

  const handleSearch = (text: string) => {
    setSearchValue(text);
    if (!text) {
      setFilteredResult(list);
      return;
    }
    const filtered = list.filter((item) => filterHandler(item, searchValue));
    setFilteredResult(filtered);
  };

  return {
    filteredResult,
    handleSearch,
    searchValue,
  };
};

export default useSearch;
