import * as authActions from '../actions/auth.actions';

export interface State {
  userName?: string;
  friendlyName?: string;
}

export const initialState: State = {
  userName: null,
  friendlyName: null
};

export function reducer(state = initialState, action: authActions.AuthActions): State {
  switch (action.type) {
    case authActions.AuthActionTypes.SetAuths:
      return handleSetAuths(state, action);

    default:
      return state;
  }
}

function handleSetAuths(state: State, action: authActions.SetAuths): State {
  return {
    ...state,
    userName: action.payload.userName,
    friendlyName: action.payload.friendlyName
  };
}

export const getUserName = (state: State) => state.userName;
export const getFriendlyName = (state: State) => state.friendlyName;
