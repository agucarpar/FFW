import React, { useEffect, useRef } from 'react'
import { getMyFonts } from '../services/myFontsService'
import {
  setMyFonts,
  selectedFont
} from '../redux/actions/actions'

import { useDispatch, useSelector } from 'react-redux'


function BuyFonts() {

  const dispatch = useDispatch()
  const myFonts = useSelector(state => state.fontsReducer.myfonts)


  function handlerInputSelection(id) {
    console.log('id', id)
    dispatch(selectedFont(id))
  }


  useEffect(() => {

    if(myFonts.length !== 0) return

    getMyFonts().then(response =>{

      const data = response.data.content

      if(data.length >= 1) {
        dispatch(
          setMyFonts(data)
        )
      } else {
        dispatch(
          setMyFonts([])
        )
      }

    })

  }, [dispatch, myFonts])

  if(myFonts.length >= 1) {

    return (
      <div className="container">
        {
          myFonts.map(font => {
            return (
              <div key={font.id} className="font-wrapper">
                <div className="font-wrapper__font-section">
                  <div className='font-wrapper__font-section__input-wrapper'>
                    <div className='font-wrapper__font-section__input-wrapper__square'>
                      <div className='font-wrapper__font-section__input-wrapper__square__color'>
                        {font.abbr}
                      </div>
                    </div>
                    <div className='font-wrapper__font-section__input-wrapper__input'>
                      <input type="radio" name="font" id={font.id} onChange={()=>handlerInputSelection(font.id)}/>
                      <label htmlFor={font.id}>{font.label}</label>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }


}

export default BuyFonts