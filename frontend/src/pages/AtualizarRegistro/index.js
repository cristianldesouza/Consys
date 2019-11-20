import React from 'react';
import { useSelector } from 'react-redux';
import { Form } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import Navigator from '../../components/Navigator';
import DatePicker from '../../components/DatePicker';
import CurrencyInput from '../../components/CurrencyInput';

import { Container } from './styles';

import api from '../../services/api';

const schema = Yup.object().shape({
  dataSaida: Yup.date().required('Data da saída é obrigatório'),
  valorLocacao: Yup.number().required('Valor da locação é obrigatório'),
});

export default function AtualizarRegistro() {
  const { register } = useSelector(state => state.register);

  async function handleSubmit({ dataSaida, valorLocacao }, { resetForm }) {
    try {
      await api.post('saida', {
        id: register.id,
        dataSaida,
        valorLocacao,
      });

      toast.success('Registro atualizado com sucesso!');
      resetForm();
    } catch (err) {
      toast.error('Não foi possível atualiazar');
    }
  }

  return (
    <Container>
      <header>
        <strong>ATUALIZAR REGISTRO</strong>

        <Navigator path="/registros" text="Voltar" icon="MdKeyboardArrowLeft" />
      </header>

      <Form id="attRegister" schema={schema} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="dataSaida">DATA SAÍDA</label>
          <DatePicker name="dataSaida" />
        </div>

        <div>
          <CurrencyInput name="valorLocacao" label="VALOR LOCAÇÃO" />
        </div>
      </Form>

      <button type="submit" form="attRegister">
        CONFIRMAR
      </button>
    </Container>
  );
}
