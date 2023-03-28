import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import modalReducer from './slice/modalReducer';
import saveLocalReducer from './slice/saveLocalReducer';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist/es/constants';
import darkModeReducer from './slice/darkModeReducer';

const rootReducer = combineReducers({
  modal: modalReducer,
  saveLocal: saveLocalReducer,
  darkMode: darkModeReducer,
});

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['saveLocal'],
  blacklist: [],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof rootReducer>;

export const persistor = persistStore(store);
