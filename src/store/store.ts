import { combineReducers, configureStore } from '@reduxjs/toolkit';
import modalReducer from './slice/modalReducer';

const rootReducer = combineReducers({
  modal: modalReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default store;
