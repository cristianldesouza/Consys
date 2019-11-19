import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { signInSuccess, signFailure } from './actions';

import history from '../../../services/history';
import api from '../../../services/api';

export function* signIn({ payload }) {
  try {
    const { user, password } = payload;

    const response = yield call(api.post, 'sessions', {
      usuario: user,
      senha: password,
    });

    const { user: usuario, esta_logado } = response.data;

    api.defaults.headers.esta_logado = esta_logado;

    yield put(signInSuccess(esta_logado, usuario));

    history.push('/registros');
  } catch (err) {
    const { error } = err.response.data;

    toast.error(error);

    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  api.defaults.headers.esta_logado = true;
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
