import { createSlice } from '@reduxjs/toolkit'

export const contactFormSlice = createSlice({
  name: 'contact',
  initialState: {
    id: '',
    firstName: '',
    lastName: '',
    age: '',
    imageLink: '',

    modalForm: {}
  },
  reducers: {
    setForm: (state, action) => {
      state[action.payload.field] = action.payload.text;
    },
    resetForm: (state, action) => {
      state.firstName = '';
      state.lastName = '';
      state.age = '';
      state.imageLink = '';
      state.id = '';
    },
    setModalForm: (state, action) => {
      state.modalForm = action.payload;
    },
  },
})

export const { setForm, resetForm, setModalForm } = contactFormSlice.actions

export default contactFormSlice.reducer