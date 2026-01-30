import {configureStore} from '@reduxjs/toolkit'

// slices
// users
import users from './features/users/users.slice'

// store
export const store = configureStore({
    reducer: {
        users,
    }
})

// Types for TypeScript
// root state
export type RootState = ReturnType<typeof store.getState>
// app dispatch
export type AppDispatch = typeof store.dispatch