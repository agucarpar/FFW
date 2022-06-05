import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { getMyFonts } from '../services/myFontsService'

import { setBuyFonts } from '../redux/actions/actions'


import SquareContainer from './SquareContainer'


function BuyFonts() {

  const dispatch = useDispatch()
  const buyFonts = useSelector(state => state.fontsReducer.buyFonts)


  useEffect(() => {

    if(buyFonts.length !== 0) return

    getMyFonts().then(response =>{

      const data = response.data.content




      if(data.length >= 1) {
        dispatch(
          setBuyFonts(data)
        )
      } else {
        dispatch(
          setBuyFonts([])
        )
      }

    })

  }, [dispatch, buyFonts])

  if(buyFonts.length >= 1) {

    return (
      <form className="buy-font-container">
        {
          buyFonts.map(font => {
            return (
              <div key={font.id} className="font-wrapper">
                <div className="font-wrapper__font-section">
                  <SquareContainer squareData={font}/>
                </div>
              </div>
            )
          })
        }
      </form>
    )
  } else {
    return (
      <p>
        Sorry, there are not fonts to show.
      </p>
    )
  }


}

export default BuyFonts