import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './actions/basicActions' 
export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})