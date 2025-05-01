export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';
export const SIGN_OUT = 'SIGN_OUT';

export const signInSuccess = (user) => ({
    type: SIGN_IN_SUCCESS,
    payload: user,
  });
  
  export const signInFailure = (error) => ({
    type: SIGN_IN_FAILURE,
    payload: error,
  });
  
  export const signOut = () => ({
    type: SIGN_OUT
  });
  