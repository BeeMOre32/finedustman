import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SaveLocalState {
  sidoName: string;
  cityName: string;
}

type saveLocalPayload = SaveLocalState;

export type SaveLocalStates = SaveLocalState[];

const initialState: SaveLocalStates = [
  {
    sidoName: '',
    cityName: '',
  },
];

export const saveLocalReducer = createSlice({
  name: 'saveLocal',
  initialState,
  reducers: {
    saveLocal: (
      state: SaveLocalStates,
      action: PayloadAction<saveLocalPayload>
    ) => {
      return (state = [...state, action.payload]);
    },
    deleteLocal: (state: SaveLocalStates, action: PayloadAction<number>) => {
      return (state = state.filter((_, index) => index !== action.payload));
    },
  },
});

export const { saveLocal, deleteLocal } = saveLocalReducer.actions;

export default saveLocalReducer.reducer;
