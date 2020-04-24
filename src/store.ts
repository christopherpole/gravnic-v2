import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { AsyncStorage } from 'react-native';
import { persistStore, persistReducer } from 'redux-persist';

import gameReducer from '@/reducers/game';
import userReducer from '@/reducers/user';
import uiReducer from '@/reducers/ui';

//  Persist the user reducer to localstorage
const persistedUserReducer = persistReducer(
  {
    key: 'root',
    storage: AsyncStorage,
  },
  userReducer,
);

const middleware = applyMiddleware(thunk);

const rootReducer = combineReducers({
  game: gameReducer,
  user: persistedUserReducer,
  ui: uiReducer,
});

export const store = createStore(rootReducer, middleware);
export const persistor = persistStore(store);
