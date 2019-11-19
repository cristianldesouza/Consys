import React from 'react';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import api from '../../services/api';

import { Container, Profile } from './styles';

export default function Configuracoes() {
  const user = useSelector(state => state.user.profile);

  async function handleSubmit({ qtd_containers }) {
    try {
      const response = await api.post('configuracoes', {
        qtd_containers,
      });
    } catch (err) {
      const { error } = err.response.data;
      toast.error(error);
    }
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

      <Form onSubmit={handleSubmit}>
        <label htmlFor="qtd_containers">QUANTIDADE DE CONTAINERS</label>
        <Input name="qtd_containers" type="number" />

        <button type="submit">Confirmar</button>
      </Form>
    </Container>
  );
}
