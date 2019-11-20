import React, { useState, useEffect, useRef } from 'react';
import NumberFormat from 'react-number-format';
import { useField } from '@rocketseat/unform';
import PropTypes from 'prop-types';

export default function CurrencyInput({ name, label }) {
  const ref = useRef();
  const { fieldName, defaultValue, registerField, error } = useField(name);
  const [value, setValue] = useState(defaultValue);

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

  function handleValueChange(object) {
    const { floatValue } = object;
    setValue(floatValue);
  }

  return (
    <>
      {label && <label htmlFor={fieldName}>{label}</label>}

      <NumberFormat
        thousandSeparator="."
        isNumericString
        decimalSeparator=","
        fixedDecimalScale
        allowNegative={false}
        decimalScale={2}
        prefix="R$ "
        ref={ref}
        name={fieldName}
        value={value}
        onValueChange={handleValueChange}
        placeholder="Digite um valor"
      />
      {error && <span>{error}</span>}
    </>
  );
}
