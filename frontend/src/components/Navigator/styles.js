import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { darken } from 'polished';

export const NavLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  border-radius: 4px;
  height: 36px;
  width: 142px;
  color: #fff;
  background: #6669b6;
  padding: 0 15px;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.1, '#6669b6')};
  }

  svg {
    margin-right: 10px;
  }
`;
