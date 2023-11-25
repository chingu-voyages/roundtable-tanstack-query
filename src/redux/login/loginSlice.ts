import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
     user: ""
}

export const loginSlice = createSlice({
     name: 'login',
     initialState,
     reducers: {
          login: (state, action: PayloadAction<string>) => {
               state.user = action.payload
          },
          logout: (state) => {
               state.user = ""
          }
     }
})

export const { login, logout } = loginSlice.actions
export default loginSlice.reducer
