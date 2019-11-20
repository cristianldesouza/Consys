import produce from 'immer';

const INITIAL_STATE = {
  register: null,
};

export default function register(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@register/EDIT': {
        const { registers, id } = action.payload;
        draft.register = registers.find(r => r.id === id);
        break;
      }
      default:
    }
  });
}
