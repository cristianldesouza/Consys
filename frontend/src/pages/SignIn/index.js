import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '../../store/modules/auth/actions';

import logo from '../../assets/logo.png';

const schema = Yup.object().shape({
  user: Yup.string().required('O usuário é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ user, password }) {
    dispatch(signInRequest(user, password));
  }

  return (
    <>
      <img src={logo} alt="Consys" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <label htmlFor="user">
          <span>SEU USUÁRIO</span>
          <Input name="user" placeholder="Seu usuário" />
        </label>

        <label htmlFor="password">
          <span>SUA SENHA</span>
          <Input name="password" type="password" placeholder="*********" />
        </label>

        <button type="submit">
          {loading ? 'Carregando...' : 'Entrar no sistema'}
        </button>
      </Form>
    </>
  );
}
