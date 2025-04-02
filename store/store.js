import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';
import userAuth from './Reducers/authReducer';
import carReducer from './Reducers/carReducer';


// Configuration for Redux Persist
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
//   whitelist: ["adminAuth", "companyReducer"], // Reducers to persist
};

// Combine reducers
const rootReducer = combineReducers({
  userAuth,
  carReducer,
});


const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
