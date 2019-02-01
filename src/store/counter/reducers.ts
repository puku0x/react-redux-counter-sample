import {
  CounterState,
  INCREMENT,
  DECREMENT,
  RESET,
  CounterActionTypes
} from './types';

const initialState: CounterState = {
  value: 0
};

export function counterReducer(
  state = initialState,
  action: CounterActionTypes
): CounterState {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1
      };
    case DECREMENT:
      return {
        ...state,
        value: state.value - 1
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
}
