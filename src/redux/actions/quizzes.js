import { createSlice } from '@reduxjs/toolkit'

export const user = createSlice({
  name: 'quiz',
  initialState: {
    id: '',
    quizTitle: '',
    quizPicture: '',
    quizSynopsis:'',
    questions:'',
    
  },
  reducers: {
    setQuizz:(state,action)=>{
      state=action.payload  
    }
  },
})

// Action creators are generated for each case reducer function
export const { changeTheme, addBadge, addJobApplied, removeJobApplied } = user.actions

export default user.reducer