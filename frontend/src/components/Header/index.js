import React from 'react';
import { NavLink } from 'react-router-dom';

import { MdSettings } from 'react-icons/md';

import { Container, NavigationList, Navigation, Profile } from './styles';

import logo from '../../assets/logo_transparent.png';

export default function Header() {
  return (
    <Container>
      <div>
        <img src={logo} alt="Consys" />

        <nav>
          <NavigationList>
            <Navigation>
              <NavLink to="/registros" activeStyle={{ color: '#6669b6' }}>
                REGISTROS
              </NavLink>
            </Navigation>

            <Navigation>
              <NavLink to="/clientes" activeStyle={{ color: '#6669b6' }}>
                CLIENTES
              </NavLink>
            </Navigation>

            <Navigation>
              <NavLink to="/motoristas" activeStyle={{ color: '#6669b6' }}>
                MOTORISTAS
              </NavLink>
            </Navigation>
          </NavigationList>
        </nav>
      </div>

      <Profile>
        <NavLink to="/configuracoes" activeStyle={{ color: '#6669b6' }}>
          <MdSettings size={30} />
        </NavLink>
      </Profile>
    </Container>
  );
}
