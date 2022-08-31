import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  createMigrate,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storageSession from 'redux-persist/lib/storage/session'
import { encryptTransform } from 'redux-persist-transform-encrypt'

import { authAPI, authSlice } from './auth'
import { orderAPI } from './order'
import { merchantAPI } from './merchant'

const reducers = {
  [authAPI.reducerPath]: authAPI.reducer,
  [authSlice.name]: authSlice.reducer,
  [orderAPI.reducerPath]: orderAPI.reducer,
  [merchantAPI.reducerPath]: merchantAPI.reducer,
}

const rootReducer = combineReducers({
  ...reducers,
})

const encryptor = encryptTransform({
  secretKey: 'amanat-secret-key',
})

const migrations = {
  1: state => {
    return {
      ...state,
    }
  },
}

const persistConfig = {
  key: 'admin',
  version: 1,
  storage: storageSession,
  migrate: createMigrate(migrations, { debug: false }),
  whitelist: [authSlice.name],
  transforms: [encryptor],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([authAPI.middleware, orderAPI.middleware, merchantAPI.middleware]),
})

export const persistor = persistStore(store)

export default store
