import React from 'react';
import { toast } from 'react-toastify';
import { Form, Input } from '@rocketseat/unform';
import Navigator from '../../components/Navigator';

import { Container } from './styles';

import api from '../../services/api';

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

      <Form onSubmit={handleSubmit}>
        <label htmlFor="nome">NOME</label>
        <Input name="nome" />

        <label htmlFor="cpf">CPF</label>
        <Input name="cpf" />

        <label htmlFor="telefone">TELEFONE</label>
        <Input name="telefone" />

        <button type="submit">Confirmar</button>
      </Form>
    </Container>
  );
}
