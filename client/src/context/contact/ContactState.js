import React, { useReducer } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  SET_ALERT,
  REMOVE_ALERT
} from "../types";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Chey Baby",
        email: "cheybaby@gmail.com",
        phone: "347-159-1928",
        type: "personal"
      },
      {
        id: 2,
        name: "Ryan R",
        email: "ryanr@gmail.com",
        phone: "347-357-5678",
        type: "personal"
      },
      {
        id: 3,
        name: "Sam Fisher",
        email: "sfisher@gmail.com",
        phone: "347-948-3784",
        type: "professional"
      }
    ],
    current: null,
    filtered: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);
  // ADD CONTACT

  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({
      type: ADD_CONTACT,
      payload: contact
    });
  };

  // DELETE CONTACT

  const deleteContact = id => {
    dispatch({
      type: DELETE_CONTACT,
      payload: id
    });
  };

  // SET CURRENT CONTACT

  const setCurrent = contact => {
    dispatch({
      type: SET_CURRENT,
      payload: contact
    });
  };

  // CLEAR CURRENT CONTACT

  const clearCurrent = () => {
    dispatch({
      type: CLEAR_CURRENT
    });
  };

  // UPDATE CONTACT

  const updateContact = contact => {
    dispatch({
      type: UPDATE_CONTACT,
      payload: contact
    });
  };

  //   FILTER CONTACTS

  const filterContacts = text => {
    dispatch({
      type: FILTER_CONTACTS,
      payload: text
    });
  };

  //   CLEAR FILTER
  const clearFilter = () => {
    dispatch({
      type: CLEAR_FILTER
    });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
