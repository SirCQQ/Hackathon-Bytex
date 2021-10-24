import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './actions/basic' 
import userReducer from './actions/user' 
import projectsReducer from './actions/projects' 
export default configureStore({
  reducer: {
    counter: counterReducer,
    user:userReducer,
    projects:projectsReducer
  },
})