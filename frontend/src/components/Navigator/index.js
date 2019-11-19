import React from 'react';
import { MdAdd, MdKeyboardArrowLeft } from 'react-icons/md';
import PropTypes from 'prop-types';

import { NavLinkStyled } from './styles';

export default function Navigator({ path, text, icon }) {
  return (
    <NavLinkStyled to={path}>
      {String(icon) === 'MdAdd' ? (
        <MdAdd size={20} />
      ) : (
        <MdKeyboardArrowLeft size={20} />
      )}

      {text}
    </NavLinkStyled>
  );
}

Navigator.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
