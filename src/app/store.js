// store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { authReducer } from './features/authSlice';
import { userReducer } from './features/userSlice';

// Persist config
const persistConfig = {
    key: 'root',
    storage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, authReducer, userReducer);

// Configure the store
const store = configureStore({
    reducer: {
        auth: persistedReducer,
        user: persistedReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

// Create a persistor
const persistor = persistStore(store);

export { store, persistor };
