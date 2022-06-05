import React, { useEffect, useState } from 'react'
import BuyFonts from './BuyFonts'
import MyFonts from './MyFonts'


function Main() {

const stringMyFonts = 'my fonts'
const stringBuyFonts = 'buy fonts'

const [tagToShow, setTagToShow] = useState(stringBuyFonts)
const [componentToShow, setCoponentToShow] = useState(<BuyFonts/>)


function handlerTags(tagsName) {

  setTagToShow(tagsName)

}

function handlerOnFocus(section) {
  speechSynthesis.speak(new SpeechSynthesisUtterance(section))
}


useEffect(() => {

  switch (tagToShow) {
    case stringMyFonts:
      setCoponentToShow(<MyFonts/>)
      break;

    case stringBuyFonts:
      setCoponentToShow(<BuyFonts/>)
      break;

    default:
      setCoponentToShow(<BuyFonts/>)
      break;
  }

}, [tagToShow])




  return (
    <>
      <div className='main'>
        <div className='main__navbar'>
          <p className='main__navbar__sentence-title'>Please, select one font</p>
          <div className='main__navbar__tags-container'>
            <button
              style={{color: tagToShow === stringMyFonts ? 'orange' : 'grey' } }
              onClick={()=>handlerTags(stringMyFonts)}
              onFocus={()=>handlerOnFocus(stringMyFonts)}
            >
              MY FONTS
            </button>
            <button
              style={{color: tagToShow === stringBuyFonts ? 'orange' : 'grey' } }
              onClick={()=>handlerTags(stringBuyFonts)}
              onFocus={()=>handlerOnFocus(stringBuyFonts)}
            >
              BUY FONTS
            </button>
        </div>
        </div>
        <div className='main__body'>
          {componentToShow}
        </div>
      </div>
    </>
  )
}

export default Main