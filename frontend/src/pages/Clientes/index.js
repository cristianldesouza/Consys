import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { format, parseISO } from 'date-fns';
import { pt } from 'date-fns/locale';
import { MdDelete } from 'react-icons/md';
import { Container } from './styles';
import Navigator from '../../components/Navigator';

import api from '../../services/api';

export default function Clientes() {
  const [clients, setClients] = useState();

  useEffect(() => {
    async function loadClients() {
      const response = await api.get('clientes');

      const formatedClients = response.data.map(client => ({
        ...client,
        formatedCreatedAt: format(
          parseISO(client.createdAt),
          "dd 'de' MMMM 'de' yyyy",
          { locale: pt }
        ),
      }));

      setClients(formatedClients);
    }

    loadClients();
  }, []); // estlint-disable-line

  async function handleClick(id) {
    try {
      await api.delete(`clientes/${id}`);
      setClients(clients.filter(client => client.id !== id));

      toast.success('Cliente excluído com sucesso!');
    } catch (err) {
      toast.error(err.response.data.error);
    }
  }

  return (
    <Container>
      <header>
        <strong>CLIENTES</strong>

        <Navigator path="/novocliente" text="Cadastrar" icon="MdAdd" />
      </header>

      <table>
        <thead>
          <tr>
            <th>NOME FANTASIA</th>
            <th>CNPJ</th>
            <th>EMAIL</th>
            <th>TELEFONE</th>
            <th>CADASTRADO EM</th>
          </tr>
        </thead>
        <tbody>
          {clients &&
            clients.map(client => (
              <tr key={client.id}>
                <td>{client.nome_fantasia}</td>
                <td>{client.cnpj}</td>
                <td>{client.email}</td>
                <td>{client.telefone}</td>
                <td>{client.formatedCreatedAt}</td>
                <td>
                  <button type="button" onClick={() => handleClick(client.id)}>
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
