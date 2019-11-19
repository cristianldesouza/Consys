export function signInRequest(user, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: {
      user,
      password,
    },
  };
}

export function signInSuccess(esta_logado, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { esta_logado, user },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
