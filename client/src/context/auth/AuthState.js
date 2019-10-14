import React, { useReducer } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
} from "../types";

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAutheticated: null,
    loading: true,
    error: null,
    user: null
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // LOAD USER

  // REGISTER USER

  // LOGIN USER

  // LOGOUT

  // CLEAR ERRROS

  return (
    <AuthContext.Provider
      value={{
        //   Initital State
        token: state.token,
        isAutheticated: state.isAutheticated,
        loading: state.loading,
        error: state.error,
        user: state.user
        // Actions
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
