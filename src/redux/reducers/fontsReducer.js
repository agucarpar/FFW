import { createReducer } from '@reduxjs/toolkit'

import {
  setMyFonts,
  selectedFont
} from '../actions/actions.js'

const initialState = {
  myfonts: [],
  buyFonts: []
}


const fontsReducer = createReducer( {...initialState}, (builder)=> {
  builder
    .addCase(setMyFonts, (state, action)=> {
      state.myfonts = action.payload
    })
    .addCase(selectedFont, (state, action) => {
      state.buyFonts = action.payload
    })
} )

export default fontsReducer