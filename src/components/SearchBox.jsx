import React from 'react'
import './components.css'
function SearchBox() {
  return (
    <div id='searchBox'>
        <input type="text" placeholder='S .user.address.city'/>
        <button className='btn'>Search</button>
    </div>
  )
}

export default SearchBox;