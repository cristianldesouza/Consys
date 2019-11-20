export function editRegister(registers, id) {
  return {
    type: '@register/EDIT',
    payload: {
      registers,
      id,
    },
  };
}
