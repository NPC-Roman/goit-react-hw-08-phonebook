/*import { configureStore } from '@reduxjs/toolkit';
import { contactSlice } from './contactSlice';
import { filterSlice } from './filterSlice';

export const store = configureStore({
  reducer: {
    [contactSlice.name]: contactSlice.reducer,
    [filterSlice.name]: filterSlice.reducer,
  },
});*/

// import { configureStore } from '@reduxjs/toolkit';
// import { contactSlice } from './contacts/contactSlice';
// import { filterSlice } from './contacts/filterSlice';

// export const store = configureStore({
//   reducer: {
//     [contactSlice.name]: contactSlice.reducer,
//     [filterSlice.name]: filterSlice.reducer,
//   },
// });

// import { configureStore } from '@reduxjs/toolkit';
// import { contactReducer } from './contacts/contactSlice';
// import { filtersReducer } from './contacts/filterSlice';

// import storage from 'redux-persist/lib/storage';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

// const persistConfig = {
//   key: 'contacts',
//   storage,
// };

// const persistedContactsReducer = persistReducer(persistConfig, contactReducer);

// // export default () => {
// //   let store = createStore(persistedReducer);
// //   let persistor = persistStore(store);
// //   return { store, persistor };
// // };

// export const store = configureStore({
//   reducer: {
//     contacts: persistedContactsReducer,
//     filter: filtersReducer,
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export let persistor = persistStore(store);

import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactReducer } from './contacts/contactSlice';
import { filtersReducer } from './contacts/filterSlice';
import { authReducer } from './auth/authSlice';

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];

// Persisting token field from auth slice to localstorage
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactReducer,
    filter: filtersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
