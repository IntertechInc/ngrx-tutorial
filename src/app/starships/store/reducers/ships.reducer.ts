import { Action } from '@ngrx/store';
import { ShipsActions, ShipsActionTypes, SetShips } from '../actions/ships.actions';

export interface State {
  allShips: any[];
}

const initialState: State = {
  allShips: []
};

export function reducer(state = initialState, action: ShipsActions): State {
  switch (action.type) {

    case ShipsActionTypes.SetShips:
      return handleSetShips(state, action);

    default:
      return state;
  }
}

function handleSetShips(state, action: SetShips): State {
  return {
    ...state,
    allShips: action.payload
  }
}

export const getAllShips = (state: State) => state.allShips;
