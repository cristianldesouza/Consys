import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import register from './register/reducer';

export default combineReducers({ auth, user, register });
