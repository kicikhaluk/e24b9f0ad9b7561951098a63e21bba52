import * as React from 'react';
import Input from '../UI/input/input';
import { Search as SearchIcon } from '../../icons';

interface ISearchProps {
  onSearch: (search: string) => void;
}
const Search: React.FC<ISearchProps> = ({ onSearch }) => {
  const [search, setSearch] = React.useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setSearch(text);
    onSearch(text);
  };

  return (
    <Input
      type='text'
      name='product'
      placeholder='Search'
      accessoryLeft={<SearchIcon />}
      value={search}
      onChange={onChange}
    />
  );
};

export default Search;
