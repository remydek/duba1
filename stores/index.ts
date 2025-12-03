import { configureStore } from '@reduxjs/toolkit';

import { persistStore, persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
// import ThemeReducer from './slices/theme-slice';
import storage from 'redux-persist/lib/storage'
import newsReducer from './slices/news-slice';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['theme','news']
}
const rootReducer = combineReducers({    
    news: newsReducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch