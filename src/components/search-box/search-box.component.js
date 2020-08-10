import React from 'react'

import './search-box.style.css'

export const SearchBox = ({ placefolder, handleChange}) => {
  return (
    <input 
      className='search'
      type='search'
      placeholder={placefolder}
      onChange={handleChange} />
  )
}
