import {
  LOAD_CONTACTS_START,
  LOAD_CONTACTS_SUCCESS,
  LOAD_CONTACTS_ERROR,
  ADD_CONTACT_START,
  ADD_CONTACT_SUCCESS,
  ADD_CONTACT_ERROR,
  UPDATE_CONTACT_START,
  UPDATE_CONTACT_SUCCESS,
  UPDATE_CONTACT_ERROR,
  DELETE_CONTACT_START,
  DELETE_CONTACT_SUCCESS,
  DELETE_CONTACT_ERROR,
  VIEW_CONTACT_START,
  VIEW_CONTACT_SUCCESS,
  VIEW_CONTACT_ERROR,
} from "./actionTypes";

export const loadContactsStart = () => {
  return {
    type: LOAD_CONTACTS_START,
  };
};

export const loadContactsSuccess = () => {
  return {
    type: LOAD_CONTACTS_SUCCESS,
  };
};
export const loadContactsError = () => {
  return {
    type: LOAD_CONTACTS_ERROR,
  };
};

export const addContactStart = () => {
  return {
    type: ADD_CONTACT_START,
  };
};

export const addContactSuccess = () => {
  return {
    type: ADD_CONTACT_SUCCESS,
  };
};
export const addContactError = () => {
  return {
    type: ADD_CONTACT_ERROR,
  };
};

export const viewContactStart = () => {
  return {
    type: VIEW_CONTACT_START,
  };
};

export const viewContactSuccess = () => {
  return {
    type: VIEW_CONTACT_SUCCESS,
  };
};
export const viewContactError = () => {
  return {
    type: VIEW_CONTACT_ERROR,
  };
};

export const UpdateContactStart = () => {
  return {
    type: UPDATE_CONTACT_START,
  };
};

export const updateContactSuccess = () => {
  return {
    type: UPDATE_CONTACT_SUCCESS,
  };
};
export const updateContactError = () => {
  return {
    type: UPDATE_CONTACT_ERROR,
  };
};

export const deleteContactStart = () => {
  return {
    type: DELETE_CONTACT_START,
  };
};

export const deleteContactSuccess = () => {
  return {
    type: DELETE_CONTACT_SUCCESS,
  };
};
export const deleteContactError = () => {
  return {
    type: DELETE_CONTACT_ERROR,
  };
};
