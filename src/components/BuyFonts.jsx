import React, { useEffect } from 'react'
import { getMyFonts } from '../services/myFontsService'
import {
  setMyFonts
} from '../redux/actions/actions'

import { useDispatch } from 'react-redux'


function BuyFonts() {

  const dispatch = useDispatch()


  useEffect(() => {

    getMyFonts().then(response =>{

      const data = response.data.content
      console.log('RESPONSE', data)

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

  }, [dispatch])


  return (
    <div>BuyFonts
      <p>
      </p>
    </div>
  )
}

export default BuyFonts