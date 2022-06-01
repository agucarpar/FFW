import React from 'react'


function handlerTags(tagsName) {
  console.log('PACO', tagsName)
}


function NavBar() {
  return (
    <div className='navbar'>
      <p className='navbar__sentence-title'>Please, select one font</p>
      <div className='navbar__tags-container'>
        <p onClick={()=>handlerTags('my fonts')}>MY FONTS</p>
        <p onClick={()=>handlerTags('buy fonts')}>BUY FONTS</p>
      </div>
    </div>
  )
}

export default NavBar