import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'consys',
      storage,
      whitelist: ['auth', 'user', 'register'],
    },
    reducers
  );

  return persistedReducer;
};
