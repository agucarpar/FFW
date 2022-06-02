import { configureStore } from '@reduxjs/toolkit'
import fontsReducer from '../reducers/fontsReducer'

const store = configureStore({
  reducer: {
    fontsReducer
  }
})

export default store