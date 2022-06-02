import React, { useEffect } from 'react'
import { getBuyFonts } from '../services/buyFontsService'


function MyFonts() {

  function settingBuyFontsData(response) {
    if(response.length >= 1) {

    } else {

    }
  }

  useEffect(() => {
    getBuyFonts().then(response =>{

      settingBuyFontsData(response)

    })
  }, [])

  return (
    <div>MyFonts</div>
  )
}

export default MyFonts