import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SaveLocalState {
  sidoName: string;
  cityName: string;
}

type saveLocalPayload = SaveLocalState;

type SaveLocalStates = SaveLocalState[];

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
  },
});

export const { saveLocal } = saveLocalReducer.actions;

export default saveLocalReducer.reducer;
