import React from 'react';
import { toast } from 'react-toastify';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import Navigator from '../../components/Navigator';
import FormaterInput from '../../components/FormaterInput';

import { Container } from './styles';

import api from '../../services/api';
import history from '../../services/history';

const schema = Yup.object().shape({
  nome_fantasia: Yup.string().required('Nome fantasia é obrigatório'),
  cnpj: Yup.string()
    .length(14, 'CNPJ deve ter 14 dígitos')
    .required('CNPJ é obrigatório'),
  email: Yup.string()
    .email('Deve ser um email válido')
    .required('Email é obrigatório'),
  telefone: Yup.string()
    .length(12, 'Telefone deve ter 12 digitos')
    .required('Telefone é obrigatório'),
});

export default function CriarCliente() {
  async function handleSubmit({ nome_fantasia, cnpj, email, telefone }) {
    try {
      await api.post('clientes', {
        nomeFantasia: nome_fantasia,
        cnpj,
        email,
        telefone,
      });

      toast.success('Cliente cadastrado com sucesso');
      history.push('/clientes');
    } catch (err) {
      toast.error(err.response.data.error);
    }
  }

  return (
    <Container>
      <header>
        <strong>NOVO CLIENTE</strong>

        <Navigator path="/clientes" text="Voltar" icon="MdKeyboardArrowLeft" />
      </header>

      <Form onSubmit={handleSubmit} schema={schema}>
        <label htmlFor="nome_fantasia">NOME FANTASIA</label>
        <Input name="nome_fantasia" placeholder="Digite o nome fantasia" />

        <FormaterInput name="cnpj" label="CNPJ" formatTo="cnpj" />

        <label htmlFor="email">EMAIL</label>
        <Input name="email" type="email" placeholder="Digite o email" />

        <FormaterInput name="telefone" label="TELEFONE" formatTo="telefone" />

        <button type="submit">Confirmar</button>
      </Form>
    </Container>
  );
}
