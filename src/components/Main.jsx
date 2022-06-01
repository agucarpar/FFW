import React, { useEffect, useState } from 'react'
import BuyFonts from './BuyFonts'
import MyFonts from './MyFonts'


function Main() {

const stringMyFonts = 'my fonts'
const stringBuyFonts = 'buy fonts'

const [tagToShow, setTagToShow] = useState(stringMyFonts)

let componentToShow =  <BuyFonts/>

function handlerTags(tagsName) {
  setTagToShow(tagsName)
}


useEffect( ()=> {
  switch (tagToShow) {
    case stringMyFonts:
      componentToShow = <MyFonts/>
      break;

    case stringBuyFonts:
      componentToShow = <BuyFonts/>
      break;
  
    default:
      break;
  }
}, [tagToShow] )





  return (
    <>
      <div className='main'>
        <div className='main__navbar'>
          <p className='main__navbar__sentence-title'>Please, select one font</p>
          <div className='main__navbar__tags-container'>
            <p onClick={()=>handlerTags(stringMyFonts)}>MY FONTS</p>
            <p onClick={()=>handlerTags(stringBuyFonts)}>BUY FONTS</p>
        </div>
        </div>
        <div className='main__body'>
        {/* { tagToShow === stringMyFonts ? <MyFonts />: undefined } */}
        { tagToShow === stringBuyFonts ? <BuyFonts /> : <MyFonts /> }
        </div>
      </div>
    </>
  )
}

export default Main