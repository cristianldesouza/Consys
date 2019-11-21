import React, { useState, useEffect, useRef } from 'react';
import NumberFormat from 'react-number-format';
import { useField } from '@rocketseat/unform';
import PropTypes from 'prop-types';

export default function FormaterInput({ name, label, formatTo }) {
  const ref = useRef();
  const { fieldName, defaultValue, registerField, error } = useField(name);

  const [value, setValue] = useState(defaultValue);
  const [format, setFormat] = useState();
  const [placeholder, setPlaceholder] = useState();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: fieldName,
        ref: ref.current,
        path: 'props.value',
        clearValue: pickerRef => {
          pickerRef.setInputValue(null);
        },
      });
    }
  }, [ref, fieldName]); // eslint-disable-line

  useEffect(() => {
    if (formatTo.toUpperCase() === 'CPF') {
      setFormat('###.###.###-##');
      setPlaceholder('Digite o CPF');
    }

    if (formatTo.toUpperCase() === 'CNPJ') {
      setFormat('##.###.###/####-##');
      setPlaceholder('Digite o CNPJ');
    }

    if (formatTo.toUpperCase() === 'TELEFONE') {
      setFormat('(###) #####-####');
      setPlaceholder('Digite o telefone');
    }
  }, [document]); // eslint-disable-line

  function handleValueChange(object) {
    const { value } = object;
    setValue(value);
  }

  return (
    <>
      {label && <label htmlFor={fieldName}>{label}</label>}

      <NumberFormat
        isNumericString
        ref={ref}
        name={fieldName}
        value={value}
        format={format}
        onValueChange={handleValueChange}
        placeholder={placeholder}
      />
      {error && <span>{error}</span>}
    </>
  );
}

FormaterInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  formatTo: PropTypes.string.isRequired,
};

FormaterInput.defaultProps = {
  label: PropTypes.null,
};
