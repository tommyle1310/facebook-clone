import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './features/authSlice';
import { userReducer } from './features/userSlice';
import { postReducer } from './features/postSlice';

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    post: postReducer,
});

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
