import React, { useReducer } from "react";
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
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);
  // ADD CONTACT

  // DELETE CONTACT

  // SET CURRENT CONTACT

  // CLEAR CURRENT CONTACT

  // UPDATE CONTACT

  // CLEAR FILTER

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
