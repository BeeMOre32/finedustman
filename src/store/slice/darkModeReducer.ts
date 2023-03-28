import { createSlice } from '@reduxjs/toolkit';

export const darkModeReducer = createSlice({
  name: 'darkMode',
  initialState: false,
  reducers: {
    toggleDarkMode: (state) => {
      return !state;
    },
  },
});

export const { toggleDarkMode } = darkModeReducer.actions;

export default darkModeReducer.reducer;
