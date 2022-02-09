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
} from "redux/actions/actionTypes";

const defaultState = {
  loading: false,
  error: null,
  contacts: [],
};

const Reducer = (state = defaultState, action: any = {}) => {
  switch (action.type) {
    case LOAD_CONTACTS_START:
      break;
    case LOAD_CONTACTS_SUCCESS:
      break;
    case LOAD_CONTACTS_ERROR:
      break;
    case ADD_CONTACT_START:
      break;
    case ADD_CONTACT_SUCCESS:
      break;
    case ADD_CONTACT_ERROR:
      break;
    case VIEW_CONTACT_START:
      break;
    case VIEW_CONTACT_SUCCESS:
      break;
    case VIEW_CONTACT_ERROR:
      break;
    case UPDATE_CONTACT_START:
      break;
    case UPDATE_CONTACT_SUCCESS:
      break;
    case UPDATE_CONTACT_ERROR:
      break;
    case DELETE_CONTACT_START:
      break;
    case DELETE_CONTACT_SUCCESS:
      break;
    case DELETE_CONTACT_ERROR:
      break;

    default:
      return state;
  }
};
export default Reducer;
