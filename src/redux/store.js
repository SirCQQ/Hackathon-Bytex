import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './actions/basic' 
import userReducer from './actions/user' 
export default configureStore({
  reducer: {
    counter: counterReducer,
    user:userReducer
  },
})