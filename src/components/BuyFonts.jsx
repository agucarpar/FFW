import React, { useEffect } from 'react'
import { getMyFonts } from '../services/myFontsService'


function BuyFonts() {

  function settingMyFontsData(response) {
    if(response.length >= 1) {

    } else {
      
    }
  }


  useEffect(() => {
  getMyFonts().then(response =>{

    settingMyFontsData(response)

  })
}, [])


  return (
    <div>BuyFonts
      <p>
      </p>
    </div>
  )
}

export default BuyFonts