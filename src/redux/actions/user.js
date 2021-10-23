import { createSlice } from '@reduxjs/toolkit'

export const user = createSlice({
  name: 'user',
  initialState: {
    theme:"ravenclaw",
    name:"",
    badges:[],
    appliedJobs:[],

  },
  reducers: {
    changeTheme: (state,action)=>{
      state.theme= action.payload
    },
    addBadge:(state,action)=>{
      state.badges.push(action.payload)
    },
    addJobApplied:(state,action)=>{
      state.appliedJobs.push(action.payload)
    },
    removeJobApplied:(state,action)=>{
      let indexOfJob=state.appliedJobs.indexOf(action.payload)
      state.appliedJobs.splice(indexOfJob,1);
    }
  },
})

// Action creators are generated for each case reducer function
export const { changeTheme,addBadge,addJobApplied,removeJobApplied} = user.actions

export default user.reducer