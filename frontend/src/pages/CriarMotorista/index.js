import React from 'react';
import { toast } from 'react-toastify';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import Navigator from '../../components/Navigator';

import { Container } from './styles';

import FormaterInput from '../../components/FormaterInput';

import api from '../../services/api';
import history from '../../services/history';

const schema = Yup.object().shape({
  nome: Yup.string('O nome deve ser em formato de texto').required(
    'O nome do motorista é obrigatório'
  ),
  cpf: Yup.string()
    .length(11, 'CPF deve ter 11 digitos')
    .required('CPF é obrigatório'),
  telefone: Yup.string()
    .length(12, 'Telefone deve ter 12 digitos')
    .required('Telefone é obrigatório'),
});

export default function CriarMotorista() {
  async function handleSubmit({ nome, cpf, telefone }) {
    try {
      await api.post('motoristas', {
        nome,
        cpf,
        telefone,
      });

      toast.success('Novo motorista cadastrado com sucesso!');
      history.push('/motoristas');
    } catch (err) {
      toast.error('Não foi possível cadastrar. Verifique os dados');
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
        <Input name="nome" placeholder="Digite o nome" />

        <FormaterInput name="cpf" label="CPF" formatTo="cpf" />

        <FormaterInput name="telefone" label="TELEFONE" formatTo="telefone" />

        <button type="submit">Confirmar</button>
      </Form>
    </Container>
  );
}
