import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'names/CHANGE_INPUT';
const INSERT = 'names/INSERT';

export const changeInput = createAction(CHANGE_INPUT, input => input);
export const insert = createAction(INSERT, name => name);

const initialState = {
  input: '',
  names: []
};

export default handleActions({
  [CHANGE_INPUT]: (state, { payload: input }) => ({
    ...state,
    input
  }),
  [INSERT]: (state, { payload: name }) => ({
    ...state,
    names: state.names.concat(name),
  })
}, initialState);