import { SIGN_IN_SUCCESS, SIGN_IN_FAILURE, SIGN_OUT } from './Actions';

const initialState = {
  user: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return { ...state, user: action.payload, error: null };
    case SIGN_IN_FAILURE:
      return { ...state, error: action.payload };
    case SIGN_OUT:
      return { ...state, user: null, error: null };
    default:
      return state;
  }
};

export default authReducer;
    