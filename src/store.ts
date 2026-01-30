import {configureStore} from '@reduxjs/toolkit'

// slices
// users
import users from './features/users/uses.slice'

export const store = configureStore({
    reducer: {
        users,
    }
})

// Types for TypeScript
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch