import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import user from './slicers/user.slicer';
import availableHotelsFilter from './slicers/availableHotelsFilter.slicer';
import topSectionForm from './slicers/topSectionForm.slicer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { apiSlice } from './slicers/apiSlice';

const rootReducer = combineReducers({
  [user.name]: user.reducer,
  [availableHotelsFilter.name]: availableHotelsFilter.reducer,
  [topSectionForm.name]: topSectionForm.reducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [apiSlice.reducerPath, availableHotelsFilter.name],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: ['persist/PERSIST'],
      },
    });
    middlewares.push(apiSlice.middleware);
    return middlewares;
  },
});

export const persistor = persistStore(store);
