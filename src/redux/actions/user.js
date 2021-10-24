import { createSlice } from '@reduxjs/toolkit'

export const user = createSlice({
  name: 'user',
  initialState: {
    theme: "slytherin",
    name: "Cristi",
    badges: [],
    appliedJobs: [],
    userId: '123',
    coins: 0,
    purchasedThemes: []
  },
  reducers: {
    buyTheme: (state, action) => {
      state.coins -= action.payload.theme_to_purchase.price
      state.purchasedThemes.push(action.payload.theme_to_purchase)
      state.theme = action.payload.theme_to_purchase.theme_name
    },
    addMoney: (state, action) => {
      state.coins += action.payload
    },
    changeTheme: (state, action) => {
      state.theme = action.payload
    },
    addBadge: (state, action) => {
      let indexOf = state.badges.indexOf(action.payload)
      console.log(indexOf)
      if (indexOf === -1) {
        state.badges.push(action.payload)
      }
    },
    addJobApplied: (state, action) => {
      state.appliedJobs.push(action.payload)
    },
    removeJobApplied: (state, action) => {
      let indexOfJob = state.appliedJobs.findIndex(e => {
        return e.id === action.payload
      })
      console.log(indexOfJob)
      if (indexOfJob !== -1) {
        state.appliedJobs.splice(indexOfJob, 1)
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { changeTheme, addBadge, addJobApplied, removeJobApplied, buyTheme,
  addMoney } = user.actions

export default user.reducer