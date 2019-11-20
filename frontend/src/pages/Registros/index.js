import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { parseISO, format } from 'date-fns';
import { pt } from 'date-fns/locale';
import { MdModeEdit } from 'react-icons/md';

import Navigator from '../../components/Navigator';

import { Container } from './styles';

import { editRegister } from '../../store/modules/register/actions';

import api from '../../services/api';
import { formatPrice } from '../../util/formater';

export default function Registros() {
  const dispatch = useDispatch();
  const [registerIn, setRegisterIn] = useState([]);
  const [registerOut, setRegisterOut] = useState([]);

  useEffect(() => {
    async function loadContainers() {
      const response = await api.get('registros');

      const entryRegister = response.data.filter(
        register => register.status === 0
      );

      if (entryRegister) {
        setRegisterIn(
          entryRegister.map(register => ({
            ...register,
            dataEntradaFormatada: format(
              parseISO(register.data_entrada),
              "dd 'de' MMMM 'de' yyyy",
              { locale: pt }
            ),
          }))
        );
      }

      const exitRegister = response.data.filter(
        register => register.status !== 0
      );
      if (exitRegister) {
        setRegisterOut(
          exitRegister.map(register => ({
            ...register,
            dataSaidaFormatada: format(
              parseISO(register.data_saida),
              "dd 'de' MMMM 'de' yyyy",
              { locale: pt }
            ),
            valorLocacaoFormatado: formatPrice(register.valor_locacao),
          }))
        );
      }
    }

    loadContainers();
  }, []); // eslint-disable-line

  function handleEdit(registers, id) {
    dispatch(editRegister(registers, id));
  }

  return (
    <Container>
      <header>
        <strong>REGISTROS</strong>

        <Navigator path="/novoregistro" text="Cadastrar" icon="MdAdd" />
      </header>

      {registerIn.length > 0 && (
        <div>
          <strong>ENTRADA</strong>
          <table>
            <thead>
              <tr>
                <th>ENTRADA EM</th>
                <th>MOTORISTA</th>
                <th>CLIENTE</th>
                <th>PREVISÃO</th>
                <th>LOCALIZAÇÃO</th>
                <th>PÉS</th>
                <th>NÍVEL</th>
              </tr>
            </thead>
            <tbody>
              {registerIn.map(register => (
                <tr key={register.id}>
                  <td>{register.dataEntradaFormatada}</td>
                  <td>{register.motorista.nome}</td>
                  <td>{register.cliente.nome_fantasia}</td>
                  <td>{register.previsao_dias}</td>
                  <td>{register.localizacao}</td>
                  <td>{register.container_pes}</td>
                  <td>{register.nivel}</td>
                  <td>
                    <NavLink
                      to="/atualizarregistro"
                      onClick={() => handleEdit(registerIn, register.id)}
                    >
                      <MdModeEdit size={20} />
                    </NavLink>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {registerOut.length > 0 && (
        <div>
          <strong>SAÍDA</strong>
          <table>
            <thead>
              <tr>
                <th>SAÍDA EM</th>
                <th>MOTORISTA</th>
                <th>CLIENTE</th>
                <th>VALOR LOCAÇÃO</th>
                <th>ÚLTIMA LOCALIZAÇÃO</th>
                <th>PÉS</th>
                <th>NÍVEL</th>
              </tr>
            </thead>
            <tbody>
              {registerOut &&
                registerOut.map(register => (
                  <tr key={register.id}>
                    <td>{register.dataSaidaFormatada}</td>
                    <td>{register.motorista.nome}</td>
                    <td>{register.cliente.nome_fantasia}</td>
                    <td>{register.valorLocacaoFormatado}</td>
                    <td>{register.localizacao}</td>
                    <td>{register.container_pes}</td>
                    <td>{register.nivel}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </Container>
  );
}
