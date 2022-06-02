import { createReducer } from '@reduxjs/toolkit'

import {
  setMyFonts
} from '../actions/actions.js'

const initialState = {
  myfonts: [],
  buyFonts: []
}


const fontsReducer = createReducer( {...initialState}, (builder)=> {
  builder
    .addCase(setMyFonts, (state, action)=> {
      console.log('STate',state)
      console.log('actions', action)
    state.myfonts = action.payload
  })
} )

export default fontsReducer