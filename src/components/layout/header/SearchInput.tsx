import React from 'react'
import { IoSearchOutline } from 'react-icons/io5'

type SearchInputProps = React.InputHTMLAttributes<HTMLInputElement>

function SearchInput({ className = '', ...props }: SearchInputProps) {
  return (
    <div className={`relative w-full max-w-sm ${className}`}>
      <IoSearchOutline className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-lg text-text-muted" />
      <input
        type="search"
        placeholder="Search..."
        className="w-full rounded-xl border border-border bg-surface py-2 pl-10 pr-3 text-sm text-text-primary placeholder:text-text-muted outline-none transition duration-200 hover:border-primary-muted focus:border-primary focus:ring-4 focus:ring-primary/10 [&::-webkit-search-cancel-button]:hidden"
        {...props}
      />
    </div>
  )
}

export default SearchInput
