import React, { DetailedHTMLProps } from 'react'
import SearchIcon from '../vectors/SearchIcon';

interface SearchProps extends  DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLDivElement> {
  width?: string;
}
const SearchInput = ({placeholder, value, onChange, width}: SearchProps) => {
  return (
    <div style={{width}} className='search-input'>
      <input placeholder={placeholder} value={value} onChange={onChange} />
      <SearchIcon />
    </div>
  )
}

export default SearchInput