import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'


import { setMyFontText } from '../redux/actions/actions'
// import { useSelector } from 'react-redux'
import { getBuyFonts } from '../services/buyFontsService'


function MyFonts() {

  const dispatch = useDispatch()


  // Cogiendo el valor desde el state
  const textMyFont = useSelector(state => state.fontsReducer.textMyFont)


  useEffect(() => {
    getBuyFonts().then(response =>{

      const data = response.data.content


      setMyFontText (data)

      if(data.length >= 1) {
        dispatch(
          setMyFontText(data)
        )
      } else {
        dispatch(
          setMyFontText('')
        )
      }

    })
  }, [dispatch, ])

  return (
    <div className='my-fonts-container'>
      <p className='my-fonts-container__text'>
        {textMyFont}
      </p>
    </div>
  )
}

export default MyFonts