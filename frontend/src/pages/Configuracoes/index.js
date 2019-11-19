import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import * as Yup from 'yup';

import api from '../../services/api';
import { signOut } from '../../store/modules/auth/actions';

import { Container, Profile } from './styles';

const schema = Yup.object().shape({
  qtdContainers: Yup.number('A quantidade deve ser numérica')
    .positive('A quantidade deve ser um número positivo')
    .required('A quantidade é obrigatória'),
});

export default function Configuracoes() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.profile);
  const [initialData, setInitialData] = useState('');

  useEffect(() => {
    async function loadConfigs() {
      const response = await api.get('config');

      const { qtd_containers } = response.data;

      setInitialData({
        qtdContainers: qtd_containers,
      });
    }

    loadConfigs();
  }, []); // eslint-disable-line

  async function handleSubmit({ qtdContainers }) {
    try {
      const response = await api.post('config', {
        qtdContainers,
      });

      toast.success(response.data);
    } catch (err) {
      const { error } = err.response.data;
      toast.error(error);
    }
  }

  function handleClick() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Profile>
        <img
          src={`https://api.adorable.io/avatars/285/${user.usuario}.png`}
          alt="Avatar"
        />
        <strong>{user.usuario}</strong>
      </Profile>

      <Form onSubmit={handleSubmit} schema={schema} initialData={initialData}>
        <label htmlFor="qtdContainers">QUANTIDADE DE CONTAINERS</label>
        <Input name="qtdContainers" type="number" />

        <button type="submit">Confirmar</button>
        <button type="button" id="quit" onClick={handleClick}>
          Sair do Consys
        </button>
      </Form>
    </Container>
  );
}
