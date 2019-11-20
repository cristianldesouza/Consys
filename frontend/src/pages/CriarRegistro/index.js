import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import Navigator from '../../components/Navigator';
import Select from '../../components/Select';
import DatePicker from '../../components/DatePicker';

import { Container } from './styles';

import api from '../../services/api';
import history from '../../services/history';

const schema = Yup.object().shape({
  data: Yup.date().required('A data é obrigatória'),
  motorista_id: Yup.number()
    .typeError('O Motorista é obrigatório')
    .required(),
  cliente_id: Yup.number()
    .typeError('O Cliente é obrigatório')
    .required(),
  previsao_dias: Yup.number()
    .positive()
    .typeError('Previsão é obrigatória')
    .required(),
  localizacao: Yup.string().required('A previsão é obrigatória'),
  container_pes: Yup.number()
    .positive()
    .typeError('Pés é obrigatório')
    .required(),
  nivel: Yup.number()
    .positive()
    .typeError('Nível é obrigatório')
    .required(),
});

export default function CriarRegistro() {
  const [drivers, setDrivers] = useState();
  const [clients, setClients] = useState();

  useEffect(() => {
    async function loadDrivers() {
      const response = await api.get('motoristas');
      setDrivers(
        response.data.map(driver => ({
          label: driver.nome,
          value: driver.id,
        }))
      );
    }

    async function loadClients() {
      const response = await api.get('clientes');

      setClients(
        response.data.map(client => ({
          label: client.nome_fantasia,
          value: client.id,
        }))
      );
    }

    loadDrivers();
    loadClients();
  }, []); // eslint-disable-line

  async function handleSubmit({
    data,
    motorista_id,
    cliente_id,
    status,
    previsao_dias,
    localizacao,
    container_pes,
    nivel,
  }) {
    try {
      await api.post('/entrada', {
        dataEntrada: data,
        motoristaId: motorista_id,
        clienteId: cliente_id,
        status,
        previsao: previsao_dias,
        localizacao,
        containerPes: container_pes,
        nivel,
      });
      toast.success('Registro salvo com sucesso!');
      history.push('registros');
    } catch (err) {
      toast.error('Não foi possível realizar o cadastro');
    }
  }
  return (
    <Container>
      <header>
        <strong>NOVO REGISTRO</strong>

        <Navigator path="/registros" text="Voltar" icon="MdKeyboardArrowLeft" />
      </header>

      <Form id="newRegister" schema={schema} onSubmit={handleSubmit}>
        <div className="normal">
          <label htmlFor="data">DATA</label>
          <DatePicker name="data" />
        </div>

        <div className="select">
          <Select
            name="motorista_id"
            label="MOTORISTA"
            options={drivers}
            multiple={false}
          />
        </div>

        <div className="select">
          <Select
            name="cliente_id"
            label="CLIENTE"
            options={clients}
            multiple={false}
          />
        </div>

        <div className="normal">
          <label htmlFor="previsao_dias">PREVISÃO (em dias)</label>
          <Input type="number" placeholder="Ex: 1" name="previsao_dias" />
        </div>

        <div className="normal">
          <label htmlFor="localizacao">LOCALIZAÇÃO</label>
          <Input name="localizacao" placeholder="Ex: A2" />
        </div>

        <div className="normal">
          <label htmlFor="container_pes">PÉS</label>
          <Input type="number" name="container_pes" placeholder="Ex: 200" />
        </div>

        <div className="normal">
          <label htmlFor="nivel">NÍVEL</label>
          <Input type="number" name="nivel" placeholder="Ex: 200" />
        </div>
      </Form>

      <button type="submit" form="newRegister">
        Confirmar
      </button>
    </Container>
  );
}
