import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { format, parseISO } from 'date-fns';
import { pt } from 'date-fns/locale';
import { MdDelete } from 'react-icons/md';
import { Container } from './styles';
import Navigator from '../../components/Navigator';

import api from '../../services/api';

export default function Motoristas() {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    async function loadDrivers() {
      const response = await api.get('motoristas');

      const formatedDrivers = response.data.map(driver => ({
        ...driver,
        formatedCreatedAt: format(
          parseISO(driver.createdAt),
          "dd 'de' MMMM 'de' yyyy",
          { locale: pt }
        ),
      }));

      setDrivers(formatedDrivers);
    }

    loadDrivers();
  }, []); //eslint-disable-line

  async function handleDelete(id) {
    try {
      await api.delete(`motoristas/${id}`);
      setDrivers(drivers.filter(driver => driver.id !== id));

      toast.success('Motorista excluído com sucesso!');
    } catch (err) {
      toast.error(err.response.data);
    }
  }

  return (
    <Container>
      <header>
        <strong>MOTORISTAS</strong>

        <Navigator path="/novomotorista" text="Cadastrar" icon="MdAdd" />
      </header>

      <table>
        <thead>
          <tr>
            <th>NOME</th>
            <th>CPF</th>
            <th>TELEFONE</th>
            <th>CADASTRADO EM</th>
          </tr>
        </thead>
        <tbody>
          {drivers &&
            drivers.map(driver => (
              <tr key={driver.id}>
                <td>{driver.nome}</td>
                <td>{driver.cpf}</td>
                <td>{driver.telefone}</td>
                <td>{driver.formatedCreatedAt}</td>
                <td>
                  <button type="button" onClick={() => handleDelete(driver.id)}>
                    <MdDelete size={20} />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Container>
  );
}
