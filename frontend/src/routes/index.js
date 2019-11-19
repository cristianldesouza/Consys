import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';

import Registros from '../pages/Registros';

import Motoristas from '../pages/Motoristas';
import CriarMotorista from '../pages/CriarMotorista';

import Configuracoes from '../pages/Configuracoes';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={SignIn} exact />
      <Route path="/registros" component={Registros} isPrivate />

      <Route path="/motoristas" component={Motoristas} isPrivate />
      <Route path="/novomotorista" component={CriarMotorista} isPrivate />

      <Route path="/configuracoes" component={Configuracoes} isPrivate />
    </Switch>
  );
}
