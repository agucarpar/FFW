import { createReducer } from '@reduxjs/toolkit'

import {
  setBuyFonts,
  selectedFont,
  setMyFontText
} from '../actions/actions.js'

const initialState = {
  buyFonts: [],
  selectedFont: '',
  textMyFont: ''
}


const fontsReducer = createReducer( { ...initialState }, ( builder )=> {
  builder
    .addCase(setBuyFonts, (state, action)=> {
      state.buyFonts = action.payload
    })
    .addCase(selectedFont, (state, action) => {
      state.selectedFont = action.payload
    })
    .addCase(setMyFontText, (state, action) => {
      state.textMyFont = action.payload
    } )
} )

export default fontsReducer