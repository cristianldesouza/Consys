import React, { useRef, useEffect, useState } from 'react';
import pt from 'date-fns/locale/pt';
import ReactDatePicker, { registerLocale } from 'react-datepicker';

import { useField } from '@rocketseat/unform';

import 'react-datepicker/dist/react-datepicker.css';

export default function DatePicker({ name }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [selected, setSelected] = useState(defaultValue);
  registerLocale('pt-BR', pt);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  return (
    <>
      <ReactDatePicker
        name={fieldName}
        selected={selected}
        locale="pt-BR"
        dateFormat="P"
        onChange={date => setSelected(date)}
        placeholderText="Selecione uma data"
        ref={ref}
      />
      {error && <span>{error}</span>}
    </>
  );
}
