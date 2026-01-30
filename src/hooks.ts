import {useSelector,useDispatch} from 'react-redux'
import type {TypedUseSelectorHook} from 'react-redux'

// store
import type {RootState,AppDispatch} from './store'

// hooks
// app selector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
// app dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()