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

  return React.useMemo(
    () => ({
      filteredResult,
      handleSearch,
      searchValue,
    }),
    [filteredResult, handleSearch, searchValue]
  );
};

export default useSearch;
