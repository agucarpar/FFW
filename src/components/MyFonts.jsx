import React, { useEffect } from 'react'
// import { useSelector } from 'react-redux'
import { getBuyFonts } from '../services/buyFontsService'


function MyFonts() {

  // Cogiendo el valor desde el state
  // const myFonts = useSelector(state => state.fontsReducer.myfonts)


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