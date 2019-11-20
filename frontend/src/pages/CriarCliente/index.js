import React from 'react';
import { toast } from 'react-toastify';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import Navigator from '../../components/Navigator';

import { Container } from './styles';

import api from '../../services/api';

const schema = Yup.object().shape({
  nome_fantasia: Yup.string().required('Nome fantasia é obrigatório'),
  cnpj: Yup.number('Apenas números')
    .typeError('CNPJ é obrigatório')
    .test(
      'len',
      'CNPJ deve ter 16 dígitos',
      val => val.toString().length === 16
    )
    .positive()
    .required(),
  email: Yup.string()
    .email('Deve ser um email válido')
    .required('Email é obrigatório'),
  telefone: Yup.number('Apenas números')
    .typeError('Telefone é obrigatório')
    .test(
      'len',
      'Telefone deve ter 12 dígitos',
      val => val.toString().length === 12
    )
    .positive()
    .required(),
});

export default function CriarCliente() {
  async function handleSubmit(
    { nome_fantasia, cnpj, email, telefone },
    { resetForm }
  ) {
    try {
      await api.post('clientes', {
        nomeFantasia: nome_fantasia,
        cnpj,
        email,
        telefone,
      });

      toast.success('Cliente cadastrado com sucesso');
      resetForm();
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
        <Input name="nome_fantasia" />

        <label htmlFor="cnpj">CNPJ</label>
        <Input name="cnpj" type="number" />

        <label htmlFor="email">EMAIL</label>
        <Input name="email" type="email" />

        <label htmlFor="telefone">TELEFONE</label>
        <Input name="telefone" type="numer" />

        <button type="submit">Confirmar</button>
      </Form>
    </Container>
  );
}
