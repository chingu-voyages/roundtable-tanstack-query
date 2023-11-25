import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './apiSlice/slice'
import loginSliceReducer from './login/loginSlice'

export const store = configureStore({
     reducer: {
          login: loginSliceReducer,
          [apiSlice.reducerPath]: apiSlice.reducer,
     },
     middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware().concat(apiSlice.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
