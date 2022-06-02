import React, { useEffect } from 'react'
import { getMyFonts } from '../services/myFontsService'


function BuyFonts() {

useEffect(() => {
  getMyFonts()
}, [])


  return (
    <div>BuyFonts
      <p>
      </p>
    </div>
  )
}

export default BuyFonts