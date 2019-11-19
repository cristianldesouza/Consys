import React, { useEffect, useState } from 'react';

import { Container } from './styles';
import Navigator from '../../components/Navigator';

import api from '../../services/api';

export default function Motoristas() {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    async function loadDrivers() {
      const response = api.get('motoristas');
      setDrivers(response.data);
    }

    loadDrivers();
  }, []); //eslint-disable-line

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
              <tr>
                <td>{driver.nome}</td>
                <td>{driver.cpf}</td>
                <td>{driver.telefone}</td>
                <td>{driver.created_at}</td>
                <td>excluir</td>
              </tr>
            ))}
        </tbody>
      </table>
    </Container>
  );
}
