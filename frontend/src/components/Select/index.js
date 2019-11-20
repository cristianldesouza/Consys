import React, { useRef, useEffect, useState } from 'react';
import Select from 'react-select';

import { useField } from '@rocketseat/unform';

export default function ReactSelect({
  name,
  label,
  options,
  multiple,
  ...rest
}) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [value, setValue] = useState(defaultValue);

  function parseSelectValue(selectRef) {
    const selectValue = selectRef.state.value;
    return selectValue ? selectValue.value : '';
  }

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'state.value',
      parseValue: parseSelectValue,
      clearValue: selectRef => {
        selectRef.select.clearValue();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  function handleOnChange(obj) {
    setValue(obj.value);
  }

  return (
    <>
      {label && <label htmlFor={fieldName}>{label}</label>}

      <Select
        name={fieldName}
        aria-label={fieldName}
        options={options}
        isMulti={multiple}
        onChange={handleOnChange}
        defaultValue={value}
        placeholder="Selecione uma das opções"
        ref={ref}
        {...rest}
      />

      {error && <span>{error}</span>}
    </>
  );
}
