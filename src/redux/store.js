import { configureStore } from '@reduxjs/toolkit'
import contactFormReducer from './contactFormSlice'

export default configureStore({
  reducer: {
    contact: contactFormReducer,
  },
})