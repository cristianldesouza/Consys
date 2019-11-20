import React from 'react';
import { toast } from 'react-toastify';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import Navigator from '../../components/Navigator';

import { Container } from './styles';

import api from '../../services/api';

const schema = Yup.object().shape({
  nome: Yup.string('O nome deve ser em formato de texto').required(
    'O nome do motorista é obrigatório'
  ),
  cpf: Yup.number()
    .typeError('CPF é obrigatório')
    .test(
      'len',
      'O CPF deve ter 11 dígitos',
      val => val.toString().length === 11
    )
    .positive()
    .required(),
  telefone: Yup.number('Apenas números')
    .positive()
    .typeError('Telefone é obrigatório')
    .test(
      'len',
      'O Telefone deve ter 12 dígitos',
      val => val.toString().length === 12
    )
    .required(),
});

export default function CriarMotorista() {
  async function handleSubmit({ nome, cpf, telefone }, { resetForm }) {
    try {
      await api.post('motoristas', {
        nome,
        cpf,
        telefone,
      });

      toast.success('Novo motorista cadastrado com sucesso!');
      resetForm();
    } catch (err) {
      toast.error(err);
    }
  }

  return (
    <Container>
      <header>
        <strong>NOVO MOTORISTA</strong>

        <Navigator
          path="/motoristas"
          text="Voltar"
          icon="MdKeyboardArrowLeft"
        />
      </header>

      <Form schema={schema} onSubmit={handleSubmit}>
        <label htmlFor="nome">NOME</label>
        <Input name="nome" />

        <label htmlFor="cpf">CPF</label>
        <Input name="cpf" type="number" />

        <label htmlFor="telefone">TELEFONE</label>
        <Input name="telefone" />

        <button type="submit">Confirmar</button>
      </Form>
    </Container>
  );
}
