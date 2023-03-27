import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FinDustDetail } from '../../interface/apiInterface';

type ModalPayload = {
  data: FinDustDetail;
};
type ModalState = {
  isOpen: boolean;
  data: FinDustDetail | null;
};
const initialState: ModalState = {
  isOpen: false,
  data: null,
};

export const modalReducer = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state: ModalState, action: PayloadAction<ModalPayload>) => {
      state = { isOpen: true, data: action.payload.data };
    },
    closeModal: (state: ModalState) => {
      state = {
        isOpen: false,
        data: null,
      };
    },
  },
});

export const { openModal, closeModal } = modalReducer.actions;

export default modalReducer.reducer;
