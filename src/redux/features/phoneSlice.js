import { createSlice } from "@reduxjs/toolkit";

const phoneSlice = createSlice({
  name: "phone",
  initialState: {
    calling: false,
    numbers: "",
  },
  reducers: {
    addDigit: (state, action) => ({
      ...state,
      numbers:
        state.numbers.length < 9
          ? state.numbers + action.payload
          : state.numbers,
    }),
    removeAllDigits: (state) => ({
      ...state,
      numbers: [],
    }),
    call: (state) => [...state, (state.calling = true)],
    hang: (state) => [...state, (state.calling = false)],
  },
});

export const {
  addDigit: addDigitActionCreator,
  removeAllDigits: removeAllDigitsActionCreator,
  call: callActionCreator,
  hang: hangActionCreator,
} = phoneSlice.actions;

export default phoneSlice.reducer;
