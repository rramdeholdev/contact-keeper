import React, { useReducer } from "react";
import axios from "axios";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import setAuthToken from "../../utils/setAuthToken";
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
    isAuthenticated: null,
    loading: true,
    error: null,
    user: null
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // LOAD USER
  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const res = await axios.get("/api/auth");
      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    } catch (error) {
      dispatch({
        type: AUTH_ERROR
      });
    }
  };

  // REGISTER USER
  //   Using axios and async to register user
  const register = async formData => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    try {
      const res = await axios.post("/api/users", formData, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
      loadUser();
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload: error.response.data.msg
      });
    }
  };

  // LOGIN USER
  const login = () => {
    console.log("login user");
  };
  // LOGOUT
  const logout = () => {
    console.log("logout user");
  };
  // CLEAR ERRROS
  const clearErrors = () => {
    dispatch({
      type: CLEAR_ERRORS
    });
  };
  return (
    <AuthContext.Provider
      value={{
        //   Initital State
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        error: state.error,
        user: state.user,
        // Actions
        register,
        loadUser,
        login,
        logout,
        clearErrors
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
