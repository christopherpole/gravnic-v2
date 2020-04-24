import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { AsyncStorage } from 'react-native';
import { persistStore, persistReducer } from 'redux-persist';

import reducer from '@/reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['fastMode', 'locale'],
};

const persistedReducer = persistReducer(persistConfig, reducer);
const middleware = applyMiddleware(thunk);

export const store = createStore(persistedReducer, middleware);
export const persistor = persistStore(store);
